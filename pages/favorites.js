import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products/Products';
import Title from '../components/Title/Title';
import LayoutController from '../layouts/LayoutController';
import styles from '../styles/Favorites.module.scss'
import * as skeletons from '../skeletons'
import ProductCart from '../components/ProductCart';
import { updateFavorites } from '../redux/actions/favorites.actions';

export const getStaticProps = async () => {

  const categoriesRes = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await categoriesRes.json()

  return {
    props: {
      categories,
    },
  }
}

const Favorites = ({ categories }) => {

	const [pending, setPending] = React.useState(false);

	const user = useSelector(state => state.user)
	const favorites = useSelector(state => state.favorites)
	const dispatch = useDispatch()
	const router = useRouter()

	React.useEffect(() => {
		if (!user.isAuth)
			router.push('/')
	}, [user.isAuth, router])

	React.useEffect(() => {
		if (!user.isAuth) return
		let timeout 
		const getData = async () => {
			await setPending(true)
			await dispatch(updateFavorites())
			timeout = window.setTimeout(() => {
				setPending(false)
			}, 500)
		}
		getData()
		return () => window.clearTimeout(timeout)
	}, [user, dispatch])

	return (
    <LayoutController categories={categories}>
			<div className={styles.root}>
				<Title className={styles.title}>
					Избранное
				</Title>
				<div className="container">
					<Products>
						{pending ? 
              <skeletons.ProductsSkeleton /> :
							favorites.map(product => 
								<ProductCart
									id={product.id}
									key={product.id}
									data={product}
								/>
							)
            }					
					</Products>
				</div>
			</div>
		</LayoutController>
	);
}

export default Favorites;
