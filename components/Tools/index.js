import classNames from 'classnames';
import React from 'react';
import { UnfoldMore } from '../../icons';
import styles from './index.module.scss'

const Tools = ({
	pageSize,
	onPageSizeChange,
	sort,
	onSort
}) => {

	const sortDictionary = {
		1: 'Сортировать по времени: новинки выше',
		2: 'Сортировать по цене: дешевые ниже',
		3: 'Сортировать по цене: дешевые выше',
		4: 'Сортировать по покупаемости',
		5: 'Сортировать по размеру скидки: высокие скидки в начале',
		6: 'Случайные',
	}

	return (
		<div className={styles.root}>
			
			<Dropdown 
				id={1}
				width={180}
				label={pageSize + " на страницу"}
				menu={[
					{value: 20, name: "20 на страницу"},
					{value: 30, name: "30 на страницу"},
					{value: 40, name: "40 на страницу"},
					{value: 50, name: "50 на страницу"}
				]}
				onSelect={v => onPageSizeChange(v)}
			/>
			
			<Dropdown 
				id={2}
				width={300}
				label={sortDictionary[sort]}
				menu={[
					{value: 1, name: sortDictionary[1]},
					{value: 2, name: sortDictionary[2]},
					{value: 3, name: sortDictionary[3]},
					{value: 4, name: sortDictionary[4]},
					{value: 5, name: sortDictionary[5]},
					{value: 6, name: sortDictionary[6]},
				]}
				onSelect={v => onSort(v)}
			/>

		</div>
	);
}

const Dropdown = ({ id, width, label, menu, onSelect }) => {

	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const handleClickOutside = e => {
			if (!e.target.closest('#tools-dropdown-'+id))
				setOpen(false)
		}
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside);
	}, [id])

	return (
		<div id={'tools-dropdown-'+id} className={styles.dropdown}>

			<button className={classNames(styles.dropdown_label, open && styles.active)} onClick={() => setOpen(!open)}>
				{label}
				<div className={styles.dropdown_label_icon}>
					<UnfoldMore size={20} />
				</div>
			</button>

			{open && 
				<div className={styles.dropdown_menu} style={{width: width+'px'}}>

					{menu.map((item, index) => 
						<button 
							className={styles.dropdown_menu_item}
							key={index} 
							onClick={() => { 
								setOpen(false)
								onSelect(item.value) 
							}}
						>
							{item.name}
						</button>		
					)}

				</div>
			}

		</div>
	)
}

export default Tools;
