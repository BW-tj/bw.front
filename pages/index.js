import LayoutController from '../layouts/LayoutController'
import styles from '../styles/Home.module.scss'
import BannerSlider from '../components/BannerSlider/BannerSlider'
import BrandsSlider from '../components/BrandsSlider/BrandsSlider'
import ProductCart from '../components/ProductCart/ProductCart'
import Title from '../components/Title/Title'

const Home = () => {
  return (
    <>
      <LayoutController>
        <div className={styles.root}>
          
          <BannerSlider className={styles.banner_slider} />

          <Title className={styles.title}>Бренды</Title>

          <BrandsSlider className={styles.brand_slider} />

          <ProductCart />
          
        </div>
      </LayoutController>
    </>
  )
}

export default Home