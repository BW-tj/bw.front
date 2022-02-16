import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user.actions';
import styles from './index.module.scss'
import Title from './../Title/Title';

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
			const data = await response.json();
			setCategories(data.map(item => ({...item, imagePath: process.env.NEXT_PUBLIC_HOST_WITHOUT_API+item.imagePath})))
		}
		getCategories()
	}, [dispatch])

	return (
		<div className={styles.root}>
			<Title className={styles.title}>
				Популярные категории
			</Title>
			<div className={styles.categories}>
				{categories.map(category => 
					<Link href={'/category/'+category.id} key={category.id}>
						<a className={styles.category}>
							<div className={styles.category__img}>
								<Image
									width={130}
									height={130}
									src={category.imagePath}
									alt={category.name}
								/>
							</div>
							<div className={styles.category__name}>
								{category.name}
							</div>
						</a>
					</Link>	
				)}
			</div>
		</div>
	);
}

export default PopularCategories;
