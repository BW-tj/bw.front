import React from 'react';
import { CheckBox, CheckBoxOutlineBlank } from '../../icons';

const Brand = ({ styles, selectedBrands, brand, onClick }) => {
	const [active, setActive] = React.useState(false);

	React.useEffect(() => {
		if (selectedBrands?.includes(brand.id)) 
			setActive(true);
		else
			setActive(false);
	}, [selectedBrands, brand.id])

	React.useEffect(() => {
		console.log(brand);
	}, [brand])
	
	return (
		<button className={styles.filter_value} onClick={() => onClick(brand.id)}>
			<div className={styles.filter_value_icon}>
				{!active ? 
					<CheckBoxOutlineBlank size={20} /> : 
					<CheckBox size={20} />
				}
			</div>
			{brand.name}
		</button>
	);
}

export default Brand;
