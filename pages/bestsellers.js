import React from 'react';
import Head from 'next/head';
import Products from '../components/Products/Products';
import Title from '../components/Title/Title';
import LayoutController from '../layouts/LayoutController';
import styles from '../styles/Discounts.module.scss';
import * as skeletons from '../skeletons';
import ProductCart from '../components/ProductCart';
import { useSelector } from 'react-redux';
import { logout } from '../redux/actions/user.actions';

export const getStaticProps = async () => {

  const categoriesRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await categoriesRes.json()

  return {
    props: {
      categories,
    },
  }
}

const Bestsellers = ({ categories }) => {

  const [products, setProducts] = React.useState(null)
	const [pending, setPending] = React.useState(false);

  const favorites = useSelector(state => state.favorites)
  const user = useSelector(state => state.user)

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        setPending(true);
        let config = {}
        if (user.isAuth)
          config = {
            headers: {
              'Authorization': 'Bearer ' + user.isAuth ? localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN) : ''
            }
          }
        const productsRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/product/filtration?tag=3', config)
        if (productsRes.status === 401 || productsRes.status === 403) {
          localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
          window.location.href = '/'
          dispatch(logout())
        }const products = await productsRes.json()
        setProducts(products)
      }
      finally {
				setTimeout(() => {
					setPending(false)
				}, 200)
      }
    }
    getProducts()
  }, [user.isAuth])

	return (
    <LayoutController categories={categories}>
      <Head>
        <title>Хит продаж большой стирки</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
			<div className={styles.root}>
				<Title className={styles.title}>
					Хит продаж
				</Title>
				<div className="container">
					<Products>
            {pending ? 
              <skeletons.ProductsSkeleton /> :
              products && products.data.map(product => {
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
			</div>
		</LayoutController>
	);
}

export default Bestsellers;
