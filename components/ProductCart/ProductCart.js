import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image' 
import Link from 'next/link' 
import classNames from 'classnames'
import SliderConstructor from 'react-slick'
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
	const [name, setName] = useState('')
	const [price, setPrice] = useState('90.00 c')

	useEffect(() => {
		const text = 'Синяя толстовка на распродажу'
		if (text.length > 30)
			setName(text.slice(0, 30)+'...')
		else
			setName(text)
	}, [])

	return (
		<div className={styles.root}>

			<LabelList 
				isNew={isNew} 
				promotionPercent={promotionPercent} 
			/>

			<MySlider />

			<Title 
				name={name} 
				isFavorite={isFavorite} 
			/>

			<Price price={price} />

			<InStock inStock={inStock} />

			<Stars rating={rating} />

			<button className={styles.add_to_cart_btn} onClick={() => {}}>
				В корзину
			</button>

		</div>
	)
}

const LabelList = ({ promotionPercent, isNew }) => (
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
)

const Label = ({ className, text, link }) => (
	<Link href={link}>
		<a className={classNames(styles.label, className)}>
			{text}
		</a>
	</Link>
)

const MySlider = () => {

	const mainUrl = '/static/images/stocks'

	const slider = useRef(null)

	const [currentSlide, setCurrentSlide] = useState(0)
	const [settings, setSettings] = useState({})

	const imageList = [
		`${mainUrl}/tolstovka.png`,
		`${mainUrl}/tolstovka.png`,
		`${mainUrl}/tolstovka.png`
	] 
  
	useMemo(() => {
		setSettings({
			infinite: false,
			autoplaySpeed: 5000,
			cssEase: 'linear',
			speed: 200,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			afterChange: current => setCurrentSlide(current)
		})
	}, [])

	return (
		<div className={styles.image_wrap}>
			<Link href='/'>
				<a className={styles.image_link}>
					<SliderConstructor {...settings} ref={c => slider = c}>
						{imageList.map((src, index) => 
							<SliderItem 
								src={src}
								key={index}
							/>
						)}
					</SliderConstructor>
				</a>
			</Link>
			<div className={styles.button_group}>
				<button 
					className={classNames(styles.arrow_btn, currentSlide === 0 && styles.disabled)} 
					onClick={() => slider.slickPrev()} 
				>
					<ArrowBackIcon />
				</button>
				<button 
					className={classNames(styles.arrow_btn, currentSlide === imageList.length-1 && styles.disabled)}  
					onClick={() => slider.slickNext()} 
				>
					<ArrowForwardIcon />
				</button>
			</div>
		</div>
	)
}

const SliderItem = ({ src }) => (
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

const Title = ({ name, isFavorite }) => {
	return (
		<div className={styles.title}>
			<Link href='/'>
				<a className={styles.title_text}>
					{name}
				</a>
			</Link>
			<button className={styles.title_favorites_btn}>
				{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
			</button>
		</div>
	)
}

const Price = ({ price }) => (
	<div className={styles.price}>
		{price}
	</div>
)

const InStock = ({ inStock }) => (
	<div className={styles.inStock}>
		{inStock} в наличии
	</div>
)

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

export default ProductCart
