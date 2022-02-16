import classNames from 'classnames';
import React from 'react';
import { 
	Star as StarIcon
} from '../../icons'
import { logout } from '../../redux/actions/user.actions';
import styles from './index.module.scss';

const AddComment = ({ onClose, setComments, id }) => {

	const [userName, setUserName] = React.useState('');
	const [text, setText] = React.useState('');
	const [rating, setRating] = React.useState(1);

	const handleClick = React.useCallback(async () => {

		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userName,
				text,
				rating,	
				productId: id,
			})
		}

		const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/comment', config)
		if (response.status === 401 || response.status === 403) {
			localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
			window.location.href = '/'
			dispatch(logout())
		}

		const data = await response.json();

		setComments({
			id: String(new Date().valueOf()), 
			userName, 
			text, 
			rating, 
			commentAt: new Date().toJSON()
		})

		onClose()
	}, [id, onClose, userName, text, rating, setComments])

	React.useEffect(() => {
		const handleWindowClick = e => {
			if (!e.target.closest('.' + styles.wrap))
				onClose()
		}
		window.addEventListener('mousedown', handleWindowClick)
		return () => window.removeEventListener('mousedown', handleWindowClick)
	}, [onClose])

	return (
		<div className={styles.root}>
			<div className={styles.wrap}>
				<div className={styles.title}>
					Добавить комментарий
				</div>
				<div className={styles.inputsWrap}>
					<div className={styles.inputWrap}>
						<div className={styles.inputTitle}>
							Имя
						</div>
						<input
							className={styles.input}
							type="text"
							value={userName}
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
					<div className={styles.inputWrap}>
						<div className={styles.inputTitle}>
							Комментарий
						</div>
						<textarea
							className={styles.textarea}
							type="text"
							value={text}
							onChange={e => setText(e.target.value)}
						/>
					</div>
				</div>
				<div className={styles.starWrap}>
					<div className={styles.starTitle}>
						Ваша оценка
					</div>
					<Stars rating={rating} setRating={setRating} />
				</div>
				<div className={styles.buttonWrap}>
					<button
						className={styles.button}
						onClick={handleClick}
					>
						Добавить
					</button>
				</div>
			</div>
		</div>
	);
}

const Stars = ({ rating, setRating }) => {
	const [hoverRating, setHoverRating] = React.useState(0)
	const [stars, setStars] = React.useState([])

	React.useMemo(() => {
		const newStars = []
		for(let i = 1; i <= 5; i++)
			newStars.push({ key: i, filled: i <= rating, lightFilled: i <= hoverRating })
		setStars(newStars)
	}, [rating, hoverRating])

	return (
		<div className={styles.stars}>
			{stars.map((star, index) => 
				<Star 
					onHover={() => setHoverRating(index+1)}
					onLeave={() => setHoverRating(0)}
					onClick={() => setRating(index+1)} 
					filled={star.filled} 
					lightFilled={star.lightFilled}
					key={star.key} 
				/>
			)}
		</div>
	)
}

const Star = ({ filled, lightFilled, onClick, onHover, onLeave }) => (
	<div 
		onMouseOver={onHover}
		onMouseLeave={onLeave}
		className={classNames(styles.star, filled && styles.filled, lightFilled && styles.lightFilled)} 
		onClick={onClick}
	>
		<StarIcon size={45} />
	</div>
)

export default AddComment;
