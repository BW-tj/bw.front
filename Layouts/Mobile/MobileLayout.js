import React from "react"
import styles from "./Mobile.module.scss"

const MobileLayout = ({
	children
}) => {
	return (
		<div className={styles.root}>
			
			<div className={styles.content}>
				{children}
			</div>

		</div>
	)
}

export default MobileLayout
