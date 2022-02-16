import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { KeyboardArrowDown } from '../../icons';
import styles from './index.module.scss' 

const MobileCategoryList = ({ onClose, categories }) => {

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
	
	const handleClose = React.useCallback(() => {
		setClose(true);
		setTimeout(() => {
			onClose()
		}, 200)
	}, [onClose])

	return (
		<div className={styles.root}>
			
			<div className={classNames(styles.wrap, close && styles.close)}>

				<div className={styles.title}>
					Категории
				</div>

				<div className={styles.categories}>

					{categories.map(category => 
						<Category key={category.id} category={category} onClick={handleClose} />
					)}

				</div>

			</div>

		</div>
	);
}

const Category = ({ category, onClick }) => {

	const [open, setOpen] = React.useState(false)

	return (
		<div className={styles.category}>
			<div className={styles.label}>
				<Link href={'/category/'+category.id}>
					<a className={styles.label__link} onClick={onClick}>
						{category.name}
					</a>
				</Link>
				{category.subCategories.length !== 0 &&
					<button className={classNames(styles.arrow, open && styles.open)} onClick={() => setOpen(!open)}>
						<KeyboardArrowDown />
					</button>
				}
			</div>
			
			{open && category.subCategories.length !== 0 && 
				<div className={styles.subCategories}>
					{category.subCategories.map(subCategory =>
						<SubCategory key={subCategory.id} subCategory={subCategory} onClick={onClick} />
					)}
				</div>
			}
		</div>
	)
}

const SubCategory = ({ subCategory, onClick }) => {

	const [open, setOpen] = React.useState(false)

	return (
		<div className={styles.category}>
			<div className={styles.label}>
				<Link href={'/category/'+subCategory.id}>
					<a className={styles.label__link} onClick={onClick}>
						{subCategory.name}
					</a>
				</Link>
				{subCategory.subCategories.length !== 0 &&
					<button className={classNames(styles.arrow, open && styles.open)} onClick={() => setOpen(!open)}>
						<KeyboardArrowDown />
					</button>
				}
			</div>

			{open && subCategory.subCategories.length !== 0 && 
				<div className={styles.subSubCategories}>
					{subCategory.subCategories.map(subSubCategory =>
						<SubSubCategory key={subSubCategory.id} subSubCategory={subSubCategory} onClick={onClick} />
					)}
				</div>
			}
		</div>
	)
}

const SubSubCategory = ({ subSubCategory, onClick }) => (
	<div className={styles.category}>
		<div className={styles.label}>
			<Link href={'/category/'+subSubCategory.id}>
				<a className={styles.label__link} onClick={onClick}>
					{subSubCategory.name}
				</a>
			</Link>
		</div>
	</div>
)

export default MobileCategoryList;
