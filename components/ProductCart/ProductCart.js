import React, { useRef, useState } from 'react'
import Image from 'next/image' 
import Link from 'next/link' 
import classNames from 'classnames'
import Slider from 'react-slick'
import { 
	Favorite as FavoriteIcon,
	FavoriteBorder as FavoriteBorderIcon, 
	Star as StarIcon, 
	StarBorder as StarBorderIcon,
	ArrowBack as ArrowBackIcon,
	ArrowForward as ArrowForwardIcon
} from '../../icons'
import If from '../If/If'
import styles from './ProductCart.module.scss'

const ProductCart = () => {

	const [isNew, setIsNew] = useState(true)
	const [isFavorite, setIsFavorite] = useState(false)
	const [promotionPercent, setPromotionPercent] = useState(17)
	const [rating, setRating] = useState(4)
	const [inStock, setInStock] = useState(24)

	const slider = useRef(null)

	const mainUrl = '/static/images/stocks'

	const imageList = [
		`${mainUrl}/tolstovka.png`,
		`${mainUrl}/tolstovka.png`,
		`${mainUrl}/tolstovka.png`
	] 
  
	const settings = {
		infinite: false,
		autoplaySpeed: 5000,
		cssEase: 'linear',
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
		arrows: false,
		afterChange: current => console.log(current)
  }

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

			<div className={styles.image_wrap}>
				<Link href='/'>
					<a className={styles.image_link}>
						<Slider {...settings} ref={c => slider = c}>
							{imageList.map((src, index) => 
								<SliderItem 
									src={src}
									key={index}
								/>
							)}
						</Slider>
					</a>
				</Link>
				<div className={styles.button_group}>
					<button className={styles.arrow_btn} onClick={() => slider.slickPrev()} >
						<ArrowBackIcon />
					</button>
					<button className={styles.arrow_btn} onClick={() => slider.slickNext()} >
						<ArrowForwardIcon />
					</button>
				</div>
			</div>

			<div className={styles.title}>
				<Link href='/'>
					<a className={styles.title_text}>
						Синяя толстовка на распродажуна распродажуна распродажу
					</a>
				</Link>
				<button className={styles.title_favorites_btn}>
					{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
				</button>
			</div>

			<div className={styles.price}>
				90.00 c
			</div>

			<div className={styles.inStock}>
				{inStock} в наличии
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

	const size = 18

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

const SliderItem = ({ src }) => {
	return (
		<div className={styles.image}>
			<Image 
				className={styles.img}
				src={src} 
				width='100%' 
				height='100%'
				layout='responsive' objectFit='contain'
				alt='image' 
			/>
		</div>
	)
}

export default ProductCart
