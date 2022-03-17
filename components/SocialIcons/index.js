import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link';
import { InstagramFill, FacebookFill, TelegramFill } from '../../icons';
import classNames from 'classnames';

const SocialIcons = () => {

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

			<Link href={data.instagram}>
				<a className={classNames(styles.icon, styles.instagram)}>
					<InstagramFill size={28} />
				</a>
			</Link>

			<Link href={data.facebook}>
				<a className={classNames(styles.icon, styles.facebook)}>
					<FacebookFill size={28} />
				</a>
			</Link>

			<Link href={data.telegram}>
				<a className={classNames(styles.icon, styles.telegram)}>
					<TelegramFill size={28} />
				</a>
			</Link>

		</div>
	)
}

export default SocialIcons