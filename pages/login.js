import React from 'react';
import Head from 'next/head';
import LayoutController from '../layouts/LayoutController';
import styles from '../styles/Login.module.scss';
import If from '../components/If/If';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { updateFavorites } from '../redux/actions/favorites.actions';
import { login } from '../redux/actions/user.actions';
import { pullCart, pushCart } from '../redux/actions/cart.actions';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {

  const categories =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
      .then(res => res.json())

  return {
    props: {
      categories,
    },
		revalidate: 20
  }
}

const Login = ({ categories }) => {

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [errors, setErrors] = React.useState({ email: '', passowrd: '' })
	const [mainError, setMainError] = React.useState('')

	const loginButton = React.useRef(null)

	const router = useRouter()
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)
	const user = useSelector(state => state.user)
	const favorites = useSelector(state => state.favorites)

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

	React.useEffect(() => {
		if (user.isAuth)
			router.push('/')
	}, [user.isAuth, router])

	return (
		<LayoutController categories={categories} noFooter noSocialMedia>
			<Head>
				<title>Вход</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<div className="container">
				<form 
					className={styles.root} 
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
						{/* <button 
							onClick={() => handleRegister()}
							className={classNames(styles.btn, styles.outlined_btn)}
						>
							Регистрация
						</button> */}
						<button 
							onClick={() => handleForgotPassword()}
							className={classNames(styles.btn, styles.text_btn)}
						>
							Забыли пароль?
						</button>
					</div>

				</form>
			</div>
		</LayoutController>
	);
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

export default Login;
