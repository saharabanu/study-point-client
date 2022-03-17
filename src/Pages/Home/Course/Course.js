import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';


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

                    <Link to={`/course/${id}`}> <button className=" ">Enroll Now</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Course;


