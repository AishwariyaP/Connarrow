import React from 'react'
import style from '../Style/Footer.css'
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import GetStartfree from './GetStartFree'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className=" text-center">
          <div className="footer-inner">
            <h1 className='bold_tag'>Jumpstart your corner of the internet today</h1>
            <form action="">
              <input className='link' type="text" placeholder='linkr.ee/yourname' />
              <button className='main_button'>Claim your linktree</button>
            </form>
          </div>
        </div>
        <div className="footer_outter">
          <div className="container text-black">
            <div className='d-flex justify-content-around pt-5'>
              <img src={require('../images/Linktree_logo.svg.png')} className='logo-size' alt="" />
              <ul className=''>
                <h4 class="shb-footer-header">Contact Us</h4>
                <li>
                  <a class="shb-footer-nav-link" target="_blank" href="tel:+911234567890">
                    <span>
                      <BiSolidPhoneCall />
                    </span>
                    <span class="shb-footer-contact-link-text">+91 96381 24599</span>
                  </a>
                </li>
                <li>
                <a class="shb-footer-nav-link" target="_blank" href="mailto:business@accorest.com">
                <span class="shb-footer-contact-link-icon">
                  < AiOutlineMail/>
                </span>
                <span class="shb-footer-contact-link-text">business@accorest.com</span>
              </a>
                </li>
                <li>
                <a class="shb-footer-nav-link" target="_blank" href="https://www.google.com/maps/dir/21.2107264,72.8498176/ACCOREST/@21.2243104,72.8461944,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04f9a58fada05:0x499dc05d9d46504f!2m2!1d72.8837067!2d21.2363301?hl=en-GB&entry=ttu">
                <span class="shb-footer-contact-link-icon">
                  <BiMap/>
                </span>
                <span className="shb-footer-contact-link-text w-50">3, Bhakti arcade, mahadev chowk, Mota varachha, SURAT-394101</span>
              </a>
                </li>
              </ul>
              <ul className='useful_link'> 
              <h4 class="shb-footer-header">Useful Links</h4>
                <li>Template</li>
                <li>
                  Marketplace
                </li>
                <li>About Us </li>
                <li>
                  FAQs
                </li>
              </ul>
              <ul>
              <h4 class="shb-footer-header">Social Media</h4>
              <li>
              <a class="shb-footer-nav-link" target="_blank" href="https://www.google.com/search?q=ACCOREST&stick=H4sIAAAAAAAA_-NgU1I1qDBOSjUwSbNMNLVIS0xJNDC1MqgwsbRMSTYwTbFMMTEzBUouYuVwdHb2D3INDgEA6uZbgDQAAAA&hl=en-GB&mat=CcAjhd8DcluhElYBeenfiHBfWLk4vStGki0YzM6hW_oEDBdEbwFLiVAnknBfQZJHHeYM-zHptARCOtZRi1NIPGHRX-I3Z3zIKZRadrRHYGAx-eyucD9Ma1B9yQ2e_qgkmA&authuser=0">
                <span class="shb-footer-social-link-icon">
                  <AiOutlineGoogle/>
                </span>
                <span class="shb-footer-social-link-text">Google</span>
                </a>
              </li>
              <li>
              <a class="shb-footer-nav-link" target="_blank" href="https://www.facebook.com/people/Accorest/100094812228725/">
                <span class="shb-footer-social-link-icon">
                 <BsFacebook/>
                </span>
                <span class="shb-footer-social-link-text">Facebook</span>
              </a>
              </li>
              <li>
              <a class="shb-footer-nav-link" target="_blank" href="https://www.instagram.com/accorest_/">
                <span class="shb-footer-social-link-icon">
                  <BsInstagram/>
                </span>
                <span class="shb-footer-social-link-text">Instagram</span>
              </a>
              </li>
              <li>
              <a class="shb-footer-nav-link" target="_blank" href="https://www.linkedin.com/in/ankit-kachhadiya-4a538227b/">
                <span class="shb-footer-social-link-icon">
                  <AiFillLinkedin/>
                </span>
                <span class="shb-footer-social-link-text">Linkedin</span>
              </a>
              </li>
              </ul>
            </div>
           <div className='Footer_login'>
           <button className='login'>Login</button>
            {/* <button className='main_button'>Get started for free</button> */}
            <a href="../Pages/GetStartFree.jsx" className='main_button'>Get Start for free</a>
           </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer