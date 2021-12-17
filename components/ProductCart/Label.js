import React from 'react'
import Link from 'next/link' 
import classNames from 'classnames'
import styles from './Label.module.scss'

const Label = ({ className, text, link }) => (
	<Link href={link}>
		<a className={classNames(styles.root, className)}>
			{text}
		</a>
	</Link>
)

export default Label
