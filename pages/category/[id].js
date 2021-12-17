import React from 'react'

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
	const response = await fetch(process.env.NEXT_PUBLIC_HOST+'/products?categoryId='+id)
	const products = await response.json()

	return { props: { products } }
}

const Category = ({ products }) => {
	return (
		<div>
			{products.length && products.map(product => product.name)}
		</div>
	)
}

export default Category
