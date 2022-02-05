import React from 'react';
import BannerSlider from '../components/BannerSlider/BannerSlider'
import BrandsSlider from '../components/BrandsSlider/BrandsSlider'
import ProductCart from '../components/ProductCart'
import Products from '../components/Products/Products'
import Title from '../components/Title/Title'
import LayoutController from '../layouts/LayoutController'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {

  const categoriesRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await categoriesRes.json()

  const brandsRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/brands')
  const brands = await brandsRes.json()

  const bannersRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/banner')
  const banners = await bannersRes.json()

  return {
    props: {
      categories,
      brands,
      banners
    },
  }
}

const Home = ({ categories, brands, banners }) => {

  const [products, setProducts] = React.useState(null)

  React.useEffect(() => {
    const getProducts = async () => {
      const productsRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/product/filtration')
      const products = await productsRes.json()
      setProducts(products)
    }
    getProducts()
  }, [])
  
  return (
    <LayoutController categories={categories}>
      <div className={styles.root}>
        
        <BannerSlider className={styles.banner_slider} banners={banners} />

        {/* <Title className={styles.title}>Хиты продаж</Title> */}

        <div className="container">
          <Products>
            {products && products.data.map(product => 
              <ProductCart 
                id={product.id}
                key={product.id}
                data={product}
              />
            )}
          </Products>
        </div>

        <Title className={styles.title}>Бренды</Title>

        <BrandsSlider brands={brands} className={styles.brand_slider} />
        
      </div>
    </LayoutController>
  )
}

export default Home