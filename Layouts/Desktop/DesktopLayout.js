import React, { useState } from "react"
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation"
import Header from "../../components/Header/Header"
import If from '../../components/If/If'
import styles from "./DesktopLayout.module.scss"

const DesktopLayout = ({
	children
}) => {

	const [coverState, setCoverState] = useState(false)

	return (
		<>
			<If condition={coverState}>
				<span className={styles.cover} onClick={() => setCoverState(false)}></span>
			</If>

			<div className={styles.root}>

				<Header />

				<DesktopNavigation 
					coverState={coverState} 
					onChangeCoverState={value => setCoverState(value)} 
				/>
				
				<div className={styles.content}>
					{children}
				</div>

			</div>
		</>
	)
}

export default DesktopLayout
