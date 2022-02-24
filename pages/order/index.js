import React from 'react';
import styles from '../../styles/Order.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import LayoutController from '../../layouts/LayoutController';
import Title from '../../components/Title/Title';
import CartSidebar from '../../components/CartSidebar';
import classNames from 'classnames';
import { RadioButtonChecked, RadioButtonUnchecked } from '../../icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user.actions';
import Authorization from '../../popups/Authorization/Authorization.popup';
import { openPopup } from '../../redux/actions/popup.actions';
import { useRouter } from 'next/router';
import { cartRemoveAll } from '../../redux/actions/cart.actions';

export const getStaticProps = async () => {

  const categories =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
      .then(res => res.json())

  const paymentTypes =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/paymenttypes')
      .then(res => res.json())

  const deliverytypes =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/deliverytype')
      .then(res => res.json())

  return {
    props: {
      categories,
			paymentTypes,
			deliverytypes
    },
		revalidate: 20
  }
}

const Order = ({ categories, paymentTypes, deliverytypes }) => {

	const user = useSelector(state => state.user)
	const dispatch = useDispatch()
	const router = useRouter()

	const [text, setText] = React.useState('');
	const [error, setError] = React.useState('');
	const [selectedPaymentType, setSelectedPaymentType] = React.useState(paymentTypes.length ? paymentTypes[0] : '');
	const [selectedDeliveryType, setSelectedDeliveryType] = React.useState(paymentTypes.length ? deliverytypes[0] : '');

	const handleCheckout = React.useCallback(async () => {
		
		if (!user.isAuth) {
			return setError('Пожалуйста, авторизуйтесь перед оформлением заявки');
		}

		const body = JSON.stringify({
			deliveryTypeId: selectedDeliveryType.id,
			paymentTypeId: selectedPaymentType.id,
			description: text
		})

		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', 
				'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN) 
			},
			body
		}

		const response = await fetch(process.env.NEXT_PUBLIC_HOST+'/order', config)
		
		if (response.status === 204) {
			router.push('/order-list')
			dispatch(cartRemoveAll())
		}

		if (response.status === 401 || response.status === 403) {
			localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
			window.location.href = '/'
			dispatch(logout())
		}

		if (response.status === 401 || response.status === 403) {
			localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
			window.location.href = '/'
			dispatch(logout())
		}
		
	}, [dispatch, selectedDeliveryType, text, selectedPaymentType, user.isAuth, router])

	React.useEffect(() => {
		let timeout = null;
		if (!user.isAuth) {
			timeout = setTimeout(() => {
				dispatch(openPopup(props => <Authorization {...props} />))
			}, 1000)
		}
		return () => clearTimeout(timeout)
	}, [user.isAuth, dispatch])

	return (
    <LayoutController categories={categories}>
      <Head>
        <title>Оформить заказ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
			<div className={styles.root}>
        <Title className={styles.title}>Оформить заказ</Title>
				
        <div className={styles.container}>
					<div className={styles.sidebar}>
						<CartSidebar deliveryType={selectedDeliveryType} /> 
					</div>
					<div className={styles.content}>
						<div className={styles.text}>
							<textarea 
								placeholder='Примечание к заказу'
								value={text}
								onChange={e => setText(e.target.value)}
							></textarea>
						</div>
						<div className={styles.payment}>
							<div className={styles.paymentTypes}>
								{paymentTypes.map(paymentType => 
									<div 
										onClick={() => setSelectedPaymentType(paymentType)}
										className={classNames(styles.paymentType, selectedPaymentType.id === paymentType.id && styles.selected)} 
										key={paymentType.id}
									>
										<div className={styles.paymentType__image}>
											<Image 
												alt={paymentType.name}
												src={process.env.NEXT_PUBLIC_HOST_WITHOUT_API+paymentType.imagePath}
												width={90} 
												height={50} 
											/>
										</div>
										<div className={styles.paymentType__name}>
											{paymentType.name}
										</div>
									</div>
								)}
							</div>
							<div className={styles.selectedPaymentType}>
								{selectedPaymentType.description}
							</div>
						</div>
						<div className={styles.delivery}>
							<div className={styles.subtitle}>
								Доставка
							</div>
							<div className={styles.deliverytypes}>
								{deliverytypes.map(deliverytype =>
									<div 
										onClick={() => setSelectedDeliveryType(deliverytype)}
										className={classNames(
											styles.deliverytype, 
											selectedDeliveryType.id === deliverytype.id && styles.active
										)} 
										key={deliverytype.id}
									>
										<div className={styles.deliverytype__icon}>
											{selectedDeliveryType.id === deliverytype.id ? 
												<RadioButtonChecked />
												:
												<RadioButtonUnchecked />
											}
										</div>
										<div className={styles.deliverytype__name}>
											{deliverytype.name}
										</div>
										<div className={styles.deliverytype__price}>
											{deliverytype.price} с.
										</div>
									</div>
								)}
							</div>
						</div>
						<button className={styles.submit} onClick={handleCheckout}>
							Оформить заказ
						</button>
						{!user.isAuth &&
							<div className={styles.error}>
								{error}
							</div>
						}
					</div>
				</div>
			</div>
		</LayoutController>
	);
}

export default Order;
