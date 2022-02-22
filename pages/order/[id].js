import React from 'react';
import Head from 'next/head';
import styles from '../../styles/OrderList.module.scss';
import LayoutController from '../../layouts/LayoutController';
import classNames from 'classnames';

export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST+'/order/getall')
  const orders = await res.json()
	const paths = []

	orders.data.forEach(order => {
		paths.push({ 
			params: { id: order.orderId }
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

  const responseOrder = await fetch(process.env.NEXT_PUBLIC_HOST+'/order/'+id)
  const order = await responseOrder.json()

	return { 
		props: { categories, order, id },
		revalidate: 10  
	}
}

const OrderId = ({categories, order, id}) => {
	return (
    <LayoutController categories={categories}>
      <Head>
        <title>Заказ {id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
			<div className={styles.single}>
				<div className={styles.container}>
					<div className={styles.panel}>
						<div className={styles.item}>
							<div className={classNames(styles.property, styles.statusProperty)}>
								Статус заказа:
							</div>
							<div className={styles.value}>
								<div 
									className={classNames(
										styles.status,
										order.orderStatus === 'Новый' && styles.new,
										order.orderStatus === 'Одобрено' && styles.approved,
										order.orderStatus === 'Отказано' && styles.rejected,
									)}
								>
									{order.orderStatus}
								</div>
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.property}>
								Фамилия заказчика:
							</div>
							<div className={styles.value}>
								{order.lastName}
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.property}>
								Имя заказчика:
							</div>
							<div className={styles.value}>
								{order.firstName}
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.property}>
								Дата заказ:
							</div>
							<div className={styles.value}>
								{new Date(order.orderAt).toLocaleDateString()}
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.property}>
								Способ доставки:
							</div>
							<div className={styles.value}>
								{order.deliveryType}
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.property}>
								Способ оплаты:
							</div>
							<div className={styles.value}>
								{order.paymentType}
							</div>
						</div>
						<div className={styles.subtitle}>
							Комментарий к заказу:
						</div>
						<div className={styles.description}>
							{order.description}
						</div>
						<div className={styles.subtitle}>
							Список товаров:
						</div>
						<div className={styles.products}>
							{order.type.map((product, index) => 
								<div className={styles.product} key={index}>
									<div className={styles.item}>
										<div className={styles.property}>
											Наименование товара:
										</div>
										<div className={styles.value}>
											{product.name}
										</div>
									</div>
									<div className={styles.item}>
										<div className={styles.property}>
											Стоимость товара за единицу:
										</div>
										<div className={styles.value}>
											{product.price - product.price/100*product.discount}
										</div>
									</div>
									<div className={styles.item}>
										<div className={styles.property}>
											Количество товара:
										</div>
										<div className={styles.value}>
											{product.count}
										</div>
									</div>
								</div>	
							)}
						</div>
					</div>
				</div>
			</div>
		</LayoutController>
	);
}

export default OrderId;
