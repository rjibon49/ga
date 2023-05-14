import React from 'react';
import Image from 'next/image';
import startR from "../../../public/src/images/icon/startRound.png";
import star from '../../../public/src/images/icon/star.png';
import starB from '../../../public/src/images/icon/starBlank.png';
import persion1 from "../../../public/src/images/course/persion1.png";
import persion2 from "../../../public/src/images/course/persion2.png";
import persion3 from "../../../public/src/images/course/persion3.png";
import persion4 from "../../../public/src/images/course/persion4.png";

const OurInstructor = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div>
                    <h3 className='semiBoldTextXl'>Our Instructor</h3>
                    <p className='regulerTextDark'>Learn From our experienced instructors</p>
                </div>
                <div>
                    <div className='row pt-5'>
                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3'>
                            <div className='profileBody text-center mx-auto'>
                                <div className='p-5'>
                                    <Image src={persion1} alt='Start Round' className='' />
                                    <div className='py-3'>
                                        <h5 className='semibolTextmd'>Robert Fox</h5>
                                        <p className='regulerTextDark'>ui/ux Instructor</p>
                                    </div>
                                    <div className='mb-3'>
                                        <span className=''>
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={starB} alt='Star' className='mx-1' />
                                        </span>
                                    </div>
                                    <div className='text-center'>
                                        <button className='profileBtn'>View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3'>
                            <div className='profileBody text-center mx-auto'>
                                <div className='p-5'>
                                    <Image src={persion2} alt='Start Round' className='' />
                                    <div className='py-3'>
                                        <h5 className='semibolTextmd'>Kristin Watson</h5>
                                        <p className='regulerTextDark'>ui/ux Instructor</p>
                                    </div>
                                    <div className='mb-3'>
                                        <span className=''>
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={starB} alt='Star' className='mx-1' />
                                        </span>
                                    </div>
                                    <div className='text-center'>
                                        <button className='profileBtn'>View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3'>
                            <div className='profileBody text-center mx-auto'>
                                <div className='p-5'>
                                    <Image src={persion3} alt='Start Round' className='' />
                                    <div className='py-3'>
                                        <h5 className='semibolTextmd'>Dianne Russell</h5>
                                        <p className='regulerTextDark'>ui/ux Instructor</p>
                                    </div>
                                    <div className='mb-3'>
                                        <span className=''>
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={starB} alt='Star' className='mx-1' />
                                        </span>
                                    </div>
                                    <div className='text-center'>
                                        <button className='profileBtn'>View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3'>
                            <div className='profileBody text-center mx-auto'>
                                <div className='p-5'>
                                    <Image src={persion4} alt='Start Round' className='' />
                                    <div className='py-3'>
                                        <h5 className='semibolTextmd'>Jane Cooper</h5>
                                        <p className='regulerTextDark'>ui/ux Instructor</p>
                                    </div>
                                    <div className='mb-3'>
                                        <span className=''>
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={star} alt='Star' className='mx-1' />
                                            <Image src={starB} alt='Star' className='mx-1' />
                                        </span>
                                    </div>
                                    <div className='text-center'>
                                        <button className='profileBtn'>View Profile</button>
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

export default OurInstructor;