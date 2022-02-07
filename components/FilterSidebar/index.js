import React from 'react';
import Filter from './Filter';
import styles from './index.module.scss'

const FilterSidebar = ({ filters, selectedFilters, toggleFilter }) => {

	return (
		<div className={styles.root}>
			
			<div className={styles.title}>Фильтры</div>

			<div className={styles.filters}>
				{filters.length !== 0 && filters.map((filter, index) => 
					<Filter 
						toggleFilter={toggleFilter}
						selectedFilters={selectedFilters} 
						filter={filter} 
						styles={styles} 
						key={index} 
					/>
				)}
				{filters.length === 0 &&
					<div className={styles.noFilters}>Загрузка...</div>
				}
			</div>

		</div>
	);
}

export default FilterSidebar;
