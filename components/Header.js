import React from 'react';
import us from '../public/src/images/country/US.png';
import search from '../public/src/images/icon/searchBar.png';
import notify from '../public/src/images/icon/notification.png';
import cart from '../public/src/images/icon/shoppingCart.png';
import logo from '../public/src/images/logo.png';
import Image from 'next/image';
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
                                    <Link href="/login" className='topBarInfo'>Login</Link>
                                    <Link href="/register" className='topBarInfo'>Register</Link>
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
                                    <li class="navItem dropdown">
                                        <Link class="navLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Service
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" href="/services/grant_writing_service">Grant Writing Services</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/financial_and_managerial_accounting_service">Financial and Managerial Accounting</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/strategic_planning_services">Strategic Planning Services</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/strategic_business_unit">Strategic Business Unit</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/business_valuation_services">Business Valuation</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/financial_consulting">Financial Consulting</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/financial_management_services">Financial Management</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/data_analysis_services">Data Analysis Services</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link class="dropdown-item" href="/services/implementation_of_new_accounting_system">Implementation of new accounting</Link></li>
                                        </ul>
                                    </li>
                                    <li class="navItem">
                                        <Link class="navLink" href="/instructor">Instructors</Link>
                                    </li>
                                    <li class="navItem">
                                        <Link class="navLink " href="#">Courses</Link>
                                    </li>
                                    <li class="navItem">
                                        <Link class="navLink " href="#">Career</Link>
                                    </li>
                                    <li class="navItem">
                                        <Link class="navLink " href="#">Volunteer</Link>
                                    </li>
                                    <li class="navItem">
                                        <Link class="navLink " href="#">Donate</Link>
                                    </li>
                                </ul>
                                <li className="nav-item loginBtnbottom">
                                    <Link className="loginLinkBottom" href="#">Start Learning</Link>
                                </li>
                                <li className="nav-item loginBtnbottom">
                                    <Link className="loginLinkBottom" href="#">Client Portal</Link>
                                </li>
                            </div>
                        </div>
                </nav>
                    <nav className='navbar navbar-expand-lg menuBarItem2'>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <Link class="navLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="/services/grant_writing_service">Grant Writing Services</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/financial_and_managerial_accounting_service">Financial and Managerial Accounting</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/strategic_planning_services">Strategic Planning Services</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/strategic_business_unit">Strategic Business Unitt</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/business_valuation_services">Business Valuation</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/financial_consulting">Financial Consulting</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/financial_management_services">Financial Management</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/data_analysis_services">Data Analysis</Link></li>
                                    <hr className="dropdown-divider" />
                                    <li><Link className="dropdown-item" href="/services/implementation_of_new_accounting_system">Implementation of new accounting</Link></li>
                                </ul>
                            </li>
                            <li class="navItem">
                                <Link class="navLink" href="/instructor">Instructors</Link>
                            </li>
                            <li class="navItem">
                                <Link class="navLink " href="#">Courses</Link>
                            </li>
                            <li class="navItem">
                                <Link class="navLink " href="#">Career</Link>
                            </li>
                            <li class="navItem">
                                <Link class="navLink " href="#">Volunteer</Link>
                            </li>
                            <li class="navItem">
                                <Link class="navLink " href="#">Donate</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </>
    );
};

export default Header;