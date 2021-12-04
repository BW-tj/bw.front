import classNames from 'classnames'
import React, { useEffect, useState } from "react"
import { Search as SearchIcon } from "../../icons"
import styles from "./SearchBox.module.scss"

const SearchBox = ({ value, setValue, onSearch, onFocus, coverState }) => {

	const [focusState, setFocusState] = useState(false)

	const handleFocusInput = () => {
		onFocus()
		setFocusState(true)
	}

	useEffect(() => {
		setFocusState(coverState)
	}, [coverState])

	return (
		<div className={classNames(styles.root, focusState && styles.focus)}>
			
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				onFocus={() => handleFocusInput()}
				className={styles.input}
				placeholder="Найти нужный вам товар..."
			/>

			<button onClick={onSearch} className={styles.button}>
				<span className={styles.button_wrap}>
					<SearchIcon />
				</span>
			</button>

		</div>
	)
}

export default SearchBox
