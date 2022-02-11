import React from 'react';
import Link from 'next/link';
import classNames from 'classnames'
import styles from './index.module.scss'

const SubcategoryList = ({ subCategories, className }) => {
	return (
		<div className={styles.root}>
			<div className={classNames(styles.wrap, className)}>
				{subCategories.map(subCategory =>
					<Link key={subCategory.id} href={'/category/'+subCategory.id}>
						<a className={styles.item}>
							{subCategory.name}
						</a>
					</Link>	
				)}
			</div>
		</div>
	);
}

export default SubcategoryList;
