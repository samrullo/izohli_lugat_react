const Pagination = ({ page, pageSize, total, onPageChange }) => {
  const pageCount = Math.ceil(total / pageSize);

  return (
    <div>
      <button className="btn btn-light" disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </button>
      <span>Page {page} of {pageCount}</span>
      <button className="btn btn-light" disabled={page === pageCount} onClick={() => onPageChange(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;