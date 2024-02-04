import React from 'react'
import './Header.css'
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
    return (
        <>
          <div className='header'>
          <Link href='/' >     <img className='header-logo w-20 h-10 ' src='https://seeklogo.com/images/K/k-letter-logo-361F296ABD-seeklogo.com.png' /> </Link>

                <div className='header-search'>
                    <input type='text' />
                    <FaSearch className='header-searchicon text-white' />
                </div>
                <div className='header-nav'>
                    <div className='header-option'>
                        <span className='header-optionone'> hello world</span>
                        <span className='header-optiontwo'> signin</span>
                    </div>
                    <div className='header-option'>
                        <span className='header-optionone'> return</span>
                        <span className='header-optiontwo'> &orders</span>
                    </div>
                    <div className='header-option'>
                        <span className='header-optionone'> your</span>
                        <span className='header-optiontwo'> prime</span>
                    </div>
                   <Link href='/Cart'> <div className='header-optionBasket'>
                        <FaShoppingCart />
                        <span>2</span>
                    </div> </Link>
                </div>
            </div>
            <div className='header-bottom'>
                <ul>
                    <li>all</li>
                    <li>Mobile</li>
                    <li>clothes</li>
                    <li>Shoes</li>
                    <li>Electronics</li>
                    <li>Category</li>
                    <li>glossry</li>
                    <li>
                        <img className='h-10 w-52' src='https://randomstr.com/assets/images/logo-dark.jpg ' />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
