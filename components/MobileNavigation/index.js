import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/actions/popup.actions';
import MobileMenu from '../../popups/MobileMenu';
import styles from './index.module.scss'
import { Search } from '../../icons';
import { useRouter } from 'next/dist/client/router';

const MobileNavigation = ({ categories }) => {

	const dispatch = useDispatch()
	const router = useRouter()
	const [searchValue, setSearchValue] = React.useState('')

	const handleSearch = React.useCallback(() => {
		let query = '/search?q=' + searchValue

		router.replace(query)
	}, [searchValue, router])

	const handleBurgerClick = React.useCallback(() => {
		dispatch(openPopup(props => <MobileMenu categories={categories} {...props} />))
	}, [dispatch, categories])

	React.useMemo(() => {
		if (router.query.q)
			setSearchValue(router.query.q)
	}, [router.query])
	
	return (
		<div className={styles.root}>

			<Link href="/">
				<a className={styles.logo}>
					Большая стирка
				</a>
			</Link>
			
			<div className={styles.container}>
				<button className={styles.menuBurger} onClick={handleBurgerClick}>
					<div className={styles.menuBurgerLine}></div>
					<div className={styles.menuBurgerLine}></div>
					<div className={styles.menuBurgerLine}></div>
				</button>

				<form onSubmit={e => e.preventDefault()} className={styles.searchWrap}>
					<input 
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						type="text" 
						placeholder="Поиск..." 
						className={styles.search} 
					/>
					<button type="submit" className={styles.searchButton} onClick={handleSearch}>
						<Search />
					</button>
				</form>
			</div>

		</div>
	);
};

export default MobileNavigation;