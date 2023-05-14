import React from 'react';
import acc from "../../public/src/images/icon/accountLight.png";
import st from "../../public/src/images/icon/strategyLight.png";
import pen from "../../public/src/images/icon/penLight.png";
import Image from 'next/image';

const Service = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='text-center mb-5'>
                    <h3 className='semiBoldTextXl'>Service</h3>
                </div>
                {/* <div className='text-end me-5 my-5'>
                    <p className='viewBtn'>View All</p>
                </div> */}

                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4'>
                        <div className='serviceBody serviceBodyItem'>
                            <Image src={pen} alt='Acount' className='' />
                            <h4 className='regularTextLgDark pt-5'>Grant Writing Services</h4>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4'>
                        <div className='serviceBody serviceBodyItem'>
                            <Image src={acc} alt='Acount' className='' />
                            <h4 className='regularTextLgDark pt-5'>Financial and Managerial Accounting Services</h4>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4'>
                        <div className='serviceBody serviceBodyItem'>
                            <Image src={st} alt='Acount' className='' />
                            <h4 className='regularTextLgDark pt-5'>Strategic Planning Services</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;