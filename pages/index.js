import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setCategories } from '../redux/actions/categories.actions'
import BannerSlider from '../components/BannerSlider/BannerSlider'
import BrandsSlider from '../components/BrandsSlider/BrandsSlider'
import ProductCart from '../components/ProductCart/ProductCart'
import Title from '../components/Title/Title'
import LayoutController from '../layouts/LayoutController'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
  const categories = await res.json()
  return {
    props: {
      categories,
    },
  }
}

const Home = ({ categories }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategories(categories))
  }, [dispatch, categories])

  return (
    <>
      <LayoutController>
        <div className={styles.root}>
          
          <BannerSlider className={styles.banner_slider} />

          <Title className={styles.title}>Бренды</Title>

          <BrandsSlider className={styles.brand_slider} />

          <Title className={styles.title}>Хиты продаж</Title>

          <div className="container">
            <ProductCart />
          </div>
          
        </div>
      </LayoutController>
    </>
  )
}

export default Home