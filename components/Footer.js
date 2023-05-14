import React from 'react';
import Image from 'next/image';
import logoLight from '../public/src/images/logoLight.png';
import fb from '../public/src/images/icon/facebook.png';
import insta from '../public/src/images/icon/instagram.png';
import twitter from '../public/src/images/icon/twitter.png';


const Footer = () => {
    return (
        <>
            <div className='joinBg container-fluid'>
                <div className='container'>
                    <div className='row joinBodyBg'>
                        <div className='col-xxl-3 col-xl-3 col-lg-4 my-3 '>
                            <div className='joinContent'>
                                <h3 className='semibolTextLgLight'>Join With Us</h3>
                                <p className='semibolTextmd'>Join us to get all the updates and best deals via email</p>
                            </div>
                        </div>
                        <div className='col-xxl-9 col-xl-9 col-lg-8 my-3'>
                            <span className='joinSearch'>
                                <input type="text" placeholder='Enter Your E-mail' className='joinSearchInput' />
                                <button className='joinBtn'>Join Us</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerBg'>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 centerItem py-5'>
                            <div>
                                <div>
                                    <Image src={logoLight} className='' alt='GA Logo Light' />
                                </div>
                                <div className='mt-3'>
                                    <Image src={insta} className='me-2' alt='Instagram Icon' />
                                    <Image src={twitter} className='me-2' alt='Twitter Icon' />
                                    <Image src={fb} className='me-2' alt='Facebopok Icon' />
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12 py-5'>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <div className='mb-5'>
                                    <p className='semibolTextmdLight'>Our Service</p>
                                    <li className='semibolTextSmLight'>Features Course</li>
                                    <li className='semibolTextSmLight'>Free Course</li>
                                    <li className='semibolTextSmLight'>Best Selling Course</li>
                                    <li className='semibolTextSmLight'>Top Rated Course</li>
                                    <li className='semibolTextSmLight'>Newest Course</li>
                                </div>
                                <div className='mb-5'>
                                    <p className='semibolTextmdLight'>Company</p>
                                    <li className='semibolTextSmLight'>About us</li>
                                    <li className='semibolTextSmLight'>Contact</li>
                                    <li className='semibolTextSmLight'>Career</li>
                                    <li className='semibolTextSmLight'>Donate</li>
                                    <li className='semibolTextSmLight'>Volunteer</li>
                                </div>
                                <div className='mb-5'>
                                    <p className='semibolTextmdLight'>Resources</p>
                                    <li className='semibolTextSmLight'>Blog</li>
                                    <li className='semibolTextSmLight'>Help & Support</li>
                                    <li className='semibolTextSmLight'>FAQ</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerBottomBg py-xxl-5 py-xl-5 py-lg-4 py-md-4 py'>
                <div className='container'>
                    <div className='d-flex flex-wrap justify-content-md-center justify-content-lg-between justify-content-center'>
                        <div className='d-flex align-items-center'>
                            <p className='semibolTextSmLight mb-0'>Copyright @2023. All Right Reserved</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <li className='semibolTextSmLight'>Terms and conditions</li>
                            <li className='semibolTextSmLight mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-5 mx'>|</li>
                            <li className='semibolTextSmLight'>Privacy and policy</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;