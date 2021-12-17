import React, { useMemo, useRef, useState } from 'react'
import Link from 'next/link' 
import SliderConstructor from 'react-slick'
import styles from './Slider.module.scss'
import classNames from 'classnames'
import { 
	ArrowBack as ArrowBackIcon,
	ArrowForward as ArrowForwardIcon
} from '../../icons'
import SliderItem from './SliderItem'

const Slider = () => {

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
		<div className={styles.root}>
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

export default Slider
