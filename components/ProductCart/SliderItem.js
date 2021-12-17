import React from 'react'
import Image from 'next/image' 
import styles from './SliderItem.module.scss'

const SliderItem = ({ src }) => (
	<div className={styles.root}>
		<Image
			src={src} 
			width='100%' 
			height='100%'
			layout='responsive' objectFit='contain'
			alt='image' 
		/>
	</div>
)

export default SliderItem
