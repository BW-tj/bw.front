import React from 'react'
import classNames from 'classnames'
import { 
	Star as StarIcon
} from '../../icons'
import styles from './Star.module.scss'

const Star = ({ filled }) => (
	<div className={classNames(styles.root, filled && styles.filled)}>
		<StarIcon size={18} />
	</div>
)

export default Star
