import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Popup from '../components/Popup'
import { setCategories } from '../redux/actions/categories.actions'
import DesktopLayout from './Desktop/DesktopLayout'
import MobileLayout from './Mobile/MobileLayout'

const LayoutController = ({
	children, categories=[], products=null
}) => {

  const dispatch = useDispatch()

	const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    dispatch(setCategories(categories))
  }, [dispatch, categories])

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
		<>
			<Popup />
			<Layout>
				{children}
			</Layout>
		</>
	)
}

export default LayoutController
