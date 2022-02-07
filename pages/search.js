import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { QueryToString } from '../functions/query';
import LayoutController from "../layouts/LayoutController";
import Title from "../components/Title/Title";
import ProductCart from '../components/ProductCart'
import Products from '../components/Products/Products'
import FilterSidebar from './../components/FilterSidebar';
import * as skeletons from '../skeletons';
import styles from "../styles/Search.module.scss";
import { Pagination } from '../components/Pagination';
import Tools from '../components/Tools';

export const getStaticProps = async () => {
  const categories = await fetch(
    process.env.NEXT_PUBLIC_HOST + "/categories"
  ).then((res) => res.json());

  return {
    props: {
      categories,
    },
  };
};

const Search = ({ categories }) => {
  const [pending, setPending] = useState(true);
  const [products, setProducts] = useState(null);
  const [params, setParams] = useState(null);

  const router = useRouter();

  const handleToggleFilter = React.useCallback((filterValueId) => {
    if (!params || !params.filters) return
    if (params.filters.includes(filterValueId))
      setParams(prev => ({...prev, filters: prev.filters.filter(item => item !== filterValueId)}))
    else 
      setParams(prev => ({...prev, filters: [...prev.filters, filterValueId]}))
  }, [params])

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const urlParams = Object.fromEntries(urlSearchParams.entries());

    setParams(prev => ({
      ...prev, 
      query: urlParams.q,
      categoryId: urlParams.categoryId ? urlParams.categoryId : "",
      filters: [],
      pageNumber: 1,
      pageSize: 30,
      sort: 1
    }));
  }, [router.query]);

  useEffect(() => {    
    if (!params) return;
    let url =
      process.env.NEXT_PUBLIC_HOST + "/product/filtration?" + QueryToString(params);
    const config = {
      method: "GET",
    };
    const getData = async () => {
      try {
        setPending(true);
        const response = await fetch(url, config);
        const data = await response.json();
        setProducts(data);
      }
      finally {
        window.setTimeout(() => {
          setPending(false);
        }, 200)
      }
    }
    getData();
  }, [params])
  
  return (
    <LayoutController categories={categories}>
      <Head>
        <title>{params?.query || "Запрос"} – купить в большой стирке</title>
      </Head>
      <div className={styles.root}>
        <Title className={styles.title}>
          Результаты поиска {!pending ? products?.data.length : '...'}
        </Title>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <FilterSidebar 
              filters={products?.filters || []}
              selectedFilters={params?.filters || []}
              toggleFilter={handleToggleFilter} 
            /> 
          </div>
          <div className={styles.products}>
            <Tools 
              pageSize={params?.pageSize || 30}
              onPageSizeChange={pageSize => setParams(prev => ({...prev, pageSize}))} 
              sort={params?.sort || 1} 
              onSort={sort => setParams(prev => ({...prev, sort}))} 
            />
            <Products>
              {pending && 
                <skeletons.ProductsSkeleton />
              }
              {!pending && products.data.map(product => 
                <ProductCart 
                  id={product.id}
                  key={product.id}
                  data={product}
                />
              )}
              <Pagination 
                page={params?.pageNumber || 1}
                totalPages={products?.totalPages || 1}
                onPageChange={(page) => setParams(prev => ({...prev, pageNumber: page}))}
              />
            </Products>
          </div>
        </div>
      </div>
    </LayoutController>
  );
};

export default Search;
