import Image from 'next/image';
import React from 'react';
import business from "../..//public/src/images/demo/businessMan.png";

const AboutUs = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className=''>
                            <Image src={business} alt='Business Man' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ps-xxl-5 ps-xl-5 centerItem'>
                        <div className='ps-xxl-5'>
                            <div className='ps-xxl-5 ps-lg-5 ps-md-5 mt-5'>
                                <h3 className='semiBoldTextXl mb-4 '>About Us</h3>
                                <p className='regularTextDark mb-4'>Grant Accounting is a 501c3 non-profit is founded in March 2023 in to services for other non-profit organizations.</p>
                                <button className='aboutBtn'>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;