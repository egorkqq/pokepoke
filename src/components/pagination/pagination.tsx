import { memo, useMemo } from 'react'

import { PagiButton, Wrapper } from './styled'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = memo(({ currentPage, totalPages, onPageChange }) => {
  const pages = useMemo(() => {
    const visiblePages = 2
    const pagesBefore = Math.min(currentPage, visiblePages)
    const pagesAfter = Math.min(totalPages - currentPage - 1, visiblePages)
    const startPage = Math.max(currentPage - pagesBefore, 0)
    const endPage = Math.min(currentPage + pagesAfter, totalPages - 1)

    const result = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

    if (startPage > 0) {
      result.unshift(0)
    }

    if (endPage < totalPages - 1) {
      result.push(totalPages - 1)
    }

    return result
  }, [currentPage, totalPages])
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      window.scrollTo({ top: 0 })
      onPageChange(page)
    }
  }

  return (
    <Wrapper>
      <PagiButton onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0}>
        {'<'}
      </PagiButton>
      {pages.map((page) => (
        <PagiButton
          key={page}
          onClick={() => handlePageClick(page)}
          disabled={page === currentPage}
          isActive={page === currentPage}
        >
          {page + 1}
        </PagiButton>
      ))}
      <PagiButton onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages - 1}>
        {'>'}
      </PagiButton>
    </Wrapper>
  )
})
