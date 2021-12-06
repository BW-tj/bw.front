import React from "react"
import styles from "./Header.module.scss"
import Logo from "../Logo/Logo"
import Link from "next/link"
import classNames from 'classnames'

const Header = ({ focused }) => {
	return (
		<div className={classNames(styles.root, focused && styles.focused)}>
			<div className={styles.container}>
				<Link href="/">
					<a className={styles.link}>
						<Logo />
						<div className={styles.description}>
							Стирайте вещи с удовольствием
						</div>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Header
