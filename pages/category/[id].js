import React from 'react'
import Head from 'next/head'
import Title from '../../components/Title/Title'
import LayoutController from '../../layouts/LayoutController'
import styles from '../../styles/Category.module.scss'
import SubcategorySidebar from '../../components/SubcategorySidebar'
import RefineSearchSidebar from './../../components/RefineSearchSidebar';
import Tools from '../../components/Tools';
import * as skeletons from '../../skeletons';
import Products from '../../components/Products/Products';
import ProductCart from '../../components/ProductCart'
import { Pagination } from '../../components/Pagination'
import { QueryToString } from './../../functions/query';
import SubcategoryList from '../../components/SubcategoryList'
import { logout } from '../../redux/actions/user.actions'

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

  const responseCategories = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await responseCategories.json()

	let category = []
	let subCategories = []

	categories.forEach(_category => {
		if (_category.id === id) {
			category.push(_category)
			subCategories = _category.subCategories
		}
		else _category.subCategories.forEach(_subcategory => {
			if (_subcategory.id === id) {
				category.push(_category)
				category.push(_subcategory)
				subCategories = _subcategory.subCategories
			}
			else _subcategory.subCategories.forEach(_subsubcategory => {
				if (_subsubcategory.id === id) {
					category.push(_category)
					category.push(_subcategory)
					category.push(_subsubcategory)
					subCategories = _subcategory.subCategories
				}
			})
		})
	})

	return { 
		props: { categories, category, subCategories },
		revalidate: 10
	}
}

const Category = ({ categories, category, subCategories }) => {
  const [pending, setPending] = React.useState(true);
  const [products, setProducts] = React.useState(null);
  const [params, setParams] = React.useState({
		minPrice: 0,
		maxPrice: 1000,
		categoryId: category.id,
		pageNumber: 1,
		pageSize: 30,
		brands: [],
		selectedBrands: [],
		filters: [],
		sort: 1
	});

	const loadData = React.useCallback(async (_params) => {
		try {
			let url =
				process.env.NEXT_PUBLIC_HOST + "/product/filtration?" + QueryToString(_params);
			const config = {
				method: "GET",
			};
			setPending(true);
			const response = await fetch(url, config);
			if (response.status === 401 || response.status === 403) {
				localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
				window.location.href = '/'
				dispatch(logout())
			}
			const data = await response.json();
			setProducts(data);
		}
		finally {
			window.setTimeout(() => {
				setPending(false);
			}, 200)
		}
	}, [])

  React.useEffect(() => {    
    let url =
      process.env.NEXT_PUBLIC_HOST + "/product/filtration?categoryId=" + category[category.length-1].id;
    const config = {
      method: "GET",
    };
    const getData = async () => {
      try {
        setPending(true);
        const response = await fetch(url, config);
				if (response.status === 401 || response.status === 403) {
          localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
          window.location.href = '/'
          dispatch(logout())
        }
        const data = await response.json();
        setProducts(data);
      }
      finally {
        window.setTimeout(() => {
          setPending(false);
        }, 200)
      }
    }
    getData();
  }, [category])

	return (
		<LayoutController categories={categories}>
			<Head>
				<title>{category[category.length-1].name || '""'} – купить в большой стирке</title>
			</Head>
			<div className={styles.root}>
        <Title className={styles.title}>{category[category.length-1]?.name}</Title>
				{category[category.length-1].subCategories.length !== 0 &&
					<SubcategoryList className={styles.subcategories} subCategories={subCategories} />
				}
        <div className={styles.container}>
					<div className={styles.sidebars}>
						<div className={styles.sidebar}>
							<SubcategorySidebar 
								categories={subCategories}
								id={category[category.length-1].id} 
							/> 
						</div>
						<div className={styles.sidebar}>
							<RefineSearchSidebar 
								minPrice={products?.minPrice || 0}
								maxPrice={products?.maxPrice || 0}
								minPriceValue={params.minPrice}
								maxPriceValue={params.maxPrice}
								onChangePrice={value => {
									setParams({
										...params,
										minPrice: value[0],
										maxPrice: value[1]
									})
									loadData({
										...params,
										minPrice: value[0],
										maxPrice: value[1]
									})
								}}
								brands={products?.brands || []}
								selectedBrands={params.selectedBrands}
								onToggleBrand={brand => {
									setParams({
										...params,
										selectedBrands: params.selectedBrands.includes(brand)
											? params.selectedBrands.filter(item => item !== brand)
											: [...params.selectedBrands, brand]
									})
									loadData({
										...params,
										selectedBrands: params.selectedBrands.includes(brand)
											? params.selectedBrands.filter(item => item !== brand)
											: [...params.selectedBrands, brand]
									})
								}}
								filters={products?.filters || []}
								selectedFilters={params?.filters || []}
								toggleFilter={filterValueId => {
									setParams({
										...params,
										filters: params.filters.includes(filterValueId)
											? params.filters.filter(item => item !== filterValueId)
											: [...params.filters, filterValueId]
									})
									loadData({
										...params,
										filters: params.filters.includes(filterValueId)
											? params.filters.filter(item => item !== filterValueId)
											: [...params.filters, filterValueId]
									})
								}} 
							/> 
						</div>
					</div>
          <div className={styles.products}>
            <Tools 
              pageSize={params?.pageSize || 30}
              onPageSizeChange={pageSize => {
								setParams({...params, pageSize})
								loadData({...params, pageSize})
							}} 
              sort={params?.sort || 1} 
              onSort={sort => {
								setParams({...params, sort})
								loadData({...params, sort})
							}} 
            />
            <Products>
              {pending && 
                <skeletons.ProductsSkeleton />
              }
              {!pending && products.data.map(product => 
                <ProductCart 
                  id={product.id}
                  key={product.id}
                  data={product}
                />
              )}
              <Pagination 
                page={params?.pageNumber || 1}
                totalPages={products?.totalPages || 1}
                onPageChange={(page) => setParams(prev => ({...prev, pageNumber: page}))}
              />
            </Products>
          </div>
				</div>
			</div>
		</LayoutController>
	)
}

export default Category
