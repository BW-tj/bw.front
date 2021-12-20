import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
		category.subcategories.forEach(subcategory => {
			paths.push({ 
				params: { id: subcategory.id.toString() }
			})
			subcategory.subcategories.forEach(subsubcategory => {
				paths.push({ 
					params: { id: subsubcategory.id.toString() }
				})
			})
		})
	})

	console.log(JSON.stringify(paths))

	return {
		paths,
		fallback: false
	}
} 

export const getStaticProps = async context => {
	const { id } = context.params
	const responseProducts = await fetch(process.env.NEXT_PUBLIC_HOST+'/products?categoryId='+id)
	const products = await responseProducts.json()

  const responseCategories = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await responseCategories.json()

	return { props: { products, categories } }
}

const Category = ({ products, categories }) => {

	return (
		<LayoutController categories={categories}>
			<div className={styles.root}>
				{products.length && products.map(product => product.name)}
			</div>
		</LayoutController>
	)
}

export default Category
