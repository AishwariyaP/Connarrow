import React from 'react'
import css from '../Style/Hero.css'
  // import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

function Hero() {
  return (
    <div className='hero_outter'>
      <div className='hero container'>
       <div className="row">
       <div className='hero_main_section col-6'>
        <h1 className='bold_tag'>Whatever you been, gather one link in your bio.</h1>
        <p className='pt-4 para_tag'>Join 40M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <form action="">
            <input type="text" placeholder='linkr.ee/yourname' />
            <button className='main_button'>Claim your linktree</button>
        </form>
        </div>
        <div className="hero_img col-6">
          <img src={require('../images/Linktree-customize-profile.avif')} alt="" />
        </div>
       </div>
       {/* <div className='wave'></div>
       <div className='wave_second'></div>
       <div className='wave_third'></div> */}
  </div>
    </div>
  )
}

export default Hero