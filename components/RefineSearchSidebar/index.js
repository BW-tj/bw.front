import React from "react";
import Brands from "./Brands";
import Filter from "./Filter";
import styles from "./index.module.scss";
import MinMaxPrice from "./MinMaxPrice";

const RefineSearchSidebar = ({
  minPrice,
  maxPrice,
  minPriceValue,
  maxPriceValue,
  onChangePrice,
  brands,
  selectedBrands,
  onToggleBrand,
  filters,
  selectedFilters,
  toggleFilter,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Уточнить поиск</div>

      <div className={styles.filters}>
        <MinMaxPrice
          min={minPrice}
          max={maxPrice}
          minValue={minPriceValue}
          maxValue={maxPriceValue}
          onChange={onChangePrice}
          styles={styles}
        />

        {brands.length !== 0 && (
          <Brands
            toggleBrand={onToggleBrand}
            selectedBrands={selectedBrands}
            brands={brands}
            styles={styles}
          />
        )}
        {filters.length !== 0 &&
          filters.map((filter, index) => (
            <Filter
              toggleFilter={toggleFilter}
              selectedFilters={selectedFilters}
              filter={filter}
              styles={styles}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default RefineSearchSidebar;
