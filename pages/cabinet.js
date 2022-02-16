import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import classNames from 'classnames'
import If from '../components/If/If'
import LayoutController from '../layouts/LayoutController'
import styles from '../styles/Cabinet.module.scss'
import { useSelector } from 'react-redux';

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

	const user = useSelector(state => state.user)

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

	const handleChangeProfile = async () => {
		try {
			setLoading(true)
			const body = JSON.stringify({
				email,
				phoneNumber: phone,
				name: firstname,
				lastName: lastname,
				address,
				password: newPassword,
				oldPassword
			})
	
			const config = {
				method: 'PUT',
				body
			}
			if (user.isAuth)
				config = {
					...config,
					headers: {
						...config.headers,
						"Authorization": "Bearer " + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN),
					}
				}
	
			await fetch(process.env.NEXT_PUBLIC_HOST+'/users/profile', config)
		}
		finally {
			setTimeout(() => {
				setLoading(false)
			}, 200) 
		}
	}

	const handleCancel = () => {
		window.location.replace('/')
	}


	useEffect(() => {
		if (!user.isAuth)
			window.location.replace('/')
	}, [user])

	useEffect(() => {
		const config = {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": 'Bearer ' + user.isAuth ? localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN) : ''
			}	
		}

		fetch(`${process.env.NEXT_PUBLIC_HOST}/users/profile`, config)
			.then(res => {
				if (res.status === 401 || res.status === 403) {
          localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
          window.location.href = '/'
          dispatch(logout())
        }
				return res.json()
			})
			.then(data => {
				setLoading(false)
				setFirstname(data.name)
				setLastname(data.lastName)
				setPhone(data.phone)
				setEmail(data.email)
				setAddress(data.address)
			})
	}, [])

	if (loading) return <></>
	return (
		<LayoutController categories={categories}>
			<Head>
				<title>Личный кабинет</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
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
							onClick={() => handleCancel()}
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
