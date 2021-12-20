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
		if (value.trim() === '') 
			return onChangeSearchFocus(false)

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

	useEffect(() => {
		const locationPathname = window.location.pathname.split('/').slice(1)

		let id = null
		
		if (locationPathname[0] === 'category')
			id = locationPathname[1]
		else if (router.query.categoryId)
			id = router.query.categoryId
			
		if (id) {
			setSelectedCategoryId(id)
			categories.forEach(category => {
				if (category.id === id)
					return setSelectedCategory(category.name)
				category.subcategories.forEach(subcategory => {
					if (subcategory.id === id)
						return setSelectedCategory(subcategory.name)
					subcategory.subcategories.forEach(subsubcategory => {
						if (subsubcategory.id === id)
							return setSelectedCategory(subsubcategory.name)
					})
				})
			})
		}
	}, [categories, router.query])

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

			<CategoryWrap 
				categoryMenuIsOpen={categoryMenuIsOpen}
				categories={categories}
				selectedCategory={selectedCategory}
				setCategoryMenuIsOpen={setCategoryMenuIsOpen}
				setSelectedCategory={setSelectedCategory}
				setSelectedCategoryId={setSelectedCategoryId}
			/>

			<button onClick={() => handleSearch()} className={styles.button}>
				<span className={styles.button_wrap}>
					<SearchIcon />
				</span>
			</button>

		</div>
	)
}

const CategoryWrap = ({ 
	categoryMenuIsOpen, 
	categories,
	selectedCategory,
	setSelectedCategory,
	setCategoryMenuIsOpen,
	setSelectedCategoryId
}) => {
	return (
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
				<CategoryMenu 
					categories={categories} 
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					setCategoryMenuIsOpen={setCategoryMenuIsOpen}
					setSelectedCategoryId={setSelectedCategoryId}
				/>
			</If>
		</div>
	)
}

const CategoryMenu = ({
	categories,
	selectedCategory,
	setCategoryMenuIsOpen,
	setSelectedCategory,
	setSelectedCategoryId,
}) => {
	return (
		<div className={styles.category_menu}>
			<button  
				className={classNames(
					styles.category_menu_item, 
					selectedCategory === 'Все продукты' && styles.selected
				)}
				onClick={() => {
					setCategoryMenuIsOpen(false)
					setSelectedCategory('Все продукты')
					setSelectedCategoryId(null)
				}}
			>
				Все продукты
			</button>
			{categories.map(category => 
				<CategoryMenuItem 
					key={category.id}
					category={category} 
					selectedCategory={selectedCategory} 
					setCategoryMenuIsOpen={setCategoryMenuIsOpen} 
					setSelectedCategory={setSelectedCategory} 
					setSelectedCategoryId={setSelectedCategoryId} 
				/>
			)}
		</div>
	)
}

const CategoryMenuItem = ({
	category,
	selectedCategory,
	setCategoryMenuIsOpen,
	setSelectedCategoryId,
	setSelectedCategory
}) => {
	return (
		<>
			<button  
				className={classNames(
					styles.category_menu_item,
					selectedCategory === category.name && styles.selected
				)}
				onClick={() => {
					setCategoryMenuIsOpen(false)
					setSelectedCategory(category.name)
					setSelectedCategoryId(category.id)
				}}
			>
				{category.name}
			</button>
			{category.subcategories.map(subcategory =>
				<CategoryMenuSubItem 
					key={subcategory.id}
					subcategory={subcategory} 
					selectedCategory={selectedCategory}
					setCategoryMenuIsOpen={setCategoryMenuIsOpen}
					setSelectedCategoryId={setSelectedCategoryId}
					setSelectedCategory={setSelectedCategory}
				/>
			)}
		</>
	)
}

const CategoryMenuSubItem = ({
	subcategory,
	selectedCategory,
	setCategoryMenuIsOpen,
	setSelectedCategoryId,
	setSelectedCategory
}) => {
	return (
		<>
			<button 
				className={classNames(
					styles.category_menu_subitem,
					selectedCategory === subcategory.name && styles.selected
				)}
				onClick={() => {
					setCategoryMenuIsOpen(false)
					setSelectedCategory(subcategory.name)
					setSelectedCategoryId(subcategory.id)
				}}
			>
				{subcategory.name}
			</button>	
			{subcategory.subcategories.map(subsubcategory =>
				<CategoryMenuSubSubItem 
					key={subsubcategory} 
					subsubcategory={subsubcategory} 
					selectedCategory={selectedCategory}
					setCategoryMenuIsOpen={setCategoryMenuIsOpen}
					setSelectedCategoryId={setSelectedCategoryId}
					setSelectedCategory={setSelectedCategory}
				/>	
			)}
		</>
	)
}

const CategoryMenuSubSubItem = ({ 
	subsubcategory,
	selectedCategory,
	setCategoryMenuIsOpen,
	setSelectedCategoryId,
	setSelectedCategory
}) => {
	return (
		<button 
			key={subsubcategory.id}
			className={classNames(
				styles.category_menu_subsubitem,
				selectedCategory === subsubcategory.name && styles.selected
			)}
			onClick={() => {
				setCategoryMenuIsOpen(false)
				setSelectedCategory(subsubcategory.name)
				setSelectedCategoryId(subsubcategory.id)
			}}
		>
			{subsubcategory.name}
		</button>	
	)
}

export default SearchBox
