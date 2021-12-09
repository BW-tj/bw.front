import classNames from 'classnames'
import React, { useState } from "react"
import CategoryList from '../../components/CategoryList/CategoryList'
import DesktopNavigation from "../../components/DesktopNavigation/DesktopNavigation"
import Header from "../../components/Header/Header"
import If from '../../components/If/If'
import Popup from '../../components/Popup/Popup'
import styles from "./DesktopLayout.module.scss"

const DesktopLayout = ({
	children
}) => {

	const [isSearchFocused, setSearchFocued] = useState(false)
	const [isCatergoryOpen, setCatergoryOpen] = useState(false)

	return (
		<>
			<Popup />

			<If condition={isSearchFocused}>
				<span className={styles.search_cover} onClick={() => setSearchFocued(false)}></span>
			</If>
			<If condition={isCatergoryOpen && !isSearchFocused}>
				<span className={styles.category_cover} onClick={() => setCatergoryOpen(false)}></span>
			</If>

			<div className={classNames(styles.root, styles.not_scrolling)}>

				<Header focused={isCatergoryOpen} />

				<DesktopNavigation 
					isSearchFocused={isSearchFocused} 
					isCatergoryOpen={isCatergoryOpen}
					onChangeSearchFocus={value => setSearchFocued(value)} 
					onChangeCategoryOpen={value => setCatergoryOpen(value)} 
				/>

				<CategoryList open={isCatergoryOpen} />
				
				<div className={styles.content}>
					{children}
				</div>

			</div>
		</>
	)
}

export default DesktopLayout
