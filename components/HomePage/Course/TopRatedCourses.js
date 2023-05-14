import React from 'react';
import Image from 'next/image';
import course from "../../../public/src/images/demo/course.png";
import women from "../../../public/src/images/course/women.png";
import star from '../../../public/src/images/icon/star.png';
import starSlash from '../../../public/src/images/icon/starSlash.png';
import watch from '../../../public/src/images/icon/watch.png';
import calender from '../../../public/src/images/icon/calender.png';

const TopRatedCourses = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Top Rated Courses</h3>
                    <p className='regularTextDark'>Browse featured courses and become skillfull</p>
                </div>
                <div className='text-end me-5 mt-5 mb-3'>
                    <p className='viewBtn'>View All</p>
                </div>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='courseBg'>
                            <div className=''>
                                <div>
                                    <Image src={course} alt='Course Image' className='' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='courseTitle'>
                                    <Image src={women} alt='Women' className='' />
                                    <div className=''>
                                        <h5 className='semibolTextmd'>Ui/Ux design Basic to Advance</h5>
                                        <p className='regularTextDark'>Esther Howard</p>
                                    </div>
                                </div>
                                <div>
                                    <span className=''>
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={starSlash} alt='Star' className='ms-1 me-4' />
                                    </span>
                                    <span className='regulerTextDark'>4.5</span>
                                </div>
                                <div>
                                    <ul className='d-flex justify-content-start p-0 mt-2 align-items-center'>
                                        <li className='me-3'><Image src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                        <li className='me-3'> | </li>
                                        <li className='me-3'><Image src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                        <li className='cartBtn'>$240</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='courseBg'>
                            <div className=''>
                                <div>
                                    <Image src={course} alt='Course Image' className='' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='courseTitle'>
                                    <Image src={women} alt='Women' className='' />
                                    <div className=''>
                                        <h5 className='semibolTextmd'>Ui/Ux design Basic to Advance</h5>
                                        <p className='regularTextDark'>Esther Howard</p>
                                    </div>
                                </div>
                                <div>
                                    <span className=''>
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={starSlash} alt='Star' className='ms-1 me-4' />
                                    </span>
                                    <span className='regulerTextDark'>4.5</span>
                                </div>
                                <div>
                                    <ul className='d-flex justify-content-start p-0 mt-2 align-items-center'>
                                        <li className='me-3'><Image src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                        <li className='me-3'> | </li>
                                        <li className='me-3'><Image src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                        <li className='cartBtn'>$240</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3'>
                        <div className='courseBg'>
                            <div className=''>
                                <div>
                                    <Image src={course} alt='Course Image' className='' />
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='courseTitle'>
                                    <Image src={women} alt='Women' className='' />
                                    <div className=''>
                                        <h5 className='semibolTextmd'>Ui/Ux design Basic to Advance</h5>
                                        <p className='regularTextDark'>Esther Howard</p>
                                    </div>
                                </div>
                                <div>
                                    <span className=''>
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={star} alt='Star' className='mx-1' />
                                        <Image src={starSlash} alt='Star' className='ms-1 me-4' />
                                    </span>
                                    <span className='regulerTextDark'>4.5</span>
                                </div>
                                <div>
                                    <ul className='d-flex justify-content-start p-0 mt-2 align-items-center'>
                                        <li className='me-3'><Image src={watch} alt='watch' className='' /> 4:50 Hours </li>
                                        <li className='me-3'> | </li>
                                        <li className='me-3'><Image src={calender} alt='watch' className='' /> 19 July 2023 </li>
                                        <li className='cartBtn'>$240</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatedCourses;