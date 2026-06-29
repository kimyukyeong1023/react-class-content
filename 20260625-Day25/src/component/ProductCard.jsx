import React from 'react'

export default function ProductCard({image,category,title,price}) {
  return (
    <div>
         <div class="product-card">
                <div class="product-img-wrap">
                    <img src={image}
                         loading="lazy"/>
                </div>
                <div class="product-info">
                    <span class="product-category">{category}</span>
                    <h3 class="product-title">{title}</h3>
                    <p class="product-price">{price}</p>
                </div>
            </div>
    </div>
  )
}
