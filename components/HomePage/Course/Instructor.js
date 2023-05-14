import Image from 'next/image';
import React from 'react';
import vol from "../../../public/src/images/demo/volunteer.png";

const Instructor = () => {
    return (
        <div className='instructorBg centerItem'>
            <div className='container'>
                <div className=''>
                    <div>
                        <h2 className='boldTextDark'>Join Us as an</h2>
                        <h2 className='extraBoldColor'>Instructor</h2>
                        <p className='regularTextLgDark'>and start earning</p>
                    </div>
                    <div className='instructorWidth'>
                        <p className='regulerTextDark'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div>
                        <button className='instructorBtn mt-5'>Register as Instructor</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;