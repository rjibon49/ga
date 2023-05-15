import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/services/FinancialManagementServices.png";
import wrIcon from "../../public/src/images/services/FinancialManagementServicesIcon.png";

const FinancialManagementServices = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image src={writing} alt='Strategic Planning' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div>
                            <Image src={wrIcon} alt='Strategic Planning icon' className='serviceImage'/>
                        </div>
                        <div>
                            <h3 className='semibolTextLg mb-4'>Financial Management Services</h3>
                            <li className='semiRegulerTextmd'>-Business Process Analysis </li>
                            <li className='semiRegulerTextmd'>-Forecasting and Budgeting </li>
                            <li className='semiRegulerTextmd'>-Funds Management</li>
                            <li className='semiRegulerTextmd'>-Financial Strategic Planning</li>
                            <li className='semiRegulerTextmd'>-Process improvement using Lean/Six Sigma methodology</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialManagementServices;