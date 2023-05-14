import React from 'react';
import Image from 'next/image';
import blog1 from "../../public/src/images/demo/blogImage1.png";
import blog2 from "../../public/src/images/demo/blogImage2.png";
import blog3 from "../../public/src/images/demo/blogImage3.png";
import user from '../../public/src/images/icon/user.png';
import msg from '../../public/src/images/icon/message.png';

const Blog = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center'>
                    <h3 className='semiBoldTextXl'>Blog</h3>
                    <p className='regularTextDark'>Explore our blog section and get update latest news</p>
                </div>
                <div className='text-end me-5 mt-5 mb-3'>
                    <p className='viewBtn'>View All</p>
                </div>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3 mx-auto'>
                        <div className='blogBg'>
                            <div className=''>
                                <div>
                                    <Image src={blog1} alt='Course Image' className='' />
                                </div>
                                <div className='p-4'>
                                    <h5 className='semibolTextmd'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint ullamco . </h5>
                                    <p className='regularTextDark'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi...</p>

                                    <hr className='divider' />

                                    <div>
                                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                                            <li className=''><Image src={user} alt='watch' className='me-3' /> Devon Lane </li>
                                            <li className=''><Image src={msg} alt='watch' className='me-3' /> 2 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3 mx-auto'>
                        <div className='blogBg'>
                            <div className=''>
                                <div>
                                    <Image src={blog2} alt='Course Image' className='' />
                                </div>
                                <div className='p-4'>
                                    <h5 className='semibolTextmd'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint ullamco . </h5>
                                    <p className='regularTextDark'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi...</p>

                                    <hr className='divider' />

                                    <div>
                                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                                            <li className=''><Image src={user} alt='watch' className='me-3' /> Devon Lane </li>
                                            <li className=''><Image src={msg} alt='watch' className='me-3' /> 2 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3 mx-auto'>
                        <div className='blogBg'>
                            <div className=''>
                                <div>
                                    <Image src={blog3} alt='Course Image' className='' />
                                </div>
                                <div className='p-4'>
                                    <h5 className='semibolTextmd'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint ullamco . </h5>
                                    <p className='regularTextDark'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi...</p>

                                    <hr className='divider' />

                                    <div>
                                        <ul className='d-flex justify-content-between p-0 mt-2 align-items-center'>
                                            <li className=''><Image src={user} alt='watch' className='me-3' /> Devon Lane </li>
                                            <li className=''><Image src={msg} alt='watch' className='me-3' /> 2 </li>
                                        </ul>
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

export default Blog;