import React from 'react'

export default function CharCard({name,image,price,value,setvalue}) {
  return (
    <div>
        <div className="char-card">
            <img className="char-card-img"
            src={image} alt="" 
            onClick={()=>{
                {setvalue}([...{value}, 
                    {name: {name},
                    image: {image},
                    price: {price}
                    }])
   
            }}/>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}

