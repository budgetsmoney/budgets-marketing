import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

// Styles
import './pagination.scss';

export type PaginationProps = {
  pageContext: {
    previousPagePath: string;
    nextPagePath: string;
    humanPageNumber: string;
    numberOfPages: number;
  };
};

const Pagination = ({ pageContext }: PaginationProps) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages
  } = pageContext;

  if (numberOfPages <= 1) return <></>;

  return (
    <nav className="pagination" role="navigation">
      <Link
        className={classNames(
          'pagination-link',
          !previousPagePath ? 'disabled' : ''
        )}
        to={previousPagePath}
        rel="prev"
      >
        Previous
      </Link>

      <div className="pagination-location">
        Page {humanPageNumber} of {numberOfPages}
      </div>

      <Link
        className={classNames(
          'pagination-link',
          !nextPagePath ? 'disabled' : ''
        )}
        to={nextPagePath}
        rel="next"
      >
        Next
      </Link>
    </nav>
  );
};

export default Pagination;
