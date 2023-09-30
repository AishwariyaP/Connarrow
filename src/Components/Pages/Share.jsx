import React from 'react'
import style from '../Style/Share.css'
import { BsYoutube } from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs' 
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaSnapchatGhost} from 'react-icons/fa' 
import { BsPinterest } from 'react-icons/bs'

function Share() {
  return (
    <div className='share'>
    <div className="container">
        <div className="row">
            <div className="col-6">
            <h1 className='bold_tag'>Share your Linktree from your Instagram, TikTok, Twitter and other bios</h1>
            <p className='para_tag'>Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
            <button className='main_button'>Get started for free</button>
            </div>
            <div className="col-6 position-relative">
                <div className='snapchat-card card_section'><FaSnapchatGhost/></div>
                <div className='linked-card card_section'><AiFillLinkedin/></div>
                <div className='facebook-card card_section'><BsFacebook/></div>
                <div className='twitter-card card_section'><BsTwitter/></div>
                <div className='pinterest-card card_section'><BsPinterest/></div>
                <div className='instagram-card card_section'><BiLogoInstagramAlt/></div>
                <div className='youtube-card card_section'><BsYoutube/></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Share