import Head from 'next/head'
import React from 'react';
import BannerSlider from '../components/BannerSlider/BannerSlider'
import BrandsSlider from '../components/BrandsSlider/BrandsSlider'
import ProductCart from '../components/ProductCart'
import Products from '../components/Products/Products'
import Title from '../components/Title/Title'
import LayoutController from '../layouts/LayoutController'
import styles from '../styles/Home.module.scss'
import * as skeletons from '../skeletons'
import { useSelector } from 'react-redux';

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
  const [pending, setPending] = React.useState(true)

  const favorites = useSelector(state => state.favorites)
  const user = useSelector(state => state.user)

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        setPending(true);
        let config = {
          method: "GET",
        }
        if (user.isAuth)
          config = {
            ...config,
            headers: {
              "Authorization": "Bearer " + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN),
            }
          }
        const productsRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/product/filtration', config)
        const products = await productsRes.json()
        setProducts(products)
      }
      finally {
        setPending(false)
      }
    }
    getProducts()
  }, [user.isAuth])
  
  return (
    <LayoutController categories={categories}>
      <Head>
        <title>Большая стирка</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.root}>
        
        <BannerSlider className={styles.banner_slider} banners={banners} />

        <div className="container">
          <Products>
            {pending ? 
              <skeletons.ProductsSkeleton /> :
                products.data && products.data.map(product => {
                let initialFavorite = false;
                if (!user.isAuth)
                  favorites.forEach(favorite => {
                    if (favorite.id === product.id) {
                      initialFavorite = true;
                    }
                  })
                else 
                  initialFavorite = product.isFavorite
                return (
                  <ProductCart
                    id={product.id}
                    key={product.id}
                    data={product}
                    initialFavorite={initialFavorite}
                  />
                )
              })
            }
          </Products>
        </div>

        <Title className={styles.title}>Бренды</Title>

        <BrandsSlider brands={brands} className={styles.brand_slider} />
        
      </div>
    </LayoutController>
  )
}

export default Home