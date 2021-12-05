import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../../../images/contact.png';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

    };


    return (
        <div className="container-fluid py-5 " id="contact">
            <span className="fs-2 title">Contact Us</span>
            <div className="row container mx-auto">

                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3 mt-5  shadow rounded-3 ">
                    <h3>Leave your message</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" />
                        <input type="email" {...register("email")} placeholder="example@email.com" className="form-control p-2 m-3 w-75 mx-auto bg-light" />
                        <textarea {...register("message")} placeholder="leave your message" className="form-control p-2 m-3 w-75 mx-auto bg-light" style={{ height: "120px" }} />
                        <button type="submit" className="btn btn-warning " ><i className="fas fa-paper-plane m-1"></i>Send</button>

                    </form>
                </div>

                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3">
                    <img src={img} className="img-fluid" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Contact;