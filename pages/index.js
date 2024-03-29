import Head from "next/head";
import React, { useState } from "react";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import ProductCart from "../components/ProductCart";
import Products from "../components/Products/Products";
import { Pagination } from "../components/Pagination";
import LayoutController from "../layouts/LayoutController";
import styles from "../styles/Home.module.scss";
import * as skeletons from "../skeletons";
import { useSelector } from "react-redux";
import PopularCategories from "../components/PopularCategories";
import { logout } from "../redux/actions/user.actions";
import { MobileCategoriesSlider } from "../components/MobileCategoriesSlider";

export const getStaticProps = async () => {
  const categoriesRes = await fetch(
    process.env.NEXT_PUBLIC_HOST + "/categories"
  );
  const categories = await categoriesRes.json();

  
  const brandsRes = await fetch(process.env.NEXT_PUBLIC_HOST + "/brands");
  const brands = await brandsRes.json();

  const bannersRes = await fetch(process.env.NEXT_PUBLIC_HOST + "/banner");
  const banners = await bannersRes.json();

  return {
    props: {
      categories,
      brands,
      banners,
    },
    revalidate: 20,
  };
};

const Home = ({ categories, brands, banners }) => {
  const [products, setProducts] = React.useState(null);
  const [pending, setPending] = React.useState(true);

  const [pageNumber, setPageNumber] = React.useState(1);

  const favorites = useSelector((state) => state.favorites);
  const user = useSelector((state) => state.user);
  let [windowWidth, setWindowWidth] = useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const getProducts = async () => {
      try {
        setPending(true);
        let config = {
          method: "GET",
        };
        if (user.isAuth)
          config = {
            ...config,
            headers: {
              Authorization:
                "Bearer " +
                localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN),
            },
          };
        const productsRes = await fetch(
          process.env.NEXT_PUBLIC_HOST +
            "/product/getproductbyhide?&pageSize=20&pageNumber=" +
            pageNumber,
          config
        );
        if (productsRes.status === 401 || productsRes.status === 403) {
          localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN);

          window.location.href = "/";
          dispatch(logout());
        }
        const products = await productsRes.json();
        setProducts(products);
      } finally {
        setPending(false);
      }
    };
    getProducts();
  }, [pageNumber, user.isAuth]);

  return (
    <LayoutController categories={categories}>
      <Head>
        <title>Чистая линия</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.root}>
        <BannerSlider className={styles.banner_slider} banners={banners} />
        {windowWidth < 600 && <MobileCategoriesSlider />}
        <div className="container">
          <PopularCategories />
          <Products>
            {pending ? (
              <skeletons.ProductsSkeleton />
            ) : (
              products.data &&
              products.data.map((product) => {
                let initialFavorite = false;
                if (!user.isAuth)
                  favorites.forEach((favorite) => {
                    if (favorite.id === product.id) {
                      initialFavorite = true;
                    }
                  });
                else initialFavorite = product.isFavorite;
                return (
                  <ProductCart
                    id={product.id}
                    key={product.id}
                    data={product}
                    initialFavorite={initialFavorite}
                  />
                );
              })
            )}
          </Products>
          <Pagination
            page={pageNumber || 1}
            totalPages={products?.totalPages || 1}
            onPageChange={(page) => setPageNumber(page)}
          />
        </div>

        {/* <Title className={styles.title}>Бренды</Title>

        <BrandsSlider brands={brands} className={styles.brand_slider} /> */}
      </div>
    </LayoutController>
  );
};

export default Home;
