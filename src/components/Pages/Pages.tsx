import { useEffect, useState } from 'react';

import PagesProps from './IPages'
import PageButtonProps from './IPageButton';

import './pages.scss'

const Pages = (props: PagesProps) => {
  const { users, onChangePage } = props;
  const initPage = 1;
  const pageSize = 15;
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / pageSize);

  const [currentPage, setCurrentPage] = useState(initPage);
  const [isNewPage, setIsNewPage] = useState(true);

  const [pagination, setPagination] = useState({
    startPage: 1,
    endPage: 0,
    startIndex: 0,
    endIndex: pageSize - 1,
    pages: [0]
  });

  const getPage = () => {
    let startPage = 1;
    let endPage = totalPages > 10 ? 10 : totalPages;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalUsers - 1);
    const pageUsers = users.slice(startIndex, endIndex + 1);

    onChangePage(pageUsers);

    if (totalPages > 10) {
      if (currentPage <= 6) {
        startPage = 1;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    return {
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  const setPage = (page: number) => {
    const isOutofRange = page < 1 || page > totalPages;

    if (!isOutofRange) {
      setCurrentPage(page);
      setIsNewPage(true);
    }
  }

  useEffect(() => {
    const shouldSetPage = totalPages !== 0 && isNewPage;

    if (shouldSetPage) {
      setIsNewPage(false);
      const loadPagination = getPage();
      setPagination(loadPagination);
    }

  }, [totalPages, isNewPage, pagination])

  const PageButton = (props: PageButtonProps) => {
    const { pageClass, page, text } = props;

    return (
      <li className={pageClass}>
        <button type='button' onClick={() => setPage(page)}>{text}</button>
      </li>
    )
  }

  const disableFrontClass = currentPage === initPage ? 'disabled' : '';
  const disableEndClass = currentPage === totalPages ? 'disabled' : '';

  return (
    <ul className="users-pagination">

      <PageButton page={initPage} pageClass={disableFrontClass} text="First" />
      <PageButton page={currentPage - 1} pageClass={disableFrontClass} text="Previous" />

      {pagination.pages.map((page, index) =>
        <PageButton
          key={index}
          page={page}
          pageClass={currentPage === page ? 'active' : ''}
          text={page.toString()}
        />
      )}

      <PageButton page={currentPage + 1} pageClass={disableEndClass} text="Next" />
      <PageButton page={totalPages} pageClass={disableEndClass} text="Last" />

    </ul>
  )


}

export default Pages;
