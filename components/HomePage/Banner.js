import React from 'react';
import manHand from "../../public/src/images/demo/manHandTyping.png";
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='container my-5'>
            <div className='row bannerBg'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 centerItem '>
                    <div className='itemCenter'>
                        <div className=''>
                            <h1 className='title'>Automate grant billing through technology</h1>
                            <p className='regularText bannerRegular pt-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block d-xl-block d-xxl-block p-0'>
                    <div className=''>
                        <div className=''>
                            <Image src={manHand} alt='Man hand typing Keyboard' className='bannerKeyboard' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;