import BannerSlider from '../components/BannerSlider/BannerSlider'
import LayoutController from "../Layouts/LayoutController"
import styles from "../styles/Home.module.scss"

const Home = () => {
  return (
    <>
      <LayoutController>
        <div className={styles.root}>
          
          <BannerSlider />
          
        </div>
      </LayoutController>
    </>
  )
}

export default Home