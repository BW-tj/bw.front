import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user.actions';
import styles from './index.module.scss'

const PopularCategories = () => {

	const dispatch = useDispatch()

	const [categories, setCategories] = React.useState([])

	React.useEffect(() => {

		const getCategories = async () => {
			const url = process.env.NEXT_PUBLIC_HOST + '/categories/populars';
			const config = {
				method: "GET",
			}
			const response = await fetch(url, config);
			if (response.status === 401 || response.status === 403) {
				localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
				window.location.href = '/'
				dispatch(logout())
			}
		}
		getCategories()
	}, [dispatch])

	return (
		<div className={styles.root}>
			
		</div>
	);
}

export default PopularCategories;
