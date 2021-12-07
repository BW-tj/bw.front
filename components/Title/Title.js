import classNames from 'classnames'
import React from 'react'
import styles from './Title.module.scss'

const Title = ({ children, className }) => (
	<div className={styles.root}>
		<div className={classNames(styles.wrap, className)}>
			{children}
		</div>
	</div>
)

export default Title
