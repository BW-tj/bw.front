import React, { useState } from "react"
import CatergoryButton from "../CatergoryButton/CatergoryButton"
import SearchBox from "../SearchBox/SearchBox"
import styles from "./DesktopNavigation.module.scss"

const DesktopNavigation = () => {

	const [searchValue, setSearchValue] = useState('')

	return (
		<div className={styles.root}>
			<div className={styles.container}>

				<CatergoryButton />

				<SearchBox value={searchValue} setValue={setSearchValue} onSearch={() => {}} />

			</div>
		</div>
	)
}

export default DesktopNavigation
