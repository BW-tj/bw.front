import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'
import Image from 'next/image'
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '../../icons'
import styles from './BrandsSlider.module.scss'

const BrandsSlider = ({ brands, className }) => {

	const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: brands.length < 5 ? brands.length : 5,
		draggable: false,
    slidesToScroll: 1,
    initialSlide: 1,
		arrows: false
  })

	const [slider, setSlider] = useState(null)
	const [imageList, setImageList] = useState([])

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

	useEffect(() => {
    setImageList(brands.map(item => ({ 
			id: item.id, 
			src: process.env.NEXT_PUBLIC_HOST_WITHOUT_API + item.imagePath, 
			alt: item.name 
		})))
		return () => setImageList([])
	}, [brands]);

	return (
		<div className={classNames(styles.root, className)}>
		{imageList.length > 5 && <ArrowButtonPrev onClick={() => slider.slickPrev()} />}
			<div className={styles.wrap}>
				<Slider {...settings} ref={c => setSlider(c)}>
					{imageList.map(({ src, alt }) => 
						<SliderItem 
							src={src}
							alt={alt}
							key={alt}
						/>
					)}
				</Slider>
			</div>
			{imageList.length > 5 && <ArrowButtonNext onClick={() => slider.slickNext()} />}
		</div>
	)
}

const SliderItem = ({ src }) => (
	<div className={styles.image} >
		<Image 
			src={src} 
			alt='image1' 
			width='100%'
			height='100%'
			layout='responsive' objectFit='contain'
		/>
	</div>
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
