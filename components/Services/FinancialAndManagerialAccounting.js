import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/services/finalcialAccounting.png";
import wrIcon from "../../public/src/images/services/finalcialAccountingIcon.png";

const FinancialAndManagerialAccounting = () => {
    return (
        <div className='py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div className=''>
                            <Image src={writing} alt='Financial and Managerial Accounting Services' className='' />
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                        <div>
                            <Image src={wrIcon} alt='Financial and Managerial Accounting Services icon' className='serviceImage'/>
                        </div>
                        <div>
                            <h3 className='semibolTextLg mb-4'>Financial and Managerial Accounting Services</h3>
                            <li className='semiRegulerTextmd'>-Accounting System Implementation</li>
                            <li className='semiRegulerTextmd'>-Bookkeeping and Accounting</li>
                            <li className='semiRegulerTextmd'>-Preparation of General</li>
                            <li className='semiRegulerTextmd'>-Purpose Financial Statements</li>
                            <li className='semiRegulerTextmd'>-Periodic Reporting</li>
                            <li className='semiRegulerTextmd'>-Costing</li>
                            <li className='semiRegulerTextmd'>-Capital Budgeting</li>
                            <li className='semiRegulerTextmd'>-Performance Measurement</li>
                            <li className='semiRegulerTextmd'>-Performance Management</li>
                            <li className='semiRegulerTextmd'>-Standard Setting and Variance Analysis</li>
                            <li className='semiRegulerTextmd'>-General Ledger Reconciliations</li>
                            <li className='semiRegulerTextmd'>-Preparation of Specific Purpose Financial Statements</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialAndManagerialAccounting;