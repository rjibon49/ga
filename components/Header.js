import React from 'react';
import us from '../public/src/images/country/US.png';
import search from '../public/src/images/icon/searchBar.png';
import notify from '../public/src/images/icon/notification.png';
import cart from '../public/src/images/icon/shoppingCart.png';
import logo from '../public/src/images/logo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className='headingBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className='me-auto'>
                                <span className='pe-3'>
                                    <select name="" id="" className='currency'>
                                        <option value="usd">USD ($)</option>
                                        <option value="euro">Euro (€)</option>
                                    </select>
                                </span>
                                <span className='pe-5'>
                                    <select name="" id="" className='language pe-3'>
                                        <option value="english"><Image src={us} alt='usa'className='' />English</option>
                                        <option value="spanish">Spanish</option>
                                    </select>
                                </span>
                                <span className='search'>
                                    <input type="text" placeholder='' className='searchInput' />
                                    <Image src={search} alt='usa'className='searchIcon' />
                                </span>
                            </div>
                        </div>
                        <div className='col-xxl-6 col-xl-6 col-lg-6'>
                            <div className=''>
                                <ul className='d-flex justify-content-end align-items-center'>
                                    {/* <li className='topBarIcon'><FontAwesomeIcon icon={faBell} className='' /></li>
                                    <li className='topBarIcon'><FontAwesomeIcon icon={faBell} className='' /></li> */}
                                    <li className='topBarIcon'><Image src={cart} alt='Cart Icon' className='' /></li>
                                    <li className='topBarIcon'><Image src={notify} alt='Cart Icon' className='' /></li>
                                    <Link href="/login" className='topBarInfo'><span className=''>Login</span></Link>
                                    <Link href="/register" className='topBarInfo'><span className=''>Register</span></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <Link href="/" className='navbar-brand'><Image src={logo} alt='Logo' className='' /> </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="loginLink" href="#">Start Learning</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="loginLink" href="#">Client Portal</Link>
                                </li>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 menuBarItem">
                                    <li class="navItem">
                                    <a class="navLink active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="navItem">
                                    <a class="navLink" href="#">Link</a>
                                    </li>
                                    <li class="navItem">
                                    <a class="navLink disabled">Disabled</a>
                                    </li>
                                </ul>
                                <li className="nav-item">
                                    <Link className="loginLinkBottom" href="#">Start Learning</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="loginLinkBottom" href="#">Client Portal</Link>
                                </li>
                            </div>
                        </div>
                </nav>
                    <nav className='navbar navbar-expand-lg menuBarItem2'>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="navItem">
                                <a class="navLink"  href="#">Service</a>
                            </li>
                            <li class="navItem">
                                <a class="navLink" href="/instructor">Instructors</a>
                            </li>
                            <li class="navItem">
                                <a class="navLink ">Courses</a>
                            </li>
                            <li class="navItem">
                                <a class="navLink ">Career</a>
                            </li>
                            <li class="navItem">
                                <a class="navLink ">Volunteer</a>
                            </li>
                            <li class="navItem">
                                <a class="navLink ">Donate</a>
                            </li>
                        </ul>
                    </nav>
            </div>
        </>
    );
};

export default Header;