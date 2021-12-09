import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import If from '../../components/If/If'
import styles from './Authorization.module.scss'

const Authorization = ({ onClose }) => {

	const [phoneInput, setPhoneInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')

	const loginButton = useRef(null)

	const handleRegister = () => {
		
	}

	const checkValidation = () => {
		if (phoneInput.trim().replaceAll(' ', '').length !== 9)
			return false
		if (passwordInput.trim().length < 8)
			return false
		return true 
	}

	const handleLogin = async () => {
		if (!checkValidation()) 
			return

		loginButton.current.classList.add(styles.loading)

		setTimeout(() => {
			loginButton.current.classList.remove(styles.loading)
			onClose()
		}, 5000)
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
					type='tel'
					name='phone'
					sub_title='Введите номер телефона'
					value={phoneInput}
					onChange={e => {
						if (isNaN(e.target.value.replaceAll(' ', ''))) return
						setPhoneInput(e.target.value)
					}}
					placeholder='XXX XXX XXX'
				/>

				<Label 
					type='password'
					name='password'
					sub_title='Введите пароль'
					value={passwordInput}
					placeholder='********'
					onChange={e => setPasswordInput(e.target.value)}
				/>

				<div className={styles.button_group}>
					<button 
						onClick={() => handleRegister()}
						className={classNames(styles.btn, styles.text_btn)}
					>
						Зарегистрироваться
					</button>
					<button 
						ref={loginButton}
						onClick={() => handleLogin()}
						className={classNames(styles.btn, styles.contained_btn)}
					>
						Войти
					</button>
				</div>

			</form>

		</div>
	)
}

const Label = ({ value, sub_title, type, name, placeholder, onChange, onFocus=()=>{} }) => {
	return (
		<div className={styles.label}>
			<div className={styles.sub_title}>
				{sub_title}
			</div>
			<div className={styles.input_wrap}>
				<If condition={name==='phone'}>
					<div className={styles.country_number}>
						+992
					</div>
				</If>
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
		</div>
	)
}

export default Authorization
