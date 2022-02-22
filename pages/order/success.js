import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import LayoutController from '../../layouts/LayoutController';
import styles from '../../styles/Order.module.scss';

export const getStaticProps = async () => {

  const categories =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
      .then(res => res.json())

  return {
    props: {
      categories,
    },
		revalidate: 10
  }
}

const Success = ({ categories }) => {

	const user = useSelector(state => state.user)
	const router = useRouter()

	React.useEffect(() => {
		if (!user.isAuth) {
			router.push('/')	
		}
	}, [user.isAuth, router])

	return (
    <LayoutController categories={categories}>

      <Head>
        <title>Заказ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

			<div className={styles.success}>
				
			</div>

		</LayoutController>
	);
}

export default Success;
