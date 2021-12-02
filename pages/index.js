import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { connect } from 'react-redux'
import { setTemplate } from '../redux/actions/template.actions'
import { useEffect, useState } from 'react'

const Home = ({
  template,
  setTemplate
}) => {

  const [state, setState] = useState('')
  
  const onClick = () => {
    setTemplate("test")
  }

  useEffect(() => {
    setState(template)
  }, [template])

  return (
    <>
      <Head>
        <title>Большая стирка – Главная</title>
      </Head>
      <div className={styles.container}>

        <button onClick={() => onClick()}>
          click
        </button>

        {state}

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