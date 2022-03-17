import React from 'react';
import styles from './index.module.scss';
import { Call, Email, FacebookFill, InstagramFill, TelegramFill } from '../../icons';

const Footer = () => {

	const [data, setData] = React.useState({
		email: "",
		phone: "",
		about: "",
		telegram: "",
		instagram: "",
		facebook: "",
	})

	React.useEffect(() => {
		fetch(process.env.NEXT_PUBLIC_HOST + '/contacts', { method: 'GET' })
			.then(res => res.json())
			.then(data => {
				setData(data)
			})
	}, [])

	return (
		<div className={styles.root}>
			
			<div className={styles.container}>
				
				<div className={styles.bw}>
					<div className={styles.bw__title}>
						Онлайн магазин «Чистая линия»
					</div>
					<div className={styles.bw__info}>
						{/* <div className={styles.bw__item}>
							<div className={styles.bw__item__icon}>
								<LocationOn />
							</div>
							<div className={styles.bw__item__text}>
								г. Душанбе, пр-т Рудаки 93/1
							</div>
						</div> */}
						<div className={styles.bw__item}>
							<div className={styles.bw__item__icon}>
								<Call />
							</div>
							<div className={styles.bw__item__text}>
								<a href={"tel: " + data.phone}>+(992) {data.phone}</a>
							</div>
						</div>
						<div className={styles.bw__item}>
							<div className={styles.bw__item__icon}>
								<Email />
							</div>
							<div className={styles.bw__item__text}>
								<a href={"mailto:" + data.email}>{data.email}</a>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.socialMedia}>
					<div className={styles.socialMedia__title}>
						Мы в социальных сетях
					</div>
					<div className={styles.socialMedia__icons}>
						<a 
							className={styles.socialMedia__icon} 
							href={data.facebook} 
							target="_blank" 
							rel="noopener noreferrer"
						>
							<FacebookFill size={45} />
						</a>
						<a 
							className={styles.socialMedia__icon} 
							href={data.instagram} 
							target="_blank" 
							rel="noopener noreferrer"
						>
							<InstagramFill size={45} />
						</a>
						<a 
							className={styles.socialMedia__icon} 
							href={data.telegram} 
							target="_blank" 
							rel="noopener noreferrer"
						>
							<TelegramFill size={45} />
						</a>
					</div>
				</div>

				<div className={styles.aboutUs}>
					<div className={styles.aboutUs__title}>
						О нас
					</div>
					<div className={styles.aboutUs__text}>
						{data.about}
					</div>
				</div>

			</div>

			<div className={styles.copyriht}>
				<div className={styles.container}>
					© 2022 Чистая линия. Все права защищены.
				</div>
			</div>
		</div>
	);
}

export default Footer;
