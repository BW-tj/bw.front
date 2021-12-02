import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { connect } from 'react-redux'
import { setTemplate } from '../redux/actions/template.actions'

const Home = ({
  template,
  setTemplate
}) => {
  
  const onClick = () => {
    setTemplate('test')
  }
  
  return (
    <>
      <Head>
        <title>Большая стирка – Главная</title>
      </Head>
      <div className={styles.container}>

        <button onClick={() => onClick()}>
          click
        </button>

        {template}

      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    template: state.template
  }
}

const mapDispatchToProps = {
  setTemplate
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)