import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Search as SearchIcon, UnfoldMore } from '../../icons'
import If from '../If/If'
import styles from './SearchBox.module.scss'

const SearchBox = ({ onChangeSearchFocus, isFocused }) => {

	const [value, setValue] = useState('')

	// const inputRef = useRef(null)

	const [selectedCategory, setSelectedCategory] = useState('Все продукты')
	const [selectedCategoryId, setSelectedCategoryId] = useState(null)
	const [categoryMenuIsOpen, setCategoryMenuIsOpen] = useState(false)

	const categories = useSelector(state => state.categories)

  const router = useRouter()

	const handleFocusInput = () => {
		onChangeSearchFocus(true)
	}

	const handleSearch = () => {
		if (value.trim() === '') return

		let query = '/search?q=' + value

		if (selectedCategoryId)
			query += '&categoryId=' + selectedCategoryId

		router.replace(query)

		onChangeSearchFocus(false)
	}

	useEffect(() => {
		
		const handleWindowClick = e => {
			if (!e.target.closest('.'+styles.category)) 
				setCategoryMenuIsOpen(false)
		}
		
		window.addEventListener('click', handleWindowClick)
		
		return () => window.removeEventListener('click', handleWindowClick)

	}, [])

	useEffect(() => {
		if (router.query.q)
			setValue(router.query.q)
	}, [router.query])

	return (
		<div className={classNames(styles.root, isFocused && styles.focus)}>
			
			<input
				type='text'
				value={value}
				// ref={inputRef}
				onChange={e => setValue(e.target.value)}
				onFocus={() => handleFocusInput()}
				onKeyPress={e => {
					if (e.code === 'Enter')
						 handleSearch()
				}}
				className={styles.input}
				placeholder='Найти нужный вам товар...'
			/>

			<div className={styles.category}>
				<button 
					className={styles.category_label} 
					onClick={() => setCategoryMenuIsOpen(!categoryMenuIsOpen)}
				>
					<div className={styles.category_label_text}>
						{selectedCategory.slice(0, 20) + (selectedCategory.length > 20 ? '...' : '')}
					</div>
					<div className={styles.category_label_icon}>
						<UnfoldMore size={16} />
					</div>
				</button>
				<If condition={categoryMenuIsOpen}>
					<div className={styles.category_menu}>
						<button  
							className={styles.category_menu_item}
							onClick={() => {
								setCategoryMenuIsOpen(false)
								setSelectedCategory('Все продукты')
								setSelectedCategoryId(null)
							}}
						>
							Все продукты
						</button>
						{categories.map(category => 
							<React.Fragment key={category.id}>
								<button  
									className={styles.category_menu_item}
									onClick={() => {
										setCategoryMenuIsOpen(false)
										setSelectedCategory(category.name)
										setSelectedCategoryId(category.id)
									}}
								>
									{category.name}
								</button>
								{category.subcategories.map(subcategory =>
									<button 
										key={subcategory.id} 
										className={styles.category_menu_subitem}
										onClick={() => {
											setCategoryMenuIsOpen(false)
											setSelectedCategory(subcategory.name)
											setSelectedCategoryId(subcategory.id)
										}}
									>
										{subcategory.name}
									</button>	
								)}
							</React.Fragment>
						)}
					</div>
				</If>
			</div>

			<button onClick={() => handleSearch()} className={styles.button}>
				<span className={styles.button_wrap}>
					<SearchIcon />
				</span>
			</button>

		</div>
	)
}

export default SearchBox
