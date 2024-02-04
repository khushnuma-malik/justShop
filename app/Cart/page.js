import React from 'react'
import './global.css'
const page = () => {
  return (

    <>
      <div className='checkout '>
        <div className='checkout-left'>
          <img className='checkout-ad'  src='https://assets-global.website-files.com/5e3de80322b300854230f11f/5f175c6221f1881c38d8bbfa_hero.jpg '  />
          <div>
            <h3 className=' text-1xl font-bold '>Hello world</h3>
            <h2 className='checkout-title font-bold text-2xl'>Your shopping Cart</h2>
            <div className='checkoutproduct'>
              <img src='https://m.media-amazon.com/images/I/61PUjQcCY9L._SY741_.jpg' className='checkoutproduct-img' />
              <div className='checkoutproduct-info'>
                <p className='checkoutproduct-title'> Product Name</p>
                <p className='checkoutproduct-price'>
                  <strong>₹1250.00 </strong></p>
                <button> Remove from Cart</button>
              </div>
            </div>
            <div className='checkoutproduct'>
              <img src='https://m.media-amazon.com/images/I/61iug74oSAL._SY741_.jpg' className='checkoutproduct-img' />
              <div className='checkoutproduct-info'>
                <p className='checkoutproduct-title'> Product Name</p>
                <p className='checkoutproduct-price'>
                  <strong>₹1250.00 </strong></p>
                <button> Remove from Cart</button>
              </div>
            </div>
            <div className='checkoutproduct'>
              <img src='https://m.media-amazon.com/images/I/61hNk8KW5zL._SY741_.jpg' className='checkoutproduct-img' />
              <div className='checkoutproduct-info'>
                <p className='checkoutproduct-title'> Product Name</p>
                <p className='checkoutproduct-price'>
                  <strong>₹1250.00 </strong></p>
                <button> Remove from Cart</button>
              </div>
            </div>
            <div className='checkoutproduct'>
              <img src='https://m.media-amazon.com/images/I/31Rgyeef31L.jpg' className='checkoutproduct-img' />
              <div className='checkoutproduct-info'>
                <p className='checkoutproduct-title'> Product Name</p>
                <p className='checkoutproduct-price'>
                  <strong>₹1250.00 </strong></p>
                <button> Remove from Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className='checkout-right'>
          <div className='subtotal'>
            <p> subtotal(2Items)<strong> ₹1250.00</strong></p>
            <small className='subtotal-gift'>
              <input type='checkbox' />This order contains a gift
            </small>
            <button>Proceed to checkout</button>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default page
