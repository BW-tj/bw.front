import React from 'react';
import { CheckBox, CheckBoxOutlineBlank } from '../../icons';

const FilterValue = ({ styles, selectedFilters, value, onClick }) => {
	const [active, setActive] = React.useState(false);

	React.useEffect(() => {
		if (selectedFilters?.includes(value.id)) 
			setActive(true);
		else
			setActive(false);
	}, [selectedFilters, value.id])
	
	return (
		<button className={styles.filter_value} onClick={() => onClick(value.id)}>
			<div className={styles.filter_value_icon}>
				{!active ? 
					<CheckBoxOutlineBlank size={20} /> : 
					<CheckBox size={20} />
				}
			</div>
			{value.name}
		</button>
	);
}

export default FilterValue;
