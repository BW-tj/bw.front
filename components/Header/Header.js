import React from "react"
import styles from "./Header.module.scss"
import Logo from "../Logo/Logo"
import Link from "next/link"

const Header = () => {
	return (
		<div className={styles.root}>
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
