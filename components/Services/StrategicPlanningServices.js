import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/services/StrategicPlanning.png";
import wrIcon from "../../public/src/images/services/StrategicPlanningIcon.png";

const StrategicPlanningServices = () => {
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
                            <h3 className='semibolTextLg mb-4'>Strategic Planning Services</h3>
                            <li className='semiRegulerTextmd'>-Development of Vision and Mission</li>
                            <li className='semiRegulerTextmd'>-Environmental Scanning</li>
                            <li className='semiRegulerTextmd'>-Goal Setting Strategy Formulation </li>
                            <li className='semiRegulerTextmd'>-Strategy Implementation </li>
                            <li className='semiRegulerTextmd'>-Development of Strategic   Management Plans </li>
                            <li className='semiRegulerTextmd'>-KPIs Development</li>
                            <li className='semiRegulerTextmd'>-Market and Growth Analyses</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicPlanningServices;