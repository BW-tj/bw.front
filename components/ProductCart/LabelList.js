import React from 'react'
import If from '../If/If'
import Label from './Label'
import styles from './LabelList.module.scss'

const LabelList = ({ promotionPercent, isNew }) => (
	<div className={styles.root}>
		<If condition={isNew}>
			<Label link='/' text='Новинка' className={styles.label_new_product} />
		</If>
		<If condition={promotionPercent !== 0}>
			<Label 
				link='/' text={'Акция -' + promotionPercent + '%'} 
				className={styles.label_promotion} 
			/>
		</If>
	</div>
)

export default LabelList
