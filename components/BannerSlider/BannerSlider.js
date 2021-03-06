import classNames from "classnames";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from "../../icons";
import styles from "./BannerSlider.module.scss";

const BannerSlider = ({ banners, className }) => {
  const [imageList, setImageList] = useState([]);
  const [dragging, setDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    pauseOnHover: true,
  };

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = useCallback(
    (e) => {
      if (dragging) {
        e.preventDefault();
      }
    },
    [dragging]
  );

  useEffect(() => {
    setImageList(
      banners.map((item) => ({
        id: item.id,
        src: process.env.NEXT_PUBLIC_HOST_WITHOUT_API + item.imagePath,
        href: item.href,
        alt: item.name,
      }))
    );
    return () => setImageList([]);
  }, [banners]);

  const slider = useRef(null);

  return (
    <div className={classNames(styles.root, className)}>
      {imageList.length > 1 && (
        <ArrowButtonPrev onClick={() => slider.slickPrev()} />
      )}
      <Slider
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
        {...settings}
        ref={(c) => (slider = c)}
      >
        {imageList.map(({ id, src, alt, href }) => (
          <SliderItem
            src={src}
            href={href}
            alt={alt}
            key={id}
            onClick={handleOnItemClick}
          />
        ))}
      </Slider>
      {imageList.length > 1 && (
        <ArrowButtonNext onClick={() => slider.slickNext()} />
      )}
    </div>
  );
};

const SliderItem = ({ src, href, onClick }) => (
  <Link href={href}>
    <a onClick={onClick} target="_blank" referrerPolicy="no-referrer">
      <Image src={src} alt="image1" width={2880} height={700} />
    </a>
  </Link>
);

const ArrowButtonPrev = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.arrow_button, styles.arrow_button_prev)}
    >
      <ArrowBackIcon />
    </button>
  );
};

const ArrowButtonNext = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.arrow_button, styles.arrow_button_next)}
    >
      <ArrowForwardIcon />
    </button>
  );
};

export default BannerSlider;
