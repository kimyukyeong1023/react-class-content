import React from 'react'

export default function BlogCard({title, content, image}) {
  return (
        <div className='blog-card'>
            <div className='blog-card-content'>
                <h2>{title}</h2>
                <p>{content}</p>
                <p><span>공감 </span><span>댓글</span></p>
            </div>
                <img className='blog-card-img'
                     src={image} alt="" />
        </div>
  )
}
