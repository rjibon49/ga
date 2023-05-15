import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/services/grantWriting.png";
import wrIcon from "../../public/src/images/services/grantWritingIcon.png";

const GrantWritingService = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image src={writing} alt='grant Writing' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div>
                            <Image src={wrIcon} alt='grant Writing icon' className='serviceImage'/>
                        </div>
                        <div>
                            <h3 className='semibolTextLg mb-4'>Grant Writing Services:</h3>
                            <li className='semiRegulerTextmd'>-Grant Research</li>
                            <li className='semiRegulerTextmd'>-Grant Proposals</li>
                            <li className='semiRegulerTextmd'>-Assessment and Planning</li>
                            <li className='semiRegulerTextmd'>-Funding Prospect Research</li>
                            <li className='semiRegulerTextmd'>-Grant Writing (we do everything but the grant writing, we assist in reviewing grant application)</li>
                            <li className='semiRegulerTextmd'>-Fundraising/ Annual Appeal Letter</li>
                            <li className='semiRegulerTextmd'>-Sponsorship Request Letter</li>
                            <li className='semiRegulerTextmd'>-Donation Request Letter</li>
                            <li className='semiRegulerTextmd'>-Grant Proposal Evaluation, Training</li>
                            <li className='semiRegulerTextmd'>-Grant Billing and Reporting Compliance</li>
                            <li className='semiRegulerTextmd'>-Close out report and lead audit/monitoring</li>
                            <li className='semiRegulerTextmd'>-Streamline grant billing process</li>
                            <li className='semiRegulerTextmd'>-Build database for grant (using SQL, Power BI, Salesforce, AI & MI)</li>
                            <li className='semiRegulerTextmd'>-Grant scheduling and calendar organization</li>
                            <li className='semiRegulerTextmd'>-Train new Staffs with grant building and any accounting system</li>
                            <li className='semiRegulerTextmd'>-Budget to Actual</li>
                            <li className='semiRegulerTextmd'>-Salary (labor distribution) allocation – automation with client payroll and accounting system</li>
                            <li className='semiRegulerTextmd'>-Budget modification</li>
                            <li className='semiRegulerTextmd'>-Grant application</li>
                            <li className='semiRegulerTextmd'>-External communication</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrantWritingService;