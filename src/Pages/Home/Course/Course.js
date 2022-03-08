import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const description=[
        {
            "desc_heading":"Why have we done this web design course?",
          "desc_intro":"As salamu alaikum warahmatullah. Study Point has brought basic to advanced wed design course for you who wants to  learn wed design. We have kept [HTML, CSS, JavaScript, Bootstrap, Tailwind css] in this course.We will learn you Zero to advanced web design in total 20 projects.We also kept for you 20 assignment and private support group with life time access",
            "course_heading":"Which things will you learn in this course: ",
            "course_details_html":"Introduction HTML, HTML Tags, HTML Form Design, HTML Table, HTML Media query",
            "course_details_css":"Introduction css, CSS basic, Advance CSS, Css3 animation, Psd to html,Make a simple project, Css responsive",

           " course_details_botstrap":"Introduction bootstrapL, Grid system basic, psd to html with bootstrap, personal portfolio, Make a ecommerce website , Responsive",

            "course_details_tailwind":"Introduction tailwind, Grid system , Make a project ",
            "course_details_javascript":"Introduction JavaScript,Fundamental concepts array and condition ,  Concepts recap and loop, Core concepts function and object, Apply JavaScript concepts, Javascript simple coding problem solving, How to javascript works and dom , Event addEventListener event bubble, Make a project, String and array useful methods",
            

        }
]

 
 




const Course = (props) => {
    const { id,course_title, course_cost, course_img,course_description,course_offer } = props.course;

    return (
        <div className="col">

            <div className="course-card">
                <div className="img"></div>
                <div className="content">
                    <img src={course_img} alt="" className="img-fluid" />
                    <h3>{course_title}</h3>
                    {/* <p>{course_description}</p> */}
                    <div className="d-flex justify-content-between">
                        <p className="text-success">ট {course_cost}</p>
                        
                        <p className="text-danger course-duration">Offer: {course_offer}</p>
                    </div>
                    <p className="text-success">{course_description}</p>

                    <Link to={`/courses/${id}`}> <button className=" ">Enroll Now</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Course;

{/* <i className="far fa-clock"></i> */}
