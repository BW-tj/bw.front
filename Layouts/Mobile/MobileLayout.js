import React from 'react'
import MobileNavigation from '../../components/MobileNavigation'
import styles from './MobileLayout.module.scss'

const MobileLayout = ({
	children
}) => {
	return (
		<div className={styles.root}>

			<MobileNavigation />
			
			<div className={styles.content}>
				{children}
			</div>

		</div>
	)
}

export default MobileLayout
