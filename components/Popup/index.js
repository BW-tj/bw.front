import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { closePopup } from '../../redux/actions/popup.actions'
import styles from './index.module.scss'

const Popup = () => {

	const [render, setRender] = useState(false)

	const popup = useSelector(state => state.popup)

	const dipatch = useDispatch()

	useEffect(() => {
		
		const animationDuration = 200
		
		if (popup.open) {
			document.querySelector('body').classList.add('popup-open')
			setRender(true)
		}
		else 
			setTimeout(() => {
				document.querySelector('body').classList.remove('popup-open')
				setRender(false)
			}, animationDuration)

		return () => document.querySelector('body').classList.remove('popup-open') 
		
	}, [popup.open])

	if (!render) return <></>
	return (
		<div className={classNames(styles.root, !popup.open && styles.close)}>

			{popup.content({ 
				onClose: () => dipatch(closePopup()) 
			})}

		</div>
	)
}

export default Popup
