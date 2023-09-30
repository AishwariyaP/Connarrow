import React from 'react'
import css from '../Style/Header.css'
import { HiBars3CenterLeft } from 'react-icons/hi2'
const Header = () => {
  return (
    <>

      <div className='header_outter'>
        <div className="header border  d-flex container py-3">
          <a href=""><img src={require('../images/Linktree_logo.svg.png')} alt="" className='logo d-none d-lg-block' /></a>
          <a href=""><img src={require('../images/images.png')} alt="" className='logo2  d-sm-block d-lg-none' /></a>
          <div className='mid-head d-none d-lg-block'>
            <button>Template</button>
            <button>Marketplace</button>
            <button>About Us</button>
            <button>FAQs</button>
          </div>
          <div className='end-header'>
            <button className='login'>Login</button>
            <button className='signup ms-2'>Sign up free</button>
          </div>
          <button className="btn border-0 d-sm-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><HiBars3CenterLeft style={{ fontSize: '27px' }} /></button>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul>
                <li>Template</li>
                <li>Marketplace</li>
                <li>About Us</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
