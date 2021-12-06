import classNames from 'classnames'
import React, { useState } from "react"
import CategoriesButton from "../CategoriesButton/CategoriesButton"
import CategoryList from '../CategoryList/CategoryList'
import DesktopNavigationTools from '../DesktopNavigationTools/DesktopNavigationTools'
import SearchBox from "../SearchBox/SearchBox"
import styles from "./DesktopNavigation.module.scss"

const DesktopNavigation = ({
	isSearchFocused,
	isCatergoryOpen,
	onChangeSearchFocus,
	onChangeCategoryOpen
}) => {

	const [searchValue, setSearchValue] = useState('')

	const handleSearchButtonClick = () => {
		onChangeSearchFocus(false)
	}

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
					value={searchValue} 
					setValue={setSearchValue} 
					isFocused={isSearchFocused}
					onSearch={() => handleSearchButtonClick()} 
					onChangeSearchFocus={(value => onChangeSearchFocus(value))}
				/>

				<DesktopNavigationTools />

			</div>

		</div>
	)
}

export default DesktopNavigation
