import React from 'react'
import DesktopNavigation from '../../components/DesktopNavigation/DesktopNavigation'
import Header from '../../components/Header/Header'
import styles from './DesktopLayout.module.scss'

const DesktopLayout = ({
	children
}) => {
	return (
		<div className={styles.root}>

			<Header />

			<DesktopNavigation />
			
			<div className={styles.content}>
				{children}
			</div>

		</div>
	)
}

export default DesktopLayout
