import React from 'react';
import styles from './Products.module.scss';

const Products = ({ children }) => {
	return (
		<div className={styles.root}>
			{children}
		</div>
	);
}

export default Products;
