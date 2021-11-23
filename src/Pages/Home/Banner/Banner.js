import React from 'react';
import './Banner.css';

const Banner = () => {

    return (
        <div className="row d-flex justify-content-center align-items-center border border-1 p-3 banner m-0">
            <div className="col-12 col-lg-8 col-md-10 col-sm-12  p-3 pt-5 mt-3">
                <h3 className="title-bn">দেশের সর্ববৃহৎ অনলাইন প্রফেশনাল কোর্স প্লাটফর্ম</h3>
                <h1 className="title mt-5">Study <span className="title-point">Point</span></h1>
                <h5 className="title-sub">Professional | Course | Make Creative</h5>

            </div>
            <div className="col-12 col-lg-4 col-md-2 col-sm-12">

            </div>
        </div>

    );
};

export default Banner;