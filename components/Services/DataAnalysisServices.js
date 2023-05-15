import Image from 'next/image';
import React from 'react';
import writing from "../../public/src/images/services/DataAnalysisServices.png";
import wrIcon from "../../public/src/images/services/DataAnalysisServicesIcon.png";

const DataAnalysisServices = () => {
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
                            <h3 className='semibolTextLg mb-4'>Data Analysis Services</h3>
                            <li className='semiRegulerTextmd'>-Excel Data Analysis & Reports </li>
                            <li className='semiRegulerTextmd'>- Google Spreadsheets Data Analysis & Reports </li>
                            <li className='semiRegulerTextmd'>- Power BI Data Analysis & Reports </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalysisServices;