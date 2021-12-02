import React from 'react';

const Course = (props) => {

    const { course_title, course_description, course_cost, course_img } = props.course;

    return (
        <div class="col">
            <div class="card h-100">
                <img src={course_img} class="card-img-top img-fluid p-2" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{course_title}</h5>
                    <p class="card-text">{course_description}</p>
                    <h4>cost: {course_cost}</h4>
                    <button className="btn btn-warning w-100">Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;