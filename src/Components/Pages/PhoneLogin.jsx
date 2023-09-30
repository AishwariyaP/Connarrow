import React from 'react'
import style from '../Style/PhoneLogin.css'

function PhoneLogin() {
    return (
        <>
            <div className="phone">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <a href=""><img src={require('../images/Linktree_logo.svg.png')} alt="" className='logo d-none d-lg-block mt-5 ms-4' /></a>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        
                    <main class="relative pt-xl flex md:py-lg md:px-2xl lg:p-2xl lg:pb-sm lg:w-[calc(100vw-52%)] min-h-screen justify-center"><div class="p-lg pt-16 lg:!pt-24 lg:w-[640px] flex flex-col"><div class="md:container mx-auto w-full"><div class="mb-2xl "><h1 class="text-black text-[32px] font-extrabold leading-heading tracking-[-1px] lg:text-xl lg:tracking-[-2px] mb-md login-text">Log in to your Linktree</h1><p class="text-concrete text-md "></p></div><form><div class="mb-xs"><div class="rounded-[10px] relative focus-within:ring-2 focus-within:ring-black transition duration-75 ease-out w-full overflow-hidden hover:shadow-[inset_0_0_0_2px_#e0e2d9] hover:focus-within:shadow-none"><div class="flex rounded-[10px] leading-none border-solid border-2 overflow-hidden w-full border-transparent"><div class="relative grow"><div class="iti iti--allow-dropdown iti--separate-dial-code"><div class="iti__flag-container"></div> <input type="number" placeholder='+91 00000 00000' className='w-50 phone-number mt-4'/> </div></div></div></div><div class="flex justify-between"><div></div></div></div><div id="countryDrodownContainer"></div><p class="text-primary text-sm underline ml-4"><a class="cursor-pointer username">Log in with username</a></p><div class="w-full"><span class="flex items-center justify-center"><button className=" log-in  w-50 text-center border-1 mt-4">Log in</button></span></div></form></div><div class="flex justify-center mt-xl"><p className="text-concrete text-sm mt-4 w-50 text-center">Don't have an account? <a class="undefined text-sm text-primary inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline" href="#/register">Sign up</a></p></div><div className="flex-[1_1_100%] flex items-end pt-8 re-captcha mt-5"><p class="">This site is protected by reCAPTCHA and the <a class="!text-concrete text-xs text-sm text-primary inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline" href="https://www.google.com/intl/en/policies/privacy/" className='p-0'>Google Privacy Policy</a> and <a class="!text-concrete text-xs text-sm text-primary inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline" href="https://www.google.com/intl/en/policies/terms/" className='p-0'>Terms of Service</a> apply.</p></div></div></main>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default PhoneLogin