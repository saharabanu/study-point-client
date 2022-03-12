import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import img from '../../../images/contact.png';


const Contact = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('studypoint', 'template_a9erqi3', form.current, 'R_4-ZvT1bxgqne3x3')
          .then((result) => {
              alert('Message sent successfully')
              console.log(result.text);
          }, (error) => {
              alert(error.message)
              console.log(error.text);
          });
          e.target.reset();
      };
   


    return (
        <div className="container-fluid py-5 " id="contact">
            <span className="fs-2 title">Contact Us</span>
            <div className="row container mx-auto">

                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3 mt-5  shadow rounded-3 ">
                    <h3>Leave your message</h3>
                    <form ref={form} onSubmit={sendEmail} >
                        <input type="text"  placeholder="Your name" className=" p-2 m-3 w-75 mx-auto bg-light" required name="client-name" style={{outline:'none'}}/>

                        <input type="email" placeholder="example@email.com" className=" p-2 m-3 w-75 mx-auto bg-light" name="email" required style={{outline:'none'}}/>

                        <textarea  placeholder="leave your message" className="form-control p-2 m-3 w-75 mx-auto bg-light" name="message" required style={{ height: "120px",outline:'none' }}  />

                        <button type="submit" value="send" className="btn btn-warning " ><i className="fas fa-paper-plane m-1"></i>Send</button>

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