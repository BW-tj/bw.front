import React from 'react';
import styles from './index.module.scss';

const Characteristics = ({ characteristics }) => {
	return (
		<div className={styles.root}>

		<div className={styles.title}>
			Характеристики
		</div>
			
		{characteristics.map(characteristic => 
			<div className={styles.characteristic} key={characteristic.id}>
				<div className={styles.name}>
					{characteristic.name}:
				</div>
				<div className={styles.value}>
					{characteristic.value}
				</div>
			</div>
		)}
		</div>
	);
}

export default Characteristics;
