import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/services/StrategicBusinessUnit.png";
import wrIcon from "../../public/src/images/services/StrategicBusinessUnitIcon.png";

const StrategicBusinessUnit = () => {
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
                            <h3 className='semibolTextLg mb-4'>Strategic Business Unit (SBU) Planning and Business Management</h3>
                            <li className='semiRegulerTextmd'>-Business planning</li>
                            <li className='semiRegulerTextmd'>-SOPs development</li>
                            <li className='semiRegulerTextmd'>-Development of KPIs</li>
                            <li className='semiRegulerTextmd'>-HR management</li>
                            <li className='semiRegulerTextmd'>-Staff Management and Training</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicBusinessUnit;