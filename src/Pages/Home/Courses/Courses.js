import React from 'react';
import webDev from '../../../images/courses-img/programming-for-kid.jpg';
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

        },
        {
            "id": 3,
            "course_title": "Responsive Web Development",
            "course_description": "Professional responsive web development course",
            "course_cost": 1500,
            "course_img": `${webDev}`

        },
        {
            "id": 4,
            "course_title": "Responsive Web Development",
            "course_description": "Professional responsive web development course",
            "course_cost": 1500,
            "course_img": `${webDev}`

        },
        {
            "id": 5,
            "course_title": "Responsive Web Development",
            "course_description": "Professional responsive web development course",
            "course_cost": 1500,
            "course_img": `${webDev}`

        }
    ]

    return (
        <div className="course-contianer container-fluid py-5 bg-light" id="courses">
            <h2 className="fs-1 fw-bolder pb-4 title">Our Courses</h2>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 container mx-auto">
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