import React, { useEffect, useState } from 'react'
import DesktopLayout from './Desktop/DesktopLayout'
import MobileLayout from './Mobile/MobileLayout'

const LayoutController = ({
	children
}) => {

	const [windowSize, setWindowSize] = useState(0)

	useEffect(() => {

		const handleWindowSizeChange = () => {
			setWindowSize(window.innerWidth)
		}
		
		handleWindowSizeChange()

		window.addEventListener('resize', () => handleWindowSizeChange())
		
		return () => window.removeEventListener('resize', () => handleWindowSizeChange())

	}, [])

	const Layout = windowSize < 1000 ? MobileLayout : DesktopLayout

	return (
		<Layout>
			{children}
		</Layout>
	)
}

export default LayoutController
