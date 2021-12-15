import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Search as SearchIcon } from '../../icons'
import If from '../If/If'
import styles from './SearchBox.module.scss'

const SearchBox = ({ value, setValue, onSearch, onChangeSearchFocus, isFocused }) => {

	const [selectedCategory, setSelectedCategory] = useState('Все категории')
	const [selectedCategoryId, setSelectedCategoryId] = useState(null)
	const [categoryMenuIsOpen, setCategoryMenuIsOpen] = useState(false)

	const categories = useSelector(state => state.categories)

	const handleFocusInput = () => {
		onChangeSearchFocus(true)
	}

	useEffect(() => {
		
		const handleWindowClick = e => {
			if (!e.target.closest('.'+styles.category)) 
				setCategoryMenuIsOpen(false)
		}
		
		window.addEventListener('click', handleWindowClick)
		
		return () => window.removeEventListener('click', handleWindowClick)

	}, [])

	return (
		<div className={classNames(styles.root, isFocused && styles.focus)}>
			
			<input
				type='text'
				value={value}
				onChange={e => setValue(e.target.value)}
				onFocus={() => handleFocusInput()}
				className={styles.input}
				placeholder='Найти нужный вам товар...'
			/>

			<div className={styles.category}>
				<button 
					className={styles.category_label} 
					onClick={() => setCategoryMenuIsOpen(!categoryMenuIsOpen)}
				>
					<div className={styles.category_label_text}>
						{selectedCategory}
					</div>
				</button>
				<If condition={categoryMenuIsOpen}>
					<div className={styles.category_menu}>
						{categories.map(category => 
							<React.Fragment key={category.id}>
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

			<button onClick={onSearch} className={styles.button}>
				<span className={styles.button_wrap}>
					<SearchIcon />
				</span>
			</button>

		</div>
	)
}

export default SearchBox
