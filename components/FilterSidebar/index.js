import React from 'react';
import Filter from './Filter';
import styles from './index.module.scss'

const FilterSidebar = ({ isEmpty, filters, selectedFilters, toggleFilter }) => {

	if (isEmpty) return <></>
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
