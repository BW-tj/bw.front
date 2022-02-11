import React from 'react';
import Link from 'next/link'
import classNames from 'classnames';
import { KeyboardArrowDown } from '../../icons';
import SubSubcategory from './SubSubcategory';

const Subcategory = ({ id, subCategory, styles }) => {

	const [open, setOpen] = React.useState(true);
	const [height, setHeight] = React.useState(0);
	const menu = React.useRef(null);

	React.useEffect(() => {
		if (!menu || !menu.current) return
		setHeight(menu.current.offsetHeight);
	}, [menu, subCategory])

	return (
		<div className={styles.subCategory}>
			<div className={styles.subCategory_label}>
				<Link href={"/category/"+subCategory.id}>
					<a className={classNames(styles.subCategory_label_link, id === subCategory.id && styles.active)}>
						{subCategory.name}
					</a>
				</Link>
				{subCategory.subCategories.length !== 0 &&
					<button 
						className={classNames(styles.subCategoryArrow, open && styles.open)} 
						onClick={() => setOpen(!open)}
					>
						<KeyboardArrowDown size={20} />
					</button>
				}
			</div>
			{subCategory.subCategories.length !== 0 &&
				<div className={styles.subCategory_menu_wrap} style={{height: !open ? 0 : height + 'px'}}>
					<div className={styles.subCategory_menu} ref={menu}>
						{subCategory.subCategories.map(subCategory => 
							<SubSubcategory 
								key={subCategory.id} 
								styles={styles} 
								subSubCategory={subCategory}  
							/>
						)}
					</div>
				</div>
			}
		</div>
	);
}

export default Subcategory;
