import React from 'react'
import Link from 'next/link'
import {
	Grade as GradeIcon,
	LocalHospital as LocalHospitalIcon,
	LocalOffer as LocalOfferIcon
} from '../../icons'
import styles from './SubNavigation.module.scss'
import { useRouter } from 'next/router'
import classNames from 'classnames'

const SubNavigation = () => {
	const list = [
		{
			link: '/discounts',
			text: 'Скидки',
			icon: LocalOfferIcon
		},
		{
			link: '/new',
			text: 'Новые товары',
			icon: LocalHospitalIcon
		},
		{
			link: '/bestsellers',
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
	const router = useRouter()
	const IconTag = button.icon
	return (
		<Link href={button.link}>
			<a 
				className={classNames(styles.button, router.asPath === button.link && styles.active)} 
				draggable={false}
			>
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
