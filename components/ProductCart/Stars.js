import React from 'react'
import Star from './Star'
import styles from './Stars.module.scss'

const Stars = ({ rating }) => {

	const stars = []
	
	for(let i = 1; i <= 5; i++)
		if (i <= rating)
			stars.push({ key: i, filled: true })
		else
			stars.push({ key: i, filled: false })

	return (
		<div className={styles.root}>
			{stars.map(star => <Star filled={star.filled} key={star.key} />)}
		</div>
	)
}

export default Stars
