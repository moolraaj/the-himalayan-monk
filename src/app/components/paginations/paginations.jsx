import React from 'react'
import paginationbutton from '../../../../src/app/assets/pagination.png'
import paginationgif from '../../assets/nextgif.gif'
function Paginations({ page, totalItems, setPage }) {
  const handelPage = (page) => {
    if (page > 0 && page <= totalItems) {
      setPage(page)
    }
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (page < totalItems) {
      setPage(page + 1)
    }
  }

  return (
    <>
      <div className="pagination-buttons">
        
        {/* <img src={paginationbutton.src} alt="icon" onClick={handlePrevious} disabled={page === 1} className='next-prev-icons prev'/>  */}
       
        {Array.from({ length: totalItems }, (_, index) => {
          return (
            <button
              key={index}
              onClick={() => handelPage(index + 1)}
              className={index + 1 === page ? 'active-button' : ''}
            >
              {index + 1}
            </button>
          )
        })}
      
       <img src={paginationgif.src} alt="icon" onClick={handleNext} disabled={page === totalItems} className='next-prev-icons next'/> 
       
      </div>
    </>
  )
}

export default Paginations
