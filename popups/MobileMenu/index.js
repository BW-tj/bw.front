import classNames from 'classnames';
import React from 'react';
import styles from './index.module.scss' 

const MobileMenu = ({ onClose }) => {

	const [close, setClose] = React.useState(false);

	React.useEffect(() => {
		const handleWindowClick = e => {
			if (!e.target.closest('.' + styles.wrap)) {
				setClose(true);
				setTimeout(() => {
					onClose()
				}, 200)
			}
		}
		window.addEventListener('mousedown', handleWindowClick)
		return () => window.removeEventListener('mousedown', handleWindowClick)
	}, [onClose])

	return (
		<div className={styles.root}>
			
			<div className={classNames(styles.wrap, close && styles.close)}>
				
			</div>

		</div>
	);
}

export default MobileMenu;
