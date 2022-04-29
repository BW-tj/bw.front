import classNames from "classnames";
import React from "react";
import Link from "next/link";
import CategoriesButton from "../CategoriesButton/CategoriesButton";
import DesktopNavigationTools from "../DesktopNavigationTools/DesktopNavigationTools";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./DesktopNavigation.module.scss";
import Logo from "./../Logo/Logo";

const DesktopNavigation = ({
  isSearchFocused,
  isCatergoryOpen,
  onChangeSearchFocus,
  onChangeCategoryOpen,
}) => {
  const handleCategoryButtonClick = () => {
    onChangeCategoryOpen(!isCatergoryOpen);
  };

  return (
    <div
      className={classNames(
        styles.root,
        isCatergoryOpen && !isSearchFocused && styles.focus
      )}
    >
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>

        <CategoriesButton
          active={isCatergoryOpen}
          onClick={() => handleCategoryButtonClick()}
        />

        <SearchBox
          isFocused={isSearchFocused}
          onChangeSearchFocus={(value) => onChangeSearchFocus(value)}
        />

        <DesktopNavigationTools />
      </div>
    </div>
  );
};

export default DesktopNavigation;
