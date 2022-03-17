import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {id} = useParams();
    // const [courseDeatils,setCourseDetails] = useState([]);
    const [singleCourse,setSingleCourse]= useState([]);

    useEffect(()=>{
        fetch('/courses.json')
        .then(res=>res.json())
        .then((data)=>{
            const foundCourse= data.filter(detail=>detail.id === id)
            console.log(foundCourse)
            setSingleCourse(foundCourse)})
    },[id]);

    const {desc_heading,desc_intro,course_heading,course_details_html,course_details_css,course_details_botstrap,course_details_tailwind,course_details_javascript,course_intro,course_react,course_backend,course_others}= singleCourse[0] || {};


    
   
    return (
        <div className='container'>
            <div>
            <img  src={singleCourse?.course_thumbnail} alt="" className="img-fluid detail-image w-50 h-25" />
            </div>
            
            <div className='py-5 '>

 
                <div className="row ">
                    <div className="col-md-6">
                        <div className='text-start'>
                            
                            <h2>{desc_heading}</h2>
                            <br />
                            <h5 className='lh-lg'>{desc_intro}</h5>
                            <br />
                            <h3>{course_heading}</h3>
                            <br />
                            <p className='bg-danger opacity-50 text-white fs-5'>{course_details_html}</p>
                            
                             <div className=' fs-5'>
                             <p>{course_details_css}</p>
                             
                            <p>{course_details_botstrap}</p>
                            
                            <p>{course_details_tailwind}</p>
                            
                            <p>{course_details_javascript}</p>
                            
                            <p>{course_intro}</p>
                            <p>{course_react}</p>
                            
                            <p>{course_backend}</p>
                            
                            <p>{course_others}</p>
                             </div>
                            
                             
                        </div>
                        
                        </div>
                    <div className="col-md-6">
                    
                    <iframe className='img-fluid h-100' src="https://docs.google.com/forms/d/e/1FAIpQLSccTEkbJ_4cby_FxuaGcRQV3tHAQ8r8Qn88Lq47uQa8GBqPNw/viewform?embedded=true" width="640" height="1249" frameborder="0" marginheight="0" marginwidth="0" title="google form ">Buy Now</iframe>
                        
                        
                        </div>
                    </div>
            
            </div>
            

           
        </div>
    );
};

export default CourseDetails;

