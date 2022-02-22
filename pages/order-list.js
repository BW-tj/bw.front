import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Title from '../components/Title/Title';
import LayoutController from '../layouts/LayoutController';
import styles from '../styles/OrderList.module.scss';
import { useRouter } from 'next/router';
import { KeyboardArrowDown } from '../icons';
import classNames from 'classnames';

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

const OrderList = ({ categories }) => {

	const user = useSelector(state => state.user)
	const router = useRouter()
	const [data, setData] = React.useState([])
	const [pending, setPending] = React.useState(false)

	const handleGoToOrder = React.useCallback(id => {
		router.push(`/order/${id}`)
	}, [router])

	React.useEffect(() => {
		if (!user.isAuth) {
			return router.push('/')
		}
		const getData = async () => {
			try {
				setPending(true)
				const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/order/userorders', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + user.token
					}
				});
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
	}, [user, router])

	React.useEffect(() => {
		console.log(data)
	}, [data])
	
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

					{!pending && data.length !== 0 &&
						<div className={styles.table}>
							<div className={styles.header}>
								<div className={styles.col}>Статус</div>
								<div className={styles.col}>Кол-во товаров</div>
								<div className={styles.col}>Способ дотавки</div>
								<div className={styles.col}>Способ оплаты</div>
								<div className={styles.col}>Стоимость</div>
								<div className={styles.col}>Дата заказа</div>
							</div>
							{data.map((item, index) => 
								<button className={styles.row} key={index} onClick={() => handleGoToOrder(item.orderId)}>
									<div className={styles.col}>
										{item.orderStatus}
									</div>
									<div className={styles.col}>
										{item.type.reduce((acc, item) => acc + item.count, 0)} шт.
									</div>
									<div className={styles.col}>
										{item.deliveryType}
									</div>
									<div className={styles.col}>
										{item.paymentType}
									</div>
									<div className={styles.col}>
										{item.type.reduce((acc, item) => acc + (item.price-item.price/100*item.discount), 0)} с.
									</div>
									<div className={styles.col}>
										{new Date(item.orderAt).toLocaleDateString()}
									</div>
								</button>
							)}
						</div>
					}

				</div>

				{!pending && data.length !== 0 &&
					<div className={styles.mobileTable}>
						{data.map((item, index) => 
							<MobileDropdown item={item} key={index} />
						)}
					</div>
				}

			</div>
		</LayoutController>
	);
}

const MobileDropdown = ({ item }) => {

	const [open, setOpen] = React.useState(false)

	return (
		<div className={styles.mobileDropdown}>
      <button className={styles.mobileDropdown__label} onClick={() => setOpen(!open)}>
				<div className={styles.container}>
					<div className={styles.mobileDropdown__prop}>
						Стоимость
					</div>
					<div className={styles.mobileDropdown__value}>
						{item.type.reduce((acc, item) => acc + (item.price-item.price/100*item.discount), 0)} с.
					</div>
					<div className={classNames(styles.mobileDropdown__arrow, open && styles.open)} >
						<KeyboardArrowDown />
					</div>
				</div>
			</button>
			{open &&
				<div className={styles.mobileDropdown__content}>
					<div className={styles.container}>
						<div className={styles.mobileDropdown__rows}>
							<div className={styles.mobileDropdown__content__row}>
								<div className={styles.mobileDropdown__prop}>
									Статус
								</div>
								<div className={styles.mobileDropdown__value}>
									<div className={classNames(
										styles.status,
										item.orderStatus === 'Новый' && styles.new,
										item.orderStatus === 'Одобрено' && styles.approved,
										item.orderStatus === 'Отказано' && styles.rejected,
									)}>
										{item.orderStatus} 
									</div>
								</div>
							</div>
							<div className={styles.mobileDropdown__content__row}>
								<div className={styles.mobileDropdown__prop}>
									Кол-во товаров
								</div>
								<div className={styles.mobileDropdown__value}>
									{item.type.reduce((acc, item) => acc + item.count, 0)} шт.
								</div>
							</div>
							<div className={styles.mobileDropdown__content__row}>
								<div className={styles.mobileDropdown__prop}>
									Способ дотавки
								</div>
								<div className={styles.mobileDropdown__value}>
									{item.deliveryType} 
								</div>
							</div>
							<div className={styles.mobileDropdown__content__row}>

								<div className={styles.mobileDropdown__prop}>
									Способ оплаты
								</div>
								<div className={styles.mobileDropdown__value}>
									{item.paymentType} 
								</div>
							</div>
							<div className={styles.mobileDropdown__content__row}>

								<div className={styles.mobileDropdown__prop}>
									Дата заказа
								</div>
								<div className={styles.mobileDropdown__value}>
									{new Date(item.orderAt).toLocaleDateString()} 
								</div>
							</div>
						</div>
						<Link href={"/order/"+item.orderId}>
							<a className={styles.mobileDropdown__link}>
								Подробнее
							</a>
						</Link>
					</div>
				</div>
			}
		</div>
	)
}

export default OrderList
