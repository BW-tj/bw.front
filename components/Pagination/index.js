import React from "react";
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from "../../icons";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Pagination = ({ totalPages, page, onPageChange, className }) => {
  const [pages, setPages] = React.useState([]);
  React.useEffect(() => {
    const newPages = [];
    if (totalPages < 10) {
      for (let i = 1; i <= totalPages; i++) {
        newPages.push({ type: "page", value: i });
      }
    } else if (page < 7) {
      for (let i = 1; i <= 7; i++) {
        newPages.push({ type: "page", value: i });
      }
      newPages.push({ type: "arrowRight" });
      newPages.push({ type: "page", value: totalPages });
    } else if (page > totalPages - 6) {
      newPages.push({ type: "page", value: 1 });
      newPages.push({ type: "arrowLeft" });
      for (let i = totalPages - 6; i <= totalPages; i++) {
        newPages.push({ type: "page", value: i });
      }
    } else {
      newPages.push({ type: "page", value: 1 });
      newPages.push({ type: "arrowLeft" });
      for (let i = page - 2; i <= page + 2; i++) {
        newPages.push({ type: "page", value: i });
      }
      newPages.push({ type: "arrowRight" });
      newPages.push({ type: "page", value: totalPages });
    }
    setPages(newPages);
  }, [page, totalPages]);

  // if (totalPages <= 1) return null;
  return (
    <div className={classNames("pagination", className)}>
      {pages.map((cpage, index) =>
        cpage.type === "page" ? (
          <div
            key={index}
            className={classNames(
              "pagination__item",
              cpage.value === page && "pagination__item--active"
            )}
            onClick={() => onPageChange(cpage.value)}
          >
            {cpage.value}
          </div>
        ) : cpage.type === "arrowRight" ? (
          <div
            key={index}
            className="pagination__item pagination__item--arrow"
            onClick={() => onPageChange(page + 1)}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" size={30} />
          </div>
        ) : (
          <div
            key={index}
            className="pagination__item pagination__item--arrow"
            onClick={() => onPageChange(page - 1)}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </div>
        )
      )}
    </div>
  );
};
