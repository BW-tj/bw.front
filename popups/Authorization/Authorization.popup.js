import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openPopup } from '../../redux/actions/popup.actions'
import If from '../../components/If/If'
import Registration from './Registration.popup'
import styles from './Authorization.module.scss'
import { login } from '../../redux/actions/user.actions'
import { pullCart, pushCart } from '../../redux/actions/cart.actions'
import { updateFavorites } from './../../redux/actions/favorites.actions';

const Authorization = ({ onClose }) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({ email: '', passowrd: '' })
	const [mainError, setMainError] = useState('')

	const loginButton = useRef(null)

	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)
	const favorites = useSelector(state => state.favorites)
	const user = useSelector(state => state.user)

	const clearErrors = () => {
		setErrors({ email: '', password: '' })
	}

	const checkValidation = () => {
		clearErrors()
		if (email.indexOf('@') === -1) {
			setErrors(prev => ({...prev, email: 'Введите корректную почту'}))
			return false
		}
		return true 
	}


	const handleRegister = () => {
		dispatch(openPopup(props => <Registration {...props} email={email} password={password} />))
	}

	const handleForgotPassword = () => {
	}

	const handleLogin = async () => {
		if (!checkValidation()) 
			return

		await loginButton.current.classList.add(styles.loading)

		const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		
		if (response.status >= 400) {
			loginButton.current.classList.remove(styles.loading)
			return setMainError('Неверный логин или пароль')
		}
	
		const userData = await response.json()
	
		localStorage.setItem(process.env.NEXT_PUBLIC_LS_TOKEN, userData.token)

		await dispatch(updateFavorites(favorites))

		await dispatch(login(userData))

		if (cart.length)
			await dispatch(pushCart(cart.map(item => ({ productId: item.productId, count: item.count}))))

		await dispatch(pullCart())
	}

	useEffect(() => {
		if (user.token) {
			onClose()
		}
	}, [user.token, onClose])

	useEffect(() => {
		const handleWindowClick = e => {
			if (!e.target.closest('.' + styles.wrap))
				onClose()
		}
		window.addEventListener('mousedown', handleWindowClick)
		return () => window.removeEventListener('mousedown', handleWindowClick)
	}, [onClose])


	return (
		<div className={styles.root}>

			<form 
				className={styles.wrap} 
				onSubmit={e => e.preventDefault()}
			>
					
				<div className={styles.title}>
					Авторизация
				</div>

				<Label 
					type='email'
					name='email'
					sub_title='Введите эл.почту'
					error={errors.email}
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='name@company.example'
				/>

				<Label 
					type='password'
					name='password'
					sub_title='Введите пароль'
					error={errors.password}
					value={password}
					placeholder='********'
					onChange={e => setPassword(e.target.value)}
				/>

				<div className={styles.button_group}>
					{mainError !== '' && 
						<div className={styles.error}>
							{mainError}
						</div>
					}
					<button 
						ref={loginButton}
						onClick={handleLogin}
						className={classNames(styles.btn, styles.contained_btn)}
					>
						Войти
					</button>
					<button 
						onClick={() => handleRegister()}
						className={classNames(styles.btn, styles.outlined_btn)}
					>
						Регистрация
					</button>
					<button 
						onClick={() => handleForgotPassword()}
						className={classNames(styles.btn, styles.text_btn)}
					>
						Забыли пароль?
					</button>
				</div>

			</form>

		</div>
	)
}

const Label = ({ 
	value, 
	sub_title, 
	type, 
	name, 
	placeholder,
	error='', 
	onChange=()=>{}, 
	onFocus=()=>{} 
}) => {
	return (
		<div className={classNames(styles.label, error !== '' && styles.labelError)}>
			<div className={styles.sub_title}>
				{sub_title}
			</div>
			<div className={styles.input_wrap}>
				<input 
					type={type} 
					className={styles.input} 
					value={value}
					name={name}
					onChange={onChange} 
					onFocus={onFocus}
					placeholder={placeholder}
				/>
			</div>
			<If condition={error.trim() !== ''}>
				<div className={styles.error_info}>
					{error}
				</div>
			</If>
		</div>
	)
}

export default Authorization
