import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './CategoryList.module.scss' 
import Link from 'next/link'

const CategoryList = ({ open }) => {

	const [middleWare_Open, setmiddleWare_Open] = useState(false)
	const [activeCategory, setActiveCategory] = useState(null)

	const categories = useSelector(state => state.categories)

	useEffect(() => {
		let timeout
		
		if (!open) 
			timeout = setTimeout(() => {
				setmiddleWare_Open(false)
			}, 500)
		else 
			setmiddleWare_Open(true)

		return () => clearTimeout(timeout)
	}, [open])

	useEffect(() => {
		setActiveCategory(categories[0])
	}, [categories])
	
	if (!middleWare_Open || !activeCategory) return <></>
	return (
		<div className={classNames(styles.root, !open && styles.close)}>

			<div className={styles.container}>

				<LeftBar 
					activeCategory={activeCategory}
					categories={categories} 
					onMouseOver={category => setActiveCategory(category)} 
				/>

				<SubCategoryList activeCategory={activeCategory} />

			</div>

		</div>
	)
}

const LeftBar = ({ categories, onMouseOver, activeCategory }) => {
	return (
		<div className={styles.left_bar}>
			{categories.map(category =>
				<Link 
					href={`/category/${category.id}`}
					key={category.id}
				>
					<a 
						className={classNames(
							styles.category_group_link, 
							activeCategory.id === category.id && styles.active
						)} 
						draggable={false}
						onMouseOver={() => onMouseOver(category)}
					>
						<div className={styles.category_icon}>
							<Image 
								src={category.iconpath} 
								alt='icon' 
								width={20}
								height={20}
							/>
						</div>
						<div className={styles.category_name}>
							{category.name}
						</div>
					</a>
				</Link>
			)}
		</div>
	)
}

const SubCategoryList = ({ activeCategory }) => {
	return (
		<div className={styles.category}>
			<Link
				href={`/category/${activeCategory.id}`}
				key={activeCategory.id}
			>
				<a className={styles.title} draggable={false}>
					{activeCategory.name}
				</a>
			</Link>
			<div className={styles.sub_category_list}>
				{activeCategory.subcategories.map(subCategory => 
					<SubSubCategoryList 	
						key={subCategory.id}
						subCategory={subCategory}
					/>
				)}
			</div>
		</div>
	)
}

const SubSubCategoryList = ({ subCategory }) => {
	return (
		<div className={styles.sub_category}>
			<Link
				href={`/category/${subCategory.id}`}
				key={subCategory.id}
			>
				<a className={styles.sub_title} draggable={false}>
					{subCategory.name}
				</a>
			</Link>
			<div className={styles.sub_sub_category_list}>
				{subCategory.subcategories.map(subSubCategory =>
					<Link
						href={`/category/${subSubCategory.id}`}
						key={subSubCategory.id}
					>
						<a className={styles.sub_sub_title} draggable={false}>
							{subSubCategory.name}
						</a>
					</Link>
				)}
			</div>
		</div>
	)
}

export default CategoryList
