import React from 'react';
import './Course.css';

const Course = (props) => {

    const { course_title, course_cost, course_img } = props.course;

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
                        <p className="text-danger course-duration"><i className="far fa-clock"></i> 25hr</p>
                    </div>

                    <button className=" ">Enroll Now</button>
                </div>

            </div>
        </div>
    );
};

export default Course;