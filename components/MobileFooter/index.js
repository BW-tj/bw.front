import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss'
import { BxHomeAlt, FavoriteBorder, PersonOutline, ShoppingCart } from '../../icons';
import { useRouter } from 'next/dist/client/router';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const MobileFooter = () => {

	const router = useRouter();

	const cart = useSelector(state => state.cart)

	const favorites = useSelector(state => state.favorites)

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
						{favorites.length !== 0 &&
							<div className={classNames(styles.item__iconInfo, styles.item__iconInfo_favorites)}>
								{favorites.length}
							</div>
						}
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
						{cart.length !== 0 &&
							<div className={classNames(styles.item__iconInfo, styles.item__iconInfo_favorites)}>
								{cart.reduce((acc, cur) => acc + cur.count, 0)}
							</div>
						}
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
