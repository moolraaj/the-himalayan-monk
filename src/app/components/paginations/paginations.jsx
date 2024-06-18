import React from 'react'

function Paginations({page,totalItems,setPage}) {
    const handelPage=(page)=>{
        if(page>0 && page<=totalItems){
          setPage(page)
        }
      }
  return (
    <>
    <div className="pagination-buttons">
      {Array.from({ length: totalItems }, (_, index) => {
        return <button
          key={index}
          onClick={() => handelPage(index + 1)}
          className={index + 1 === page ? 'active-button' : ''}
        >
          {index + 1}
        </button>
      })}
      </div>
    </>
  )
}

export default Paginations
