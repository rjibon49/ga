import React from 'react';
import Image from 'next/image';
import persion5 from "../../public/src/images/course/persion5.png";
import persion6 from "../../public/src/images/course/persion6.png";
import persion7 from "../../public/src/images/course/persion7.png";
import star from '../../public/src/images/icon/star.png';
import starB from '../../public/src/images/icon/starBlank.png';

const Testimonials = () => {
    return (
        <div className='py-5 subsBg'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Testimonials</h3>
                    <p className='regularTextDark'>What our customer say about us</p>
                </div>
                <div className='text-end me-5 mt-5 mb-3'>
                    <p className='viewBtn'>View All</p>
                </div>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='testimonialBody'>
                            <div className='mx-auto p-5'>
                                <div className=''>
                                    <div className='testifonialTitle'>
                                        <Image src={persion5} alt='Women' className='' />
                                        <div className=''>
                                            <h5 className='semibolTextmd'>Marvin McKinney</h5>
                                            <p className='regularTextDark'>Student</p>
                                            <div>
                                                <span className=''>
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='regulerTextDark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='testimonialBody'>
                            <div className='mx-auto p-5'>
                                <div className=''>
                                    <div className='testifonialTitle'>
                                        <Image src={persion6} alt='Women' className='' />
                                        <div className=''>
                                            <h5 className='semibolTextmd'>Marvin McKinney</h5>
                                            <p className='regularTextDark'>Student</p>
                                            <div>
                                                <span className=''>
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={starB} alt='Star' className='mx-1' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='regulerTextDark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='testimonialBody'>
                            <div className='mx-auto p-5'>
                                <div className=''>
                                    <div className='testifonialTitle'>
                                        <Image src={persion7} alt='Women' className='' />
                                        <div className=''>
                                            <h5 className='semibolTextmd'>Marvin McKinney</h5>
                                            <p className='regularTextDark'>Student</p>
                                            <div>
                                                <span className=''>
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={star} alt='Star' className='mx-1' />
                                                    <Image src={starB} alt='Star' className='mx-1' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='regulerTextDark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;