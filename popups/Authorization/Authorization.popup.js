import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import If from '../../components/If/If'
import styles from './Authorization.module.scss'

const Authorization = ({ onClose }) => {

	const [emailInput, setEmailInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')
	const [errors, setErrors] = useState({ email: '', passowrd: '' })

	const loginButton = useRef(null)


	const clearErrors = () => {
		setErrors({ email: '', password: '' })
	}

	const checkValidation = () => {
		clearErrors()
		if (emailInput.indexOf('@') === -1) {
			setErrors(prev => ({...prev, email: 'Введите корректную почту'}))
			return false
		}
		if (passwordInput.trim().length < 8) {
			setErrors(prev => ({...prev, password: 'Минимальная длина пароля – 8 занков'}))
			return false
		}
		return true 
	}


	const handleRegister = () => {
		
	}

	const handleForgotPassword = () => {
		
	}

	const handleLogin = async () => {
		if (!checkValidation()) 
			return

		loginButton.current.classList.add(styles.loading)

		setTimeout(() => {
			loginButton.current.classList.remove(styles.loading)
			onClose()
		}, 2000)
	}


	useEffect(() => {
		const handleWindowClick = e => {
			if (!e.target.closest('.' + styles.wrap))
				onClose()
		}
		window.addEventListener('click', handleWindowClick)
		return () => window.removeEventListener('click', handleWindowClick)
	}, [onClose])


	return (
		<div className={styles.root}>

			<form 
				className={styles.wrap} 
				onSubmit={e => e.preventDefault()}
				onKeyPress={e => e.key === 'Enter' && handleLogin()}
			>
					
				<div className={styles.title}>
					Авторизация
				</div>

				<Label 
					type='email'
					name='email'
					sub_title='Введите эл.почту'
					error={errors.email}
					value={emailInput}
					onChange={e => setEmailInput(e.target.value)}
					placeholder='name@company.example'
				/>

				<Label 
					type='password'
					name='password'
					sub_title='Введите пароль'
					error={errors.password}
					value={passwordInput}
					placeholder='********'
					onChange={e => setPasswordInput(e.target.value)}
				/>

				<div className={styles.button_group}>
					<button 
						ref={loginButton}
						onClick={() => handleLogin()}
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
