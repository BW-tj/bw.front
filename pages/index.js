import BannerSlider from '../components/BannerSlider/BannerSlider'
import BrandsSlider from '../components/BrandsSlider/BrandsSlider'
import Title from '../components/Title/Title'
import LayoutController from "../layouts/LayoutController"
import styles from "../styles/Home.module.scss"

const Home = () => {
  return (
    <>
      <LayoutController>
        <div className={styles.root}>
          
          <BannerSlider className={styles.banner_slider} />

          <Title className={styles.title}>Бренды</Title>

          <BrandsSlider className={styles.brand_slider} />
          
        </div>
      </LayoutController>
    </>
  )
}

export default Home