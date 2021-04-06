import React from 'react';
import ReactPaginate from 'react-paginate';
import './styles.css';

type Props = {
  totalPages?: number;
  goToPage: Function;
  activePage: number;
}

const Pagination = ({ totalPages = 0, goToPage, activePage }: Props) => {
  //const paginationItems = Array.from(Array(totalPages).keys());
  const handlePageClick = (data: any) => {
    goToPage(data.selected);
  }

  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'pagination-item'}
      breakLinkClassName={'pagination-link'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination-container'}
      pageClassName={'pagination-item'}
      pageLinkClassName={'pagination-link'}
      activeClassName={'active'}
      previousClassName={'pagination-item'}
      previousLinkClassName={'pagination-link'}
      nextClassName={'pagination-item'}
      nextLinkClassName={'pagination-link'}
      disabledClassName={'disabled'}
    />
  );
}

export default Pagination;