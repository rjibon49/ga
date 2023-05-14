import Image from 'next/image';
import React from 'react';
import log from "../../../public/src/images/demo/registerImage.png";
import Link from 'next/link';

const Register = () => {
    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-8 col-xl-8 col-lg-7'>
                        <div className='loginImage'>
                            <Image src={log} alt='Login Page Image' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-5'>
                        <div>
                            <h3 className='semiBoldTextXl'>Sign Up</h3>
                            <h5 className='semibolTextmd'>Account Type</h5>
                        </div>
                        <div className='mt-5 gaitem'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Student</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Instructor</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"  />
                                <label class="form-check-label" for="inlineRadio3">organization</label>
                            </div>
                        </div>
                        <form className='row g-3 mt-5'>
                            <div class="mb-3 col-12">
                                <label for="exampleInputEmail1" className="semibolTextmd mb-3">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email'/>
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" className="semibolTextmd mb-3">Country</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>USA(+1)</option>
                                    <option>USA(+2)</option>
                                    <option>USA(+3)</option>
                                </select>
                            </div>
                            <div class="col-md-8">
                                <label for="inputZip" className="semibolTextmd mb-3">Phone (Optional)</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="mb-3 col-12">
                                <label for="exampleInputEmail1" className="semibolTextmd mb-3">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder='Type full name'/>
                            </div>
                            <div class="col-12 mb-3">
                                <label for="exampleInputPassword1" className="semibolTextmd mb-3">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
                            </div>
                            <div class="col-12 mb-3">
                                <label for="exampleInputPassword2" className="semibolTextmd mb-3">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword2" placeholder='Password'/>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="inputState" className="semibolTextmd mb-3">Time Zone</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>American/New Your</option>
                                    <option>Canada</option>
                                    <option>Asia</option>
                                </select>
                            </div>
                            <div class="col-12 mb-3">
                                <div class="form-check regItem">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label semibolTextmd ms-2" for="gridCheck">
                                        I agree with terms & conditions
                                    </label>
                                </div>
                            </div>
                            <div className='text-center mt-5'>
                                <button type="submit" className="loginBtn">Sign Up</button>
                            </div>
                        </form>
                        <div className='text-center mt-5'>
                            <p className='regularTextLgDark my-5'>Already have an account ? <Link href="/login" className=''>Log in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;