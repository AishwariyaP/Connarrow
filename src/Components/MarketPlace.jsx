import React from 'react'

import spotify from '../Components/images/spotify.jpg'
import snap from '../Components/images/snapchat.png'
import insta from '../Components/images/insta.jpg'
import youtube from '../Components/images/youtube.jpg'
import thread from '../Components/images/th.jpg'
import whatsapp from '../Components/images/whatsapp-icon.png'
import pinterest from '../Components/images/pinterest.png'
import fb from '../Components/images/fb.jpg'
import x from '../Components/images/x.jpg'
import doc from '../Components/images/doc.jpg'
import images from '../Components/images/image.jpg'
import video from '../Components/images/video.svg'
import moj from './images/moj.jpg'
import music from './images/music.jpg'
import tipjar from './images/tipjar.svg'
function MarketPlace() {
    return (
        <div className='container mt-5'>
            <div className="row mb-3">
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={thread} alt="" className='w-100 h-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Thread</h4>
                            <p>Share Thread videos on your Linktree</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={whatsapp} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Snapchat</h4>
                            <p>Promote Your Public Profile</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={pinterest} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Pinterest</h4>
                            <p>Showcase Pins.boards and more</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={youtube} alt="" className='w-100 youtube' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2 '>YouTube</h4>
                            <p>Share YouTube videos on your Linktree</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={snap} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Snapchat</h4>
                            <p>Promote Your Public Profile</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={insta} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Instagram</h4>
                            <p>Share Instagram videos on your Linktree</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={fb} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>FaceBook</h4>
                            <p>Add Facebook videos on your Linktree</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={x} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>X</h4>
                            <p>Showcase your Tweets and Twitter Feed </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3  bg-success opacity-75'>
                            <img src={spotify} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Spotify</h4>
                            <p>Share Your latest or favorite music</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={doc} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Document</h4>
                            <p>upload a PDF to share with your visitors</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={images} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Images</h4>
                            <p>Add Images to your Linktree</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3  bg-success opacity-75'>
                            <img src={video} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Video</h4>
                            <p>Add videos right to your linkree</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-start">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={moj} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Moj</h4>
                            <p>Add Moj videos on your Linktree</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3'>
                            <img src={music} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Music</h4>
                            <p>Share music and get more streams</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="iconcard">
                        <div className='outicon me-3  bg-success opacity-75'>
                            <img src={tipjar} alt="" className='w-100' />
                        </div>
                        <div>
                            <h4 className='fw-semibold pt-2'>Video</h4>
                            <p>Collect Tips and raise funds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace
