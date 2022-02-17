import React from 'react';
import Image from 'next/image' 
import styles from './index.module.scss'
import Slider from 'react-slick';

const ProductImages = ({ product, width }) => {

	const images = [product.images.find(image => image.isMain), ...product.images.filter(image => !image.isMain)];

	const [slider, setSlider] = React.useState(null)

	const settings = {
		infinite: false,
		arrows: false,
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const [style, setStyle] = React.useState({width: width+'px', gridTemplateColumns: `100px ${width - 100}px`})

	React.useEffect(() => {

		const handleResize = () => {
			if (window.innerWidth < 720) {
				setStyle({ width: width+'px', gridTemplateColumns: `${width}px` })
			}
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [width])

	return (
		<div className={styles.root} style={style}>

			<div className={styles.pagination}>
				{images.map((image, i) => 
					<button 
						onClick={() => slider && slider.slickGoTo(i)}
						className={styles.paging} 
						key={image.id}
					>
						<Image 
							src={`${process.env.NEXT_PUBLIC_HOST_WITHOUT_API}/${images[i].imagePath}`}
							alt={'product-image-'+i}
							width='100%'
							height='100%'
							layout='responsive' objectFit='contain'
						/>
					</button>
				)}	
			</div>

			<div className={styles.slider}>
				<Slider {...settings} ref={slider => setSlider(slider)}>
					{images.map((image, index) => 
						<div key={image.id} className={styles.image}>
							<Image 
								src={`${process.env.NEXT_PUBLIC_HOST_WITHOUT_API}/${images[index].imagePath}`}
								alt={'product-image-'+index}
								width='100%'
								height='100%'
								layout='responsive' objectFit='cover'
							/>
						</div>
					)}
				</Slider>
			</div>
		</div>
	);
}

export default ProductImages;
