import React from 'react'
import Header from './Header'
import style from '../Style/Template.css'
import Footer from './Footer'

function Template() {
  return (
    <div>
   <Header/>
   <div className="template d-flex">
    <div className="container text-center tempt-inner">
    <h1 className='bold_tag'>A Linktree Template To Suit Every Brand And Creator</h1>
    <p>Different Link Apps, integrations and visual styles can help you create a Linktree that looks and feels like you and your brand. Explore our library of custom templates to grow and connect with your audience even more easily!</p>
    </div>
   </div>
   <div className='container'>
                {/* <div className='row row-cols-4'>
                    {
                        array.map((x, i) => {
                            return <div>
                                <div class="col">
                                <div class="blog-entry">
                                    <a href="single.html" class="img-link blog_a ">
                                        <img src={x.image} className='w-100' alt="" />
                                    </a>
                                </div>
                            </div>
                            </div>
                        })
                    }
                   
                </div> */}
            <div class="row w-100">
  <div class="col-3">
    <div
      class="nav flex-column nav-tabs text-center tablist"
      id="v-tabs-tab"
      role="tablist"
      aria-orientation="vertical"
      >
      <a
        class="nav-link active"
        id="v-tabs-home-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-home"
        role="tab"
        aria-controls="v-tabs-home"
        aria-selected="true"
        >Fashion</a
      >
      <a
        class="nav-link"
        id="v-tabs-profile-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-profile"
        role="tab"
        aria-controls="v-tabs-profile"
        aria-selected="false"
        >Health & Fitness</a
      >
      <a
        class="nav-link"
        id="v-tabs-messages-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-messages"
        role="tab"
        aria-controls="v-tabs-messages"
        aria-selected="false"
        >Influencer & Creator</a
      >
      <a
        class="nav-link"
        id="v-tabs-messages-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-messages"
        role="tab"
        aria-controls="v-tabs-messages"
        aria-selected="false"
        >Marketing</a
      >
      <a
        class="nav-link"
        id="v-tabs-messages-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-messages"
        role="tab"
        aria-controls="v-tabs-messages"
        aria-selected="false"
        >Music</a
      >
      <a
        class="nav-link"
        id="v-tabs-messages-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-messages"
        role="tab"
        aria-controls="v-tabs-messages"
        aria-selected="false"
        >Small Business</a
      >
      <a
        class="nav-link"
        id="v-tabs-messages-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-messages"
        role="tab"
        aria-controls="v-tabs-messages"
        aria-selected="false"
        >Social Media  </a
      >
      <a
        class="nav-link"
        id="v-tabs-sport-tab"
        data-mdb-toggle="tab"
        href="#v-tabs-sport"
        role="tab"
        aria-controls="v-tabs-sport"
        aria-selected="false"
        >Sports</a
      >
    </div>
  </div>

  <div class="col-9">
    <div class="tab-content" id="v-tabs-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-tabs-home"
        role="tabpanel"
        aria-labelledby="v-tabs-home-tab"
      >
       <div className='d-flex'>
       <img src={require('../images/three wishes.png')} style={{height:'500px',width:'300px'}} alt="" className='pe-3'/>
       <img src={require('../images/three wishes.png')} style={{height:'500px',width:'300px'}} alt="" className='pe-3'/>
       <img src={require('../images/three wishes.png')} style={{height:'500px',width:'300px'}} alt="" />
       </div>
       <div className='d-flex pt-3'>
       <img src={require('../images/three wishes.png')} style={{height:'500px',width:'300px'}} alt="" className='pe-3'/>
       <img src={require('../images/three wishes.png')} style={{height:'500px',width:'300px'}} alt="" className='pe-3'/>
       <img src={require('../images/three wishes.png')} style={{height:'500px',width:'300px'}} alt="" />
       </div>
      </div>
      <div
        class="tab-pane fade"
        id="v-tabs-profile"
        role="tabpanel"
        aria-labelledby="v-tabs-profile-tab"
        >
        Profile content
      </div>
      <div
        class="tab-pane fade"
        id="v-tabs-messages"
        role="tabpanel"
        aria-labelledby="v-tabs-messages-tab"
        >
        Messages content
      </div>
      <div
        class="tab-pane fade"
        id="v-tabs-sport"
        role="tabpanel"
        aria-labelledby="v-tabs-sport-tab"
        >
        sportss
      </div>
    </div>
  </div>
</div>
          </div>
    <Footer/>
    </div>
  )
}

export default Template