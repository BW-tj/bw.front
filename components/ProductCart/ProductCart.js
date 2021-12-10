import React, { useState } from 'react'
import Image from 'next/image' 
import Link from 'next/link' 
import classNames from 'classnames'
import { 
	Favorite as FavoriteIcon,
	FavoriteBorder as FavoriteBorderIcon, 
	Star as StarIcon, 
	StarBorder as StarBorderIcon 
} from '../../icons'
import If from '../If/If'
import styles from './ProductCart.module.scss'

const ProductCart = () => {

	const [isNew, setIsNew] = useState(true)
	const [isFavorite, setIsFavorite] = useState(false)
	const [promotionPercent, setPromotionPercent] = useState(17)
	const [rating, setRating] = useState(4)

	return (
		<div className={styles.root}>

			<div className={styles.label_list}>
				<If condition={isNew}>
					<Label link='/' text='Новинка' className={styles.label_new_product} />
				</If>

				<If condition={promotionPercent !== 0}>
					<Label 
						link='/' text={'Акция -' + promotionPercent + '%'} 
						className={styles.label_promotion} 
					/>
				</If>
			</div>

			<Link href='/'>
				<a className={styles.image}>
					<Image 
						src='/static/images/stocks/tolstovka.png' 
						width='100%' 
						height='100%'
						layout='responsive' objectFit='contain'
						alt={'tolstovka'} 
					/>
				</a>
			</Link>
			<div className={styles.title}>
				<Link href='/'>
					<a className={styles.title_text}>
						Синяя толстовка
					</a>
				</Link>
				<button className={styles.title_favorites_btn}>
					{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
				</button>
			</div>

			<div className={styles.price}>
				90.00 c
			</div>

			<Stars rating={rating} />

			<button className={styles.add_to_cart_btn}>
				В корзину
			</button>

		</div>
	)
}

const Stars = ({ rating }) => {

	const stars = []
	
	for(let i = 1; i <= 5; i++)
		if (i <= rating)
			stars.push({ key: i, filled: true })
		else
			stars.push({ key: i, filled: false })

	return (
		<div className={styles.stars}>
			{stars.map(star => <Star filled={star.filled} key={star.key} />)}
		</div>
	)
}

const Star = ({ filled }) => {

	const size = 20

	return (
		<div className={classNames(styles.star, filled && styles.filled)}>
			{filled ? <StarIcon size={size} /> : <StarBorderIcon size={size} />}
		</div>
	)
}

const Label = ({ className, text, link }) => {
	return (
		<Link href={link}>
			<a className={classNames(styles.label, className)}>
				{text}
			</a>
		</Link>
	)
}

export default ProductCart
