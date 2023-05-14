import React from 'react';
import Image from 'next/image';
import women from "../../../public/src/images/course/women.png";
import star from '../../../public/src/images/icon/star.png';
import starSlash from '../../../public/src/images/icon/starSlash.png';
import watch from '../../../public/src/images/icon/watch.png';
import calender from '../../../public/src/images/icon/calender.png';

const FeatureCourse = () => {
    return (
        <div className='mb-5'>
            <div className='container'>
                <div className='text-center pb-5'>
                    <h3 className='semiBoldTextXl'>Featured Course</h3>
                    <p className='regularTextDark'>Browse featured courses and become skillfull</p>
                </div>
                <div className='featureBody py-5'>
                    <div className='ms-auto me-5 fCourse'>
                        <div className='p-4'>
                            <div className='courseTitle'>
                                <Image src={women} alt='Women' className='' />
                                <div className=''>
                                    <h5 className='semibolTextmd'>Ui/Ux design Basic to Advance</h5>
                                    <p className='regularTextDark'>Esther Howard</p>
                                </div>
                            </div>
                            <div>
                                <p className='regularTextDark'>For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.</p>
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
    );
};

export default FeatureCourse;