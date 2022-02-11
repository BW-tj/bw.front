import React from 'react';
import classNames from 'classnames';
import { KeyboardArrowDown } from '../../icons';
import MultiRangeSlider from '../MultiRangeSlider/index';

const MinMaxPrice = ({ min, max, minValue, maxValue, styles, onChange }) => {

	const [open, setOpen] = React.useState(false);
	const [height, setHeight] = React.useState(0);
	const menu = React.useRef(null);

	React.useEffect(() => {
		if (!menu) return
		setHeight(menu.current.offsetHeight);
	}, [menu])

	return (
		<div className={styles.minmax}>
			<button className={styles.filter_label} onClick={() => setOpen(!open)}>
				Цена
				<span className={classNames(styles.filterArrow, open && styles.open)}>
					<KeyboardArrowDown size={20} />
				</span>
			</button>
			<div className={styles.minmax_menu_wrap} style={{height: !open ? 0 : height + 'px'}}>
				<div className={styles.filter_menu} ref={menu}>
					<MultiRangeSlider 
						timeout={500} 
						min={min} 
						max={max} 
						onChange={onChange} 
						className={styles.range}
						value={[minValue, maxValue]} 
					/>
					<div className={styles.minmax_inputs}>
						<div className={styles.minMaxInputWrap}>
							<input 
								type="text"
								className={styles.minMaxInput}
								value={minValue}
								onChange={e => onChange([e.target.value, maxValue])} 
							/>
							c.
						</div>
						<div className={styles.minMaxInputWrap}>
							<input 
								type="text"
								className={styles.minMaxInput}
								value={maxValue}
								onChange={e => onChange([minValue, e.target.value])} 
							/>
							c.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MinMaxPrice;
