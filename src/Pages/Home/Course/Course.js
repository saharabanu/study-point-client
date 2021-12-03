import React from 'react';
import './Course.css';

const Course = (props) => {

    const { course_title, course_description, course_cost, course_img } = props.course;

    return (
        <div class="col">
            {/* <div class="card h-90">
                <img src={course_img} class="card-img-top img-fluid p-2" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{course_title}</h5>
                    <p class="card-text">{course_description}</p>
                    <h4>Cost: {course_cost}</h4>
                    <button className="btn btn-warning w-100">Enroll Now</button>
                </div>
            </div> */}
            <div class="course-card">
                <div class="img"></div>
                <div class="content">
                    <img src={course_img} alt="" />
                    <h3>{course_title}</h3>
                    <p>{course_description}</p>
                    <p>Cost: {course_cost}</p>
                    <button className=" ">Enroll Now</button>
                </div>

            </div>
        </div>
    );
};

export default Course;