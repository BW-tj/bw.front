import React from 'react';
import Link from 'next/link'

const SubSubcategory = ({ styles, subSubCategory }) => {
	return (
		<Link href={'/categories/'+subSubCategory}>
			<a className={styles.subSubCategory}>
				{subSubCategory.name}
			</a>
		</Link>
	);
}

export default SubSubcategory;
