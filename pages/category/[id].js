import React from 'react'
import Title from '../../components/Title/Title'
import LayoutController from '../../layouts/LayoutController'
import styles from '../../styles/Category.module.scss'

export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await res.json()
	const paths = []
	
	categories.forEach(category => {
		paths.push({ 
			params: { id: category.id.toString() }
		})
		category.subCategories.forEach(subcategory => {
			paths.push({ 
				params: { id: subcategory.id.toString() }
			})
			subcategory.subCategories.forEach(subsubcategory => {
				paths.push({ 
					params: { id: subsubcategory.id.toString() }
				})
			})
		})
	})

	return {
		paths,
		fallback: false
	}
} 

export const getStaticProps = async context => {
	const { id } = context.params
	const url = process.env.NEXT_PUBLIC_DEVHOST+'/products?categoryId='+id
	const responseProducts = await fetch(url, {
		method: 'GET',
		credentials: 'include'
	})
	const products = await responseProducts.json()

  const responseCategories = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await responseCategories.json()

	let category = []

	categories.forEach(_category => {
		if (_category.id === id)
			category.push(_category)
		else _category.subCategories.forEach(_subcategory => {
			if (_subcategory.id === id) {
				category.push(_category)
				category.push(_subcategory)
			}
			else _subcategory.subCategories.forEach(_subsubcategory => {
				if (_subsubcategory.id === id) {
					category.push(_category)
					category.push(_subcategory)
					category.push(_subsubcategory)
				}
			})
		})
	})

	return { props: { products, categories, category } }
}

const Category = ({ products, categories, category }) => {

	return (
		<LayoutController categories={categories}>
			<div className={styles.root}>
        <Title className={styles.title}>{category[category.length-1]?.name}</Title>
			</div>
		</LayoutController>
	)
}

export default Category
