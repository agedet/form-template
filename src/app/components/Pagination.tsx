'use client';

import { RootState } from '@/store/provider';
import { setCurrentPage } from '@/store/templateSlice';
import { useDispatch, useSelector } from 'react-redux';


type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.templates.currentPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="pagination">
      <button 
        onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
      >
        Previous
      </button>
      
      <span>
        <span>{currentPage}</span> of {totalPages}
      </span>

      <button 
        onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
