import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import If from '../components/If/If'
import LayoutController from '../layouts/LayoutController'
import styles from '../styles/Cabinet.module.scss'

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

const Cabinet = ({ categories }) => {

	const [loading, setLoading] = useState(true)

	const [errors, setErrors] = useState({
		firstname: '', lastname: '', email: '', phone: '', password: ''
	})

	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')

	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleChangeProfile = () => {

	}

	useEffect(() => {
		// const token = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_LS_KEY)).user.token

		const config = {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				// "Authorization": `Bearer ${token}`
			}	
		}

		fetch(`${process.env.NEXT_PUBLIC_HOST}/user`, config)
			.then(res => res.json())
			.then(data => {
				setLoading(false)
				setFirstname(data.name)
				setLastname(data.lastname)
				setPhone(data.phone)
				setEmail(data.email)
				setAddress(data.address)
			})
	}, [])

	if (loading) return <></>
	return (
		<LayoutController categories={categories}>
			<div className={styles.root}>
				<div className={styles.form}>

					<div className={styles.title}>
						Личный кабинет
					</div>

					<Label 
						required 
						title='Имя' 
						value={firstname} 
						setValue={setFirstname}
						error={errors.firstname} 
					/>

					<Label 
						required 
						title='Фамилия' 
						value={lastname} 
						setValue={setLastname}
						error={errors.lastname} 
					/>

					<Label 
						title='Номер телефона' 
						value={phone} 
						setValue={setPhone}
						error={errors.phone} 
					/>
				
					<Label 
						required 
						title='Почта' 
						value={email} 
						setValue={setEmail} 
						type='email'
						error={errors.email} 
					/>

					<Label 
						title='Адрес' 
						value={address} 
						setValue={setAddress}
					/>
					
					<Label 
						title='Старый пароль' 
						value={oldPassword} 
						setValue={setOldPassword} 
						type='password' 
					/>

					<Label 
						title='Новый пароль' 
						value={newPassword} 
						setValue={setNewPassword} 
						type='password' 
						error={errors.password}
					/>

					<Label 
						title='Повторите новый пароль' 
						value={confirmPassword} 
						setValue={setConfirmPassword} 
						type='password' 
					/>

					<div className={styles.buttons_group}>
						<button 
							className={classNames(styles.button, styles.outlined)} 
							onClick={() => handleChangeProfile()}
						>
							Отменить 
						</button>
						<button 
							className={classNames(styles.button, styles.contained)} 
							onClick={() => handleChangeProfile()}
						>
							Изменить профиль
						</button>
					</div>

				</div>
			</div>
		</LayoutController>
	)
}

const Label = ({ title, value, setValue, type='text', error='' }) => {
	return (
		<div className={classNames(styles.label, error !== '' && styles.error)}>
			<div className={styles.label_title}>
				{title}
			</div>
			<input 
				type={type} 
				className={styles.label_input} 
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<If condition={error.trim() !== ''}>
				<div className={styles.error_info}>
					{error}
				</div>
			</If>
		</div>
	)
}

export default Cabinet
