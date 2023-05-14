import Image from 'next/image';
import React from 'react';
import startR from "../../public/src/images/icon/startRound.png";
import dia from "../../public/src/images/icon/diamond.png";

const SubscribeNow = () => {
    return (
        <div className='py-5 subsBg'>
            <div className='py-5'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Subscribe Now</h3>
                    <p className='regularTextDark'>Select a subscription plan and save money.</p>
                </div>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4'>
                            <div className='subsBody ms-auto'>
                                <div className='p-5 text-center'>
                                    <Image src={startR} alt='Start Round' className='' />
                                    <h4 className='semibolTextLg py-5'>Basic</h4>
                                </div>
                                <div className='subsInfo'>
                                    <li>15 days of subscription</li>
                                    <li>Only Free course Access</li>
                                    <li>2 device Login Access</li>
                                </div>
                                <div className='pb-5 text-center'>
                                    <h4 className='semibolTextLg py-5'>Free</h4>
                                    <button className='subsBtn'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4'>
                            <div className='subsBody me-auto'>
                                <div className='p-5 text-center'>
                                    <Image src={dia} alt='Start Round' className='' />
                                    <h4 className='semibolTextLg py-5'>Platinum</h4>
                                </div>
                                <div className='subsInfo'>
                                    <li>30 days of subscription</li>
                                    <li>Only Premium course Access</li>
                                    <li>Unlimited device Login Access</li>
                                </div>
                                <div className='pb-5 text-center'>
                                    <h4 className='semibolTextLg py-5'>$200</h4>
                                    <button className='subsBtn'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNow;