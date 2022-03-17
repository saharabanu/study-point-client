import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('/courses.json')
        .then(res=>res.json())
        .then(data=>{
            setCourses(data)
            console.log(data)
        })
    },[])

    return (
        <div className="course-contianer container-fluid py-5 bg-light" id="courses">
            <h2 className="fs-1 fw-bolder pb-4 title">Our Courses</h2>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 container mx-auto">
                {
                    courses?.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;



