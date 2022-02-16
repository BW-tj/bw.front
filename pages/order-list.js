import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Title from '../components/Title/Title';
import LayoutController from '../layouts/LayoutController';
import styles from '../styles/OrderList.module.scss';

export const getStaticProps = async () => {

  const categories =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
      .then(res => res.json())

  return {
    props: {
      categories,
    }
  }
}

const OrderList = ({ categories }) => {

	const user = useSelector(state => state.user)
	const [data, setData] = React.useState([])
	const [pending, setPending] = React.useState(false)

	React.useEffect(() => {
		const getData = async () => {
			try {
				setPending(true)
				const response = await fetch(process.env.NEXT_PUBLIC_HOST + 'order/userorders/' + user.id);
				if (response.status === 401 || response.status === 403) {
					localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
					window.location.href = '/'
					dispatch(logout())
				}const dataOrder = await response.json();
				
				setData(dataOrder)
			}
			finally {
				setPending(false)
			}
		}
		getData()
	}, [user.isAuth, user.id])
	
	React.useEffect(() => {
		if (!localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN) || !user.isAuth) {
			window.location.href = '/';
		}
	}, [user.isAuth])

	return (
    <LayoutController categories={categories}>
      <Head>
        <title>Оформить заказ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
			<div className={styles.root}>

				<Title className={styles.title}>
					Список ваших заказов
				</Title>
				
				<div className="container">

					{!pending && data.length === 0 &&
						<div className={styles.noContent}>
							У вас пока нет заказов
						</div>
					}

				</div>

			</div>
		</LayoutController>
	);
}

export default OrderList
