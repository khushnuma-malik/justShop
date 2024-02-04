import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className='products-wrap   '>
            <div className='product '>
                <img src='https://m.media-amazon.com/images/I/61PUjQcCY9L._SY741_.jpg' />
                <h1>product name</h1>
                <p> ₹1250</p>
                <button>Add to Cart</button>
            </div>
            <div className='product  '>
                <img src='https://m.media-amazon.com/images/I/61iug74oSAL._SY741_.jpg' />
                <h1>product name</h1>
                <p> ₹700</p>
                <button>Add to Cart</button>
            </div>
            <div className='product'>
                <img src='https://m.media-amazon.com/images/I/61hNk8KW5zL._SY741_.jpg' />
                <h1>product name</h1>
                <p> ₹390</p>
                <button>Add to Cart</button>
            </div>
            <div className='product'>
                <img src='https://m.media-amazon.com/images/I/31Rgyeef31L.jpg' />
                <h1>product name</h1>
                <p> ₹600</p>
                <button>Add to Cart</button>
            </div>
            
          
        </div>
    )
}

export default Product
