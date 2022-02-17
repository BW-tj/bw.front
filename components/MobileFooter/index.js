import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss'
import { BxHomeAlt, FavoriteBorder, PersonOutline, ShoppingCart } from '../../icons';
import { useRouter } from 'next/dist/client/router';
import classNames from 'classnames';

const MobileFooter = () => {

	const router = useRouter();

	return (
		<div className={styles.root}>
			
			<Link href='/'>
				<a className={classNames(styles.item, router.pathname === '/' && styles.active)}>
					<div className={styles.item__icon}>
						<BxHomeAlt />
					</div>
					<div className={styles.item__text}>
						Главная
					</div>
				</a>
			</Link>
			
			<Link href='/favorites'>
				<a className={classNames(styles.item, router.pathname === '/favorites' && styles.active)}>
					<div className={styles.item__icon}>
						<FavoriteBorder />
					</div>
					<div className={styles.item__text}>
						Избранные
					</div>
				</a>
			</Link>
			
			<Link href='/cart'>
				<a className={classNames(styles.item, router.pathname === '/cart' && styles.active)}>
					<div className={styles.item__icon}>
						<ShoppingCart />
					</div>
					<div className={styles.item__text}>
						Корзина
					</div>
				</a>
			</Link>
			
			<Link href='/cabinet'>
				<a className={classNames(styles.item, router.pathname === '/cabinet' && styles.active)}>
					<div className={styles.item__icon}>
						<PersonOutline />
					</div>
					<div className={styles.item__text}>
						Профиль
					</div>
				</a>
			</Link>


		</div>
	);
}

export default MobileFooter;
