import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link';
import { InstagramFill, FacebookFill, TelegramFill } from '../../icons';
import classNames from 'classnames';

const instagram = 'https://www.instagram.com/bw.tj/';
const facebook = 'https://www.facebook.com/bw.tj/';
const telegram = 'https://www.telegram.com/bw.tj/';

const SocialIcons = () => {
	return (
		<div className={styles.root}>

			<Link href={instagram}>
				<a className={classNames(styles.icon, styles.instagram)}>
					<InstagramFill size={28} />
				</a>
			</Link>

			<Link href={facebook}>
				<a className={classNames(styles.icon, styles.facebook)}>
					<FacebookFill size={28} />
				</a>
			</Link>

			<Link href={telegram}>
				<a className={classNames(styles.icon, styles.telegram)}>
					<TelegramFill size={28} />
				</a>
			</Link>

		</div>
	)
}

export default SocialIcons