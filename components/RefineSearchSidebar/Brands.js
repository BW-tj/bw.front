import React from 'react';
import classNames from 'classnames';
import { KeyboardArrowDown } from '../../icons';
import Brand from './Brand';

const Brands = ({ brands, selectedBrands, styles, toggleBrand }) => {

	const [open, setOpen] = React.useState(false);
	const [height, setHeight] = React.useState(0);
	const menu = React.useRef(null);

	React.useEffect(() => {
		if (!menu) return
		setHeight(menu.current.offsetHeight);
	}, [menu, brands])

	return (
		<div className={styles.filter}>
			<button className={styles.filter_label} onClick={() => setOpen(!open)}>
				Бренд
				<span className={classNames(styles.filterArrow, open && styles.open)}>
					<KeyboardArrowDown size={20} />
				</span>
			</button>
			<div className={styles.filter_menu_wrap} style={{height: !open ? 0 : height + 'px'}}>
				<div className={styles.filter_menu} ref={menu}>
					{brands.map(brand => 
						<Brand 
							key={brand.id} 
							styles={styles} 
							brand={brand} 
							onClick={toggleBrand} 
							selectedBrands={selectedBrands} 
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Brands;
