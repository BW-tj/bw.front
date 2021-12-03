import classNames from 'classnames'
import React, { useEffect, useState } from "react"
import CatergoryButton from "../CatergoryButton/CatergoryButton"
import DesktopNavigationTools from '../DesktopNavigationTools/DesktopNavigationTools'
import SearchBox from "../SearchBox/SearchBox"
import styles from "./DesktopNavigation.module.scss"

const DesktopNavigation = () => {

	const [searchValue, setSearchValue] = useState('')
	const [isSticky, setIsSticky] = useState(false)

	const handleSearchButtonClick = () => {

	}

	const handleCategoryButtonOver = () => {

	}

	const handleCategoryButtonLeave = () => {

	}

	useEffect(() => {

		const handleWindowScroll = () => {
			if (window.scrollY > 95) 
				setIsSticky(true)
			else 
				setIsSticky(false)
		}
		
		window.addEventListener('scroll', handleWindowScroll)

		return () => window.removeEventListener('scroll', handleWindowScroll)
	}, [])

	return (
		<div className={classNames(styles.root, isSticky && styles.sticky)}>
			<div className={styles.container}>

				<CatergoryButton 
					onMouseOver={() => handleCategoryButtonOver()} 
					onMouseLeave={() => handleCategoryButtonLeave()}
					isSmall={isSticky} 
				/>

				<SearchBox 
					isSmall={isSticky}
					value={searchValue} 
					setValue={setSearchValue} 
					onSearch={() => handleSearchButtonClick()} 
				/>

				<DesktopNavigationTools isSmall={isSticky} />

			</div>
		</div>
	)
}

export default DesktopNavigation
