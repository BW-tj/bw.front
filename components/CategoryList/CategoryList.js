import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './CategoryList.module.scss' 

const CategoryList = ({ open }) => {

	const [middleWare_Open, setmiddleWare_Open] = useState(false)

	useEffect(() => {
		let timeout
		
		if (!open) 
			timeout = setTimeout(() => {
				setmiddleWare_Open(false)
			}, 200)
		else 
			setmiddleWare_Open(true)

		return () => clearTimeout(timeout)
	}, [open])
	
	if (!middleWare_Open) return <></>
	
	return (
		<div className={classNames(styles.root, !open && styles.close)}>

			<div className={styles.container}>
				gerhty
			</div>

		</div>
	)
}

export default CategoryList
