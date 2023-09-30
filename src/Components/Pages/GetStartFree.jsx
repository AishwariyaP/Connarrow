import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import style from '../Style/GetStartFree.css'

const GetStartfree = () => {
    return (
        <>
            <div className="get-started">
                <div className="row">
                    <div className="col-lg-2 col-sm-12">
                        <a href=""><img src={require('../images/Linktree_logo.svg.png')} alt="" className='logo d-none d-lg-block mt-5 ms-4' /></a>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center">
                        <div className="join-linktree">
                            <h1 className="bold_tag">
                                Join Linktree
                            </h1>
                            <p className=''>Sign up for free!</p>
                            <form>
                                <div class="form-group pt-5 w-75">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group pt-3 w-75">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Linktr.ee/ username" />
                                </div>
                               <div className='d-flex justify-center'> <button  className="btn mt-3 w-75 border  text-center create-btn-color">Create account</button></div>
                                <p className='w-75 create-para pt-4'>By clicking Create account, you agree to Linktree's <ins>Terms and Conditions</ins> and confirm you have read our <ins>Privacy Notice</ins>. You may receive offers, news and updates from us.</p>
                                <p className="para_tag w-75">OR</p>
                                <div className="google-login w-75">
                                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?login_hint=from_sign_up&prompt=select_account&response_type=code&redirect_uri=https%3A%2F%2Fauth.linktr.ee%2Flogin%2Fcallback&scope=email%20profile&state=Nys_Tz-1W8dDwcNwqsmwWn2QcqtDTqbg&client_id=574756645719-obsb9ir4f259ve134lvurrt0gk1f0bqo.apps.googleusercontent.com&service=lso&o2v=1&flowName=GeneralOAuthFlow"><FcGoogle/> Sign up with Google</a>
                                </div>
                               <div className='apple-login mt-3 w-75'>
                               <a href="https://appleid.apple.com/auth/authorize?client_id=ee.linktr.social.serviceid&scope=name%20email&response_type=code&redirect_uri=https%3A%2F%2Fauth.linktr.ee%2Flogin%2Fcallback&login_hint=from_sign_up&response_mode=form_post&state=tNCVJ_SPsfhjalUrEocslCWToD6hlRkx"><BsApple/> Sign up with Apple</a>
                               </div>
                               <p className='w-75 pt-5 login-page-getStarted'>  Already have an account? <a href="">Log in</a></p>
                               <p className='w-75 recaptcha pt-4'>This site is protected by reCAPTCHA and the <ins>Google Privacy Policy</ins> and <ins>Terms of Service</ins> apply.

</p>
                            </form>
                        </div>
                    </div>
                 <div className='get-start-img col-lg-4 col-sm-12 '>
                    <img src={require('../images/istockphoto-1267110917-612x612-fotor-bg-remover-20230922162743.png')} alt="" />
                 </div>
                </div>
            </div>
        </>
    )
}

export default GetStartfree