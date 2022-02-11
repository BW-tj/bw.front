import React from 'react';
import classNames from 'classnames';
import { KeyboardArrowDown } from '../../icons';
import FilterValue from './FilterValue';

const Filter = ({ filter, selectedFilters, styles, toggleFilter }) => {

	const [open, setOpen] = React.useState(false);
	const [height, setHeight] = React.useState(0);
	const menu = React.useRef(null);

	React.useEffect(() => {
		if (!menu) return
		setHeight(menu.current.offsetHeight);
	}, [menu, filter])

	return (
		<div className={styles.filter}>
			<button className={styles.filter_label} onClick={() => setOpen(!open)}>
				{filter.name}
				<span className={classNames(styles.filterArrow, open && styles.open)}>
					<KeyboardArrowDown size={20} />
				</span>
			</button>
			<div className={styles.filter_menu_wrap} style={{height: !open ? 0 : height + 'px'}}>
				<div className={styles.filter_menu} ref={menu}>
					{filter.values.map(value => 
						<FilterValue 
							key={value.id} 
							styles={styles} 
							value={value} 
							onClick={toggleFilter} 
							selectedFilters={selectedFilters} 
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Filter;
