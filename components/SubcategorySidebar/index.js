import React from 'react';
import Subcategory from './Subcategory';
import styles from './index.module.scss'

const SubcategorySidebar = ({ id, categories }) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>Подкатегории</div>

			<div className={styles.subCategories}>
				{categories.length !== 0 && categories.map((category, index) => 
					<Subcategory 
						id={id}
						subCategory={category} 
						styles={styles} 
						key={index} 
					/>
				)}
			</div>

		</div>
	);
}

export default SubcategorySidebar;
