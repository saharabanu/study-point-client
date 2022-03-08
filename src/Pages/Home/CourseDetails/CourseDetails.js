import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {courseId} = useParams();
    const [courseDeatils,setCourseDetails] = useState([]);
    const [singleCourse,setSingleCourse]= useState({});

    useEffect(()=>{
        fetch('/courses.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCourseDetails(data)})
    },[])

    useEffect(()=>{
        const foundSingleCourse = courseDeatils.find(course=> course.id !== courseId)
        setSingleCourse(foundSingleCourse);
        console.log(foundSingleCourse)

    },[courseDeatils])
    console.log(courseDeatils)
    return (
        <div className='container'>
            <div>
            <img  src={singleCourse?.course_img} alt="" className="img-fluid detail-image" />
            </div>
            
            <div className='py-5'>

 
                <div className="row ">
                    <div className="col-md-6">
                        <div className='text-start'>
                            <h2>{singleCourse?.desc_heading}</h2>
                            <h5>{singleCourse?.desc_intro}</h5>
                            <h3>{singleCourse?.course_heading}</h3>
                            <p>{singleCourse?.course_details_html}</p>
                            <p>{singleCourse?.course_details_css}</p>
                            <p>{singleCourse?.course_details_botstrap}</p>
                            <p>{singleCourse?.course_details_tailwind}</p>
                            <p>{singleCourse?.course_details_javascript}</p>
                            
                        </div>
                        
                        </div>
                    <div className="col-md-6">
                    {/* <iframe className='img-fluid h-100' src="https://docs.google.com/forms/d/e/1FAIpQLScw9YTFZhS9BSDVGZe4J9p8Du3sx_6X31cSmimTHEc4u2gs0A/viewform?embedded=true" width="640"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                    <iframe className='img-fluid h-100' src="https://docs.google.com/forms/d/e/1FAIpQLSccTEkbJ_4cby_FxuaGcRQV3tHAQ8r8Qn88Lq47uQa8GBqPNw/viewform?embedded=true" width="640" height="1249" frameborder="0" marginheight="0" marginwidth="0">Buy Now</iframe>
                        
                         {/* <iframe className='img-fluid' src="https://docs.google.com/forms/d/e/1FAIpQLScw9YTFZhS9BSDVGZe4J9p8Du3sx_6X31cSmimTHEc4u2gs0A/viewform?embedded=true" width="640" height="947" frameborder="0" marginheight="0" marginwidth="0">Buy Now</iframe> */}
                        </div>
                    </div>
            
            </div>
             {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScw9YTFZhS9BSDVGZe4J9p8Du3sx_6X31cSmimTHEc4u2gs0A/viewform?embedded=true" width="640" height="947" frameborder="0" marginheight="0" marginwidth="0"  target="_blank" rel="noopener noreferrer"> Buy Now</a> */}

            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScw9YTFZhS9BSDVGZe4J9p8Du3sx_6X31cSmimTHEc4u2gs0A/viewform?embedded=true">Buy Now</iframe> */}

           
        </div>
    );
};

export default CourseDetails;

// npm i emailjs