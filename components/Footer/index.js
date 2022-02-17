import React from 'react';
import Image from 'next/image'
import styles from './index.module.scss';
import { Call, Email, FacebookFill, InstagramFill, LocationOn, TelegramFill } from '../../icons';

const Footer = () => {
	return (
		<div className={styles.root}>
			
			<div className={styles.container}>
				
				<div className={styles.bw}>
					<div className={styles.bw__title}>
						Онлайн магазин «Большая стирка»
					</div>
					<div className={styles.bw__info}>
						<div className={styles.bw__item}>
							<div className={styles.bw__item__icon}>
								<LocationOn />
							</div>
							<div className={styles.bw__item__text}>
								г. Душанбе, пр-т Рудаки 93/1
							</div>
						</div>
						<div className={styles.bw__item}>
							<div className={styles.bw__item__icon}>
								<Call />
							</div>
							<div className={styles.bw__item__text}>
								+(992) 987 365 365
							</div>
						</div>
						<div className={styles.bw__item}>
							<div className={styles.bw__item__icon}>
								<Email />
							</div>
							<div className={styles.bw__item__text}>
								info@bw.tj
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
							href="https://www.facebook.com" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							<FacebookFill size={45} />
						</a>
						<a 
							className={styles.socialMedia__icon} 
							href="https://www.instagram.com" 
							target="_blank" 
							rel="noopener noreferrer"
						>
							<InstagramFill size={45} />
						</a>
						<a 
							className={styles.socialMedia__icon} 
							href="https://www.telegram.com" 
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
						Онлайн магазин <b>Большая Стирка</b> - это онлайн платформа, соединяющая товары и покупателей в одном месте!

						У нас вы найдете тысячи товаров. Мы быстро и бережно доставим ваш заказ до дверей вашего дома. Бесплатная доставка доступна при заказе от 49 сомони. Покупка товаров в рассрочку, возврат товара, гарантия от продавца.
					</div>
				</div>

			</div>

			<div className={styles.copyriht}>
				<div className={styles.container}>
					© 2022 Большая стирка. Все права защищены.
				</div>
			</div>
		</div>
	);
}

export default Footer;
