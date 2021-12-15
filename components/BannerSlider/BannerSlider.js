import classNames from 'classnames'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '../../icons'
import styles from './BannerSlider.module.scss'

const BannerSlider = ({ className }) => {

	const mainUrl = '/static/images/banner'

	const imageList = [
		{
			src: `${mainUrl}/optimize.webp`,
			href: '/',
			alt: 'image1'
		},
		{
			src: `${mainUrl}/optimize2.webp`,
			href: '/',
			alt: 'image2'
		},
		{
			src: `${mainUrl}/optimize3.webp`,
			href: '/',
			alt: 'image3'
		}
	] 
  
	const settings = {
    dots: true,
    infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
		arrows: false,
		pauseOnHover: true
  }

	const slider = useRef(null)
	
	return (
		<div className={classNames(styles.root, className)}>
			<ArrowButtonPrev onClick={() => slider.slickPrev()} />
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
	)
}

const SliderItem = ({ src, href }) => (
	<Link href={href}>
		<a>
			<Image 
				src={src} 
				alt='image1' 
				width={2880} 
				height={700} 
			/>
		</a>
	</Link>
)

const ArrowButtonPrev = ({ onClick }) => {
	return (
		<button 
			onClick={onClick} 
			className={classNames(styles.arrow_button, styles.arrow_button_prev)}
		>
			<ArrowBackIcon />
		</button>
	)
}

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

export default BannerSlider
