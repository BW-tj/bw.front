import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import styles from './index.module.scss'

const CartSidebar = ({ deliveryType }) => {

	const cart = useSelector(state => state.cart);

	return (
		<div className={styles.root}>
			
			<div className={styles.title}>
				Выбранные товары:
			</div>

			<div className={styles.cart}>

				{cart.map(item => 
					<React.Fragment key={item.id}>
						<div className={styles.item}>
							<div className={styles.item__image}>
								<Image
									alt={item.name}
									src={process.env.NEXT_PUBLIC_HOST_WITHOUT_API+item.imagePath}
									width={66}
									height={66}
								/>
							</div>
							<div className={styles.item__title}>
								{item.name || item.productName}
							</div>
							<div className={styles.item__count}>
								{item.count} шт.
							</div>
							<div className={styles.item__price}>
								{item.totalPrice} с.
							</div>
						</div>	
						<div className={styles.divider} />
					</React.Fragment>
				)}

			</div>
			
			<div className={styles.title}>
				Итого:
			</div>

			<div className={styles.result}>
				<span>Сумма заказа</span>
				<span>{cart.reduce((sum, item) => sum + item.totalPrice * item.count, 0) + (deliveryType ? deliveryType.price : 0) } с.</span>
			</div>

		</div>
	);
}

export default CartSidebar;