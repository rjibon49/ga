import Image from 'next/image';
import React from 'react';
import vol from "../../../public/src/images/demo/volunteer.png";

const VolunteerInfo = () => {
    return (
        <div className='container-fluid py-5'>
            <Image src={vol} alt='Vounteer Image' className='vImage' />
        </div>
    );
};

export default VolunteerInfo;