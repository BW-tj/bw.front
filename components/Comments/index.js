import React from 'react';
import styles from './index.module.scss'
import { 
	Star as StarIcon
} from '../../icons'
import classNames from 'classnames';

const Comments = ({ comments, onAdd }) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				Отзывы
			</div>
			<button onClick={onAdd} className={classNames(styles.addButton, styles.active)}>
				Оставить отзыв
			</button>
			
			{comments.map(comment => 
				<div className={styles.comment} key={comment.id}>
					<div className={styles.label}>
						<div className={styles.author}>
							{comment.userName}
						</div>
						<Stars rating={comment.rating} />
					</div>
					<div className={styles.text}>
						{comment.text}
					</div>
					<div className={styles.date}>
						{new Date(comment.commentAt).toLocaleDateString()}
					</div>
				</div>
			)}

		</div>
	);
}

const Stars = ({ rating }) => {
	const stars = []
	
	for(let i = 1; i <= 5; i++)
		if (i <= rating)
			stars.push({ key: i, filled: true })
		else
			stars.push({ key: i, filled: false })

	return (
		<div className={styles.stars}>
			{stars.map(star => <Star filled={star.filled} key={star.key} />)}
		</div>
	)
}

const Star = ({ filled }) => (
	<div className={classNames(styles.star, filled && styles.filled)}>
		<StarIcon size={20} />
	</div>
)

export default Comments;
