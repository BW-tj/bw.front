import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LayoutController from '../layouts/LayoutController'
import Title from '../components/Title/Title'
import styles from '../styles/Search.module.scss'

export const getStaticProps = async () => {

  const categories =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
      .then(res => res.json())

  return {
    props: {
      categories
    }
  }
}

const Search = ({ categories }) => {

  const [products, setProducts] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())

    if (!params.q) return window.location.replace('/')

    let url = process.env.NEXT_PUBLIC_HOST+'/products?q='+params.q

    if (params.categoryId) 
      url += '&categoryId='+params.categoryId

    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, config)
      .then(res => res.status === 200 ? res.json() : null)
      .then(res => setProducts(res))
      .catch(err => console.log(err))

  }, [router.query])

	return (
    <LayoutController categories={categories}>
      <div className={styles.root}>
        <Title className={styles.title}>Результаты поиска</Title>
      </div>
    </LayoutController>
	)
}

export default Search
