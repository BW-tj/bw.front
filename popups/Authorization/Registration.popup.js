import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import If from '../../components/If/If'
import { openPopup } from '../../redux/actions/popup.actions'
import Authorization from './Authorization.popup'
import styles from './Authorization.module.scss'

const Registration = ({ onClose }) => {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [phone, setPhone] = useState('')

	const [errors, setErrors] = useState({ email: '', passowrd: '' })

	const loginButton = useRef(null)

	const dispatch = useDispatch()


	const clearErrors = () => {
		setErrors({ email: '', password: '' })
	}

	const checkValidation = () => {
		clearErrors()
		if (firstName.trim().length < 3) {
			setErrors(prev => ({...prev, firstName: 'Минимальная длина имени 3 символа'}))
			return false
		}
		if (lastName.trim().length < 3) {
			setErrors(prev => ({...prev, lastName: 'Минимальная длина фамилии 3 символа'}))
			return false
		}
		if (phone.trim().length < 5) {
			setErrors(prev => ({...prev, phone: 'Минимальная длина номера телефона 5 символов'}))
			return false
		}
		if (email.indexOf('@') === -1) {
			setErrors(prev => ({...prev, email: 'Введите корректную почту'}))
			return false
		}
		if (password.trim().length < 8) {
			setErrors(prev => ({...prev, password: 'Минимальная длина пароля – 8 знаков'}))
			return false
		}
		return true 
	}


	const handleLogin = () => {
		dispatch(openPopup(props => <Authorization {...props} email={email} password={password} />))
	}

	const handleRegister = async () => {
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
		<div className={classNames(styles.root, styles.start)}>

			<div className={styles.container}>
				<form 
					className={styles.wrap} 
					onSubmit={e => e.preventDefault()}
					onKeyPress={e => e.key === 'Enter' && handleRegister()}
				>
						
					<div className={styles.title}>
						Регистрация
					</div>

					<Label 
						type='text'
						name='name'
						sub_title='Введите имя'
						error={errors.firstName}
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
						placeholder='Бехруз'
					/>

					<Label 
						type='text'
						name='lastName'
						sub_title='Введите фамилию'
						error={errors.lastName}
						value={lastName}
						onChange={e => setLastName(e.target.value)}
						placeholder='Рахматов'
					/>

					<Label 
						type='tel'
						name='phone'
						sub_title='Введите номер телефона'
						error={errors.phone}
						value={phone}
						onChange={e => setPhone(e.target.value)}
						placeholder='+992 XXX XX XX XX'
					/>

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
						<button 
							ref={loginButton}
							onClick={() => handleRegister()}
							className={classNames(styles.btn, styles.contained_btn)}
						>
							Зарегистрироваться
						</button>
						<button 
							onClick={() => handleLogin()}
							className={classNames(styles.btn, styles.outlined_btn)}
						>
							Войти
						</button>
					</div>

				</form>
			</div>

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
					ref={input => input && error.trim() !== '' && input.focus()}
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

export default Registration
