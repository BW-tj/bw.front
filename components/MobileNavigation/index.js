import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/actions/popup.actions';
import MobileMenu from '../../popups/MobileMenu';
import styles from './index.module.scss'

const MobileNavigation = () => {

	const dispatch = useDispatch()
	const [searchValue, setSearchValue] = React.useState('')

	const handleBurgerClick = React.useCallback(() => {
		dispatch(openPopup(props => <MobileMenu {...props} />))
	}, [dispatch])
	
	return (
		<div className={styles.root}>
			
			<div className={styles.container}>
				<button className={styles.menuBurger} onClick={handleBurgerClick}>
					<div className={styles.menuBurgerLine}></div>
					<div className={styles.menuBurgerLine}></div>
					<div className={styles.menuBurgerLine}></div>
				</button>

				<div className={styles.searchWrap}>
					<input 
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						type="text" 
						placeholder="Поиск..." 
						className={styles.search} 
					/>
				</div>
			</div>

		</div>
	);
};

export default MobileNavigation;