import React, { useState } from "react"
import CategoriesButton from "../CategoriesButton/CategoriesButton"
import DesktopNavigationTools from '../DesktopNavigationTools/DesktopNavigationTools'
import SearchBox from "../SearchBox/SearchBox"
import styles from "./DesktopNavigation.module.scss"

const DesktopNavigation = ({
	coverState,
	onChangeCoverState,
}) => {

	const [searchValue, setSearchValue] = useState('')
	const [categoryOpen, setCategoryOpen] = useState(false)

	const handleSearchButtonClick = () => {
		onChangeCoverState(false)
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>

				<CategoriesButton 
					active={categoryOpen}
					onClick={() => setCategoryOpen(!categoryOpen)} 
				/>

				<SearchBox 
					value={searchValue} 
					setValue={setSearchValue} 
					coverState={coverState}
					onSearch={() => handleSearchButtonClick()} 
					onFocus={() => onChangeCoverState(true)}
				/>

				<DesktopNavigationTools />

			</div>

		</div>
	)
}

export default DesktopNavigation
