import Image from 'next/image';
import React from 'react';
import invest from "../../public/src/images/demo/financialInvestment.png";
import clone1 from "../../public/src/images/demo/clone1.png";
import clone2 from "../../public/src/images/demo/clone2.png";


const Mission = () => {
    return (
        <div className='py-5'>
            <div className='container my-5 missionBg'>
                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 missionCol'>
                        <div className='mx-auto'>
                            <div className='missionDisplay mx-auto'>
                                <h1 className='title text-center pb-5 mb-5'>Mission</h1>
                                <Image src={clone1} alt='Man hand typing Keyboard' className='clone1' />
                                <p className='regularTextLg missionReguler'>Grant Accounting’ mission is to innovate and streamline the grant billing process for non-profit organizations.</p>
                                <Image src={clone2} alt='Man hand typing Keyboard' className=' clone2' />
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 p-0'>
                        <div className=''>
                            <div className=''>
                                {/* <Image src={invest} alt='Man hand typing Keyboard' className='bannerKeyboard' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;