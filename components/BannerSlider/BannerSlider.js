import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import styles from './BannerSlider.module.scss'

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  }
	return (
		<div className={styles.root}>
			<Slider {...settings}>
				<div>
					<Image 
						src={"/static/images/optimize.webp"} 
						alt="image1" 
						width={2880} 
						height={600} 
					/>
				</div>
				<div>
					<Image 
						src={"/static/images/optimize2.webp"} 
						alt="image2" 
						width={2880} 
						height={600}
					/>
				</div>
				<div>
					<Image 
						src={"/static/images/optimize3.webp"} 
						alt="image3" 
						width={2880} 
						height={600}
					/>
				</div>
			</Slider>
		</div>
	)
}

export default BannerSlider
