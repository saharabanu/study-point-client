import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container-fluid py-4">
            <h2 className="fs-1 fw-bolder py-3 about-header">About Us</h2>

            <div className="row p-1  ">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-start text-secondary p-4">
                    <h2 className="fw-bolder about-study-point-title">Study Point</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ipsam placeat molestias cum voluptas, repudiandae, incidunt perferendis quis, ut sapiente culpa veniam facere suscipit dicta adipisci excepturi totam maxime nemo provident similique voluptate deleniti maiores natus dolores! Earum in, tempora repudiandae eum neque illo consequatur dolore, voluptatem magni reiciendis, consequuntur a aliquam. Quia, quo. Quidem neque magni at corporis error, laudantium necessitatibus totam dignissimos doloribus sed nulla pariatur quibusdam itaque ad et quasi natus mollitia odit magnam provident autem perferendis?
                    </p>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-2">
                    <iframe width="560" height="350" src="https://www.youtube.com/embed/Db7xzarI3B8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default About;