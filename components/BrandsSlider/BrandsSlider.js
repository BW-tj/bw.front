import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '../../icons'
import styles from './BrandsSlider.module.scss'

const BrandsSlider = ({ className }) => {

	const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
		draggable: false,
    slidesToScroll: 1,
    initialSlide: 2,
		arrows: false
  })

	const [slider, setSlider] = useState(null)

	const mainUrl = '/static/images/brands'

	const imageList = [
		{
			src: `${mainUrl}/adidas.png`,
			href: '/',
			alt: 'image1'
		},
		{
			src: `${mainUrl}/biotherm.png`,
			href: '/',
			alt: 'image2'
		},
		{
			src: `${mainUrl}/chanel.png`,
			href: '/',
			alt: 'image3'
		},
		{
			src: `${mainUrl}/dior.png`,
			href: '/',
			alt: 'image4'
		},
		{
			src: `${mainUrl}/henderson.png`,
			href: '/',
			alt: 'image5'
		},
		{
			src: `${mainUrl}/honor.png`,
			href: '/',
			alt: 'image6'
		},
		{
			src: `${mainUrl}/lancome.png`,
			href: '/',
			alt: 'image7'
		},
		{
			src: `${mainUrl}/samsung.png`,
			href: '/',
			alt: 'image8'
		},
		{
			src: `${mainUrl}/vivo.png`,
			href: '/',
			alt: 'image9'
		}
	] 

	useEffect(() => {

		const handleWindowResize = () => {
			if (window.innerWidth < 500) 
				setSettings(prev => ({...prev, dots: false, slidesToShow: 2}))
			if (window.innerWidth < 700 && window.innerWidth > 500) 
				setSettings(prev => ({...prev, dots: false, slidesToShow: 4}))
		}
		
		handleWindowResize()

		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])
	
	return (
		<div className={classNames(styles.root, className)}>
			<ArrowButtonPrev onClick={() => slider.slickPrev()} />
			<div className={styles.wrap}>
				<Slider {...settings} ref={c => setSlider(c)}>
					{imageList.map(({ src, alt, href }) => 
						<SliderItem 
							src={src}
							href={href}
							alt={alt}
							key={alt}
						/>
					)}
				</Slider>
			</div>
			<ArrowButtonNext onClick={() => slider.slickNext()} />
		</div>
	)
}

const SliderItem = ({ src, href }) => (
	<Link href={href}>
		<a className={styles.image} draggable={false}>
			<Image 
				src={src} 
				alt='image1' 
				width='100%'
				height='100%'
				layout='responsive' objectFit='contain'
			/>
		</a>
	</Link>
)

const ArrowButtonNext = ({ onClick }) => {
	return (
		<button 
			onClick={onClick} 
			className={classNames(styles.arrow_button, styles.arrow_button_next)}
		>
			<ArrowForwardIcon size={20} />
		</button>
	)
}

const ArrowButtonPrev = ({ onClick }) => {
	return (
		<button 
			onClick={onClick} 
			className={classNames(styles.arrow_button, styles.arrow_button_prev)}
		>
			<ArrowBackIcon size={20} />
		</button>
	)
}

export default BrandsSlider
