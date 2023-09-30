import React from 'react'
import style from '../Style/Analyze.css'
import { BsYoutube } from 'react-icons/bs'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsFillHouseFill } from 'react-icons/bs'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import{LuAlarmClock} from 'react-icons/lu'
import {BiHeadphone} from 'react-icons/bi'


function Analyze() {
  return (
    <>
      <div className="analyze">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={require('../images/chart-social.jpg')} />
                  </div>
                  <div className="flip-card-back icons bg-dark">

                    <div className='flip_button'>
                      <BsYoutube />
                      <BiLogoInstagramAlt />
                    </div>
                    <div className='flip_button'>
                      <BsTwitter />
                      <BsFacebook />
                    </div>

                  </div>
                </div>
              </div>
              <div className="flip-card flip-card-btn">
                <div className="flip-card-inner flip-card-inner-btn">
                  <div className="flip-card-front flip-set">
                    <BsFillHouseFill className='fs-1'/>
                    <h2 className='pt-2'>237</h2>
                    <p>Donations</p>
                  </div>
                  <div className="flip-card-back  flip-back">
                    <HiOutlineCurrencyDollar className='fs-1'/>
                    <h2 className='pt-2'>$1,627</h2>
                    <p>Sales</p>
                    

                  </div>
                </div>
              </div>
              <div className="flip-card flip-card-btn">
                <div className="flip-card-inner flip-time-play">
                  <div className="flip-card-front flip-set flip-time">
                    <LuAlarmClock className='fs-1'/>
                    <h2 className='pt-2'>9.2s</h2>
                    <p>Time to click</p>
                  </div>
                  <div className="flip-card-back  flip-back flip-plays">
                    <BiHeadphone className='fs-1'/>
                    <h2 className='pt-2'>365</h2>
                    <p>Plays</p>
                    

                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h1 className='bold_tag'>Analyze your audience and keep your followers engaged</h1>
              <p className='para_tag'>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
              <button className='main_button'>Get started for free</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analyze