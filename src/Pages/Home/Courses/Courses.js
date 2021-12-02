import React from 'react';
import webDev from '../../../images/courses-img/p_responsive_web_dev.png';
import Course from '../Course/Course';

const Courses = () => {

    const courses = [
        {
            "id": 0,
            "course_title": "Responsive Web Development",
            "course_description": "Professional responsive web development course",
            "course_cost": 1500,
            "course_img": `${webDev}`

        },
        {
            "id": 1,
            "course_title": "Responsive Web Development",
            "course_description": "Professional responsive web development course",
            "course_cost": 1500,
            "course_img": `${webDev}`

        },
        {
            "id": 2,
            "course_title": "Responsive Web Development",
            "course_description": "Professional responsive web development course",
            "course_cost": 1500,
            "course_img": `${webDev}`

        }
    ]

    return (
        <div className="course-contianer container-fluid py-3">
            <h2 className="fs-1 fw-bolder p-3 title">Our Courses</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;