import React from 'react'
import Link from 'next/link'
import {
	Grade as GradeIcon,
	LocalHospital as LocalHospitalIcon,
	LocalOffer as LocalOfferIcon
} from '../../icons'
import styles from './SubNavigation.module.scss'

const SubNavigation = () => {

	const list = [
		{
			link: '/',
			text: 'Скидки',
			icon: LocalOfferIcon
		},
		{
			link: '/',
			text: 'Новые товары',
			icon: LocalHospitalIcon
		},
		{
			link: '/',
			text: 'Хит продаж',
			icon: GradeIcon
		}
	]

	return (
		<div className={styles.root}>
			{list.map((button, index) => 
				<Button key={index} button={button} />	
			)}
		</div>
	)
}

const Button = ({ button }) => {
	const IconTag = button.icon
	return (
		<Link href={button.link}>
			<a className={styles.button} draggable={false}>
				<span className={styles.button_icon}>
					<IconTag size={18} /> 
				</span>
				<span className={styles.button_text}>
					{button.text}
				</span>
			</a>
		</Link>
	)
}

export default SubNavigation
