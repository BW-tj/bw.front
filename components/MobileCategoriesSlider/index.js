import { icon } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

const defaultCategoryImage =
  "data:image/png;base64,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";

const CategoryItem = ({ name, iconPath, id }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`/category/${id}`}>
      <div className="category">
        <div className="category-icon">
          <Image
            src={
              iconPath
                ? process.env.NEXT_PUBLIC_HOST_WITHOUT_API + "/" + iconPath
                : defaultCategoryImage
            }
            alt={name}
          />
        </div>
        <div className="category-name">{name}</div>
      </div>
    </Link>
  );
};

export const MobileCategoriesSlider = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/categories");
    const data = await res.json();

    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sliderOptions = {
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="categories">
      <Slider {...sliderOptions}>
        {categories.map(({ name, iconPath, id }) => (
          <CategoryItem name={name} iconPath={iconPath} key={id} id={id} />
        ))}
      </Slider>
    </div>
  );
};
