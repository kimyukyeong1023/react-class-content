import React from 'react'




export default function TestBoardCard({category,date,title,content}) {
  return (
    <div>
        <section className='board-box'>
            <div className='board-box-info'>
                <p className='board-box-info-categoty'>{category}</p>
                <p>{date}</p>

            </div>
            <div>
                <h2 className='board-box-title'>{title}</h2>
                <p className='board-box-content'>{content}</p>
            </div>

        </section>
    </div>
  )
}
