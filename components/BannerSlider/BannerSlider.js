import React, { useRef } from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import Link from 'next/link'
import styles from './BannerSlider.module.scss'
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '../../icons';
import classNames from 'classnames';

const BannerSlider = () => {
  
	const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
		arrows: false,
  }

	const slider = useRef(null)
	
	return (
		<div className={styles.root}>
			<ArrowButtonPrev onClick={() => slider.slickPrev()} />
			<Slider {...settings} ref={c => slider = c}>
				<SliderItem 
					src="/static/images/optimize.webp"
					href="/"
					alt="image1"
				/>
				<SliderItem 
					src="/static/images/optimize2.webp"
					href="/"
					alt="image2"
				/>
				<SliderItem 
					src="/static/images/optimize3.webp"
					href="/"
					alt="image3"
				/>
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
				alt="image1" 
				width={2880} 
				height={600} 
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
