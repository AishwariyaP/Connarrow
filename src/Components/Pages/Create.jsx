import React from 'react'
import css from '../Style/Create.css'
function Create() {
  return (
    <>
    <div className="create">
      <div className="create_inner container">
        <div className="row">
          <div className="col-6 create_img">
            <img src={require('../images/gordon.webp')} alt="" />
          </div>
          <div className="col-6">
            <h1 className='bold_tag'>Create and customize your Linktree in minutes</h1>
            <p className='para_tag'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
            <button className='main_button'>Get started for free</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Create