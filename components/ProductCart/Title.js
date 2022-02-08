import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { 
	Favorite as FavoriteIcon,
	FavoriteBorder as FavoriteBorderIcon
} from '../../icons'
import styles from './Title.module.scss'
import { useSelector } from 'react-redux'

const Title = ({ name, isFavorite, onToggleFavorite }) => (
	<div className={styles.root}>
		<Link href='/'>
			<a className={styles.text}>
				{name}
			</a>
		</Link>
		<button 
			className={classNames(
				styles.like_btn, 
				isFavorite && styles.active
			)}
			onClick={() => onToggleFavorite(!isFavorite)}
		>
			{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
		</button>
	</div>
)
	
export default Title
