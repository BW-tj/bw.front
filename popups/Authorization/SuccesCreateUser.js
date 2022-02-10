import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { openPopup } from '../../redux/actions/popup.actions'
import styles from './Authorization.module.scss'
import Authorization from './Authorization.popup'

const SuccessCreateUser = ({ onClose }) => {

	const loginButton = useRef(null)

	const dispatch = useDispatch()

	const handleLogin = () => {
		dispatch(openPopup(props => <Authorization {...props} />))
	}

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
					Вы успешно зарегистрировались!
				</div>

				<div className={styles.button_group}>
					<button 
						ref={loginButton}
						onClick={handleLogin}
						className={classNames(styles.btn, styles.contained_btn)}
					>
						Войти
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
		</div>
	)
}

export default SuccessCreateUser
