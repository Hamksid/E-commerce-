import React from 'react'
import Logo from '../../Components/assets/images/logo.svg'
import { Link } from 'react-router-dom'
const Search = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
      const search = document.querySelector(".search")
      search.classList.toggle("active", window.scrollY > 100)
    })
  
  return (
    <>
        <section className='search'>
          <div className="container c_flex">
            <div className="logo width">
              <img src={Logo} alt="" />
            </div>

            <div className="search-box _flex">
              <i className='fa fa-search'></i>
              <input type="text" placeholder='Search and hit enter......'/>
              <span>ALL Categories</span>
            </div>

            <div  className="icon f_flex width">
              <i className='fa fa-user icon_circle' ></i>
              <div className="cart">
                <Link to="/cart">
                  <i className='fa fa-shopping-bag icon_circle'></i>
                  <span>0</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Search