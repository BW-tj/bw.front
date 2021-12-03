const If = ({
	children,
	condition,
	altContent=null
}) => {
	if (condition)
		return children
	else if (altContent)
		return altContent 
	else return <></>
}

export default If
