import classNames from 'classnames'
import React, { useState } from 'react'
import CategoriesButton from '../CategoriesButton/CategoriesButton'
import DesktopNavigationTools from '../DesktopNavigationTools/DesktopNavigationTools'
import SearchBox from '../SearchBox/SearchBox'
import styles from './DesktopNavigation.module.scss'

const DesktopNavigation = ({
	isSearchFocused,
	isCatergoryOpen,
	onChangeSearchFocus,
	onChangeCategoryOpen
}) => {

	const handleCategoryButtonClick = () => {
		onChangeCategoryOpen(!isCatergoryOpen)
	}

	return (
		<div className={classNames(styles.root, isCatergoryOpen && !isSearchFocused && styles.focus)}>
			
			<div className={styles.container}>

				<CategoriesButton 
					active={isCatergoryOpen}
					onClick={() => handleCategoryButtonClick()} 
				/>

				<SearchBox 
					isFocused={isSearchFocused}
					onChangeSearchFocus={(value => onChangeSearchFocus(value))}
				/>

				<DesktopNavigationTools />

			</div>

		</div>
	)
}

export default DesktopNavigation
