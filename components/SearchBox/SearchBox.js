import React from "react"
import { Search as SearchIcon } from "../../icons"
import styles from "./SearchBox.module.scss"

const SearchBox = ({ value, setValue, onSearch }) => {
	return (
		<div className={styles.root}>
			
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				className={styles.input}
				placeholder="Найти нужный вам товар..."
			/>

			<button onClick={onSearch} className={styles.button}>
				<SearchIcon />
			</button>

		</div>
	)
}

export default SearchBox
