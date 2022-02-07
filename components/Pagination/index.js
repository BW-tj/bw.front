import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from "../../icons"
import classNames from "classnames";
import React from "react";

export const Pagination = ({
	totalPages, page, onPageChange
}) => {
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

  if (totalPages <= 1) return <></>;
  return (
    <div className={classNames("pagination", className)}>
      {pages.map((page, index) =>
        page.type === "page" ? (
          <div
            key={index}
            className={classNames(
              "pagination__item",
              page.value === page && "pagination__item--active"
            )}
            onClick={() => page.value && onPageChange(page.value)}
          >
            {page.value}
          </div>
        ) : page.type === "arrowRight" ? (
          <div
            key={index}
            className="pagination__item pagination__item--arrow"
            onClick={() => onPageChange(page + 1)}
          >
            <KeyboardArrowRightIcon size={20} />
          </div>
        ) : (
          <div
            key={index}
            className="pagination__item pagination__item--arrow"
            onClick={() => onPageChange(page - 1)}
          >
            <KeyboardArrowLeftIcon size={20} />
          </div>
        )
      )}
    </div>
  );
};
