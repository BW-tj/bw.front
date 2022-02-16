import React from 'react'
import MobileNavigation from '../../components/MobileNavigation'
import styles from './MobileLayout.module.scss'

const MobileLayout = ({
	children,
	categories
}) => {
	return (
		<div className={styles.root}>

			<MobileNavigation categories={categories} />
			
			<div className={styles.content}>
				{children}
			</div>

		</div>
	)
}

export default MobileLayout
