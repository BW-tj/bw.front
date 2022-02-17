import React from 'react'
import Footer from '../../components/Footer'
import MobileFooter from '../../components/MobileFooter'
import MobileNavigation from '../../components/MobileNavigation'
import SocialIcons from '../../components/SocialIcons'
import styles from './MobileLayout.module.scss'

const MobileLayout = ({
	children,
	categories,
	noFooter,
	noSocialMedia
}) => {
	return (
		<div className={styles.root}>

			{!noSocialMedia && <SocialIcons />}

			<MobileFooter />

			<MobileNavigation categories={categories} />
			
			<div className={styles.content}>
				{children}
			</div>

			{!noFooter && <Footer />}

		</div>
	)
}

export default MobileLayout
