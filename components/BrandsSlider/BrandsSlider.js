import React, { useRef } from 'react'
import styles from './BrandsSlider.module.scss'
import Slider from "react-slick"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowForward as ArrowForwardIcon } from '../../icons'
import classNames from 'classnames'

const BrandsSlider = ({ className }) => {

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
  
	const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
		draggable: false,
    slidesToScroll: 1,
    initialSlide: 2,
		arrows: false
  }

	const slider = useRef(null)
	
	return (
		<div className={classNames(styles.root, className)}>
			<div className={styles.wrap}>
				<Slider {...settings} ref={c => slider = c}>
					{imageList.map(({ src, alt, href }) => 
						<SliderItem 
							src={src}
							href={href}
							alt={alt}
							key={alt}
						/>
					)}
				</Slider>
				<ArrowButtonNext onClick={() => slider.slickNext()} />
			</div>
		</div>
	)
}

const SliderItem = ({ src, href }) => (
	<Link href={href}>
		<a className={styles.image}>
			<Image 
				src={src} 
				alt="image1" 
				width='100%'
				height='100%'
				layout="responsive" objectFit="contain"
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
			<ArrowForwardIcon />
		</button>
	)
}

export default BrandsSlider
