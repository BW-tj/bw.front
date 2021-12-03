import classNames from 'classnames'
import React from "react"
import { Search as SearchIcon } from "../../icons"
import styles from "./SearchBox.module.scss"

const SearchBox = ({ isSmall, value, setValue, onSearch }) => {
	return (
		<div className={classNames(styles.root, isSmall && styles.small)}>
			
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
