import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container-fluid bg-dark ">

        <div className="container mx-auto text-start">
          <div className="row">
    
              <div className="col-lg-4 col-sm-3  pt-5">
               <div className="footer-1-text">
                   <h2 className="text-primary">Study Point</h2>
                  <ul className="list-unstyled  text-muted">
                      <li className="  py-3">porro expedita nostrum eaque quisquam, ea eius! Error, consequuntur corrupti.</li>
                     
                      <a href='https://www.facebook.com/study.point.online.education'  target="_blank" rel="noreferrer" className="pt-3"><span className="mx-1"><i className="fa-brands fa-facebook-f px-2"></i></span></a> 
                      <a href='https://www.youtube.com/channel/UCx4phTEsCsqlhBWjLb-XhxA'  target="_blank" rel="noreferrer" className="pt-3"><span className="mx-1"><i class="fa-brands fa-youtube px-2"></i></span></a> 
                      
                      
                      <span className="mx-1"><i className="fa-brands fa-instagram-square px-2"></i></span> <span className="mx-1"><i className="fa-brands fa-twitter px-2"></i></span> <span><i className="fa-brands fa-linkedin px-2"></i></span>
                  </ul>
               </div>
              </div>
              <div className="col-md-3 col-sm-3  py-4">
                  <div className="footer-1-text">
                      <h4 className="text-white text-uppercase">About Us</h4>
                     <ul className="list-unstyled  text-muted">
                         <li className="py-2">Works </li>
                         <li className="py-2">Strategy </li>
                         <li className="py-2">Releases </li>
                         <li className="py-2">Press </li>
                         <li className="py-2">Mission </li>
                     </ul>
                  </div>
                 </div>
                 <div className="col-md-3 col-sm-3  py-4">
                  <div className="footer-1-text">
                      <h4 className="text-white text-uppercase">Customers</h4>
                     <ul className="list-unstyled mb-5 text-muted">
                         <li className="py-2">Trading </li>
                         <li className="py-2">Courses </li>
                         <li className="py-2">About Us </li>
                         <li className="py-2">Contact Us </li>
                         
                     </ul>
                  </div>
                 </div>
                 <div className="col-md-2  col-sm-3 py-4">
                  <div className="footer-1-text">
                    <h4 className="text-white text-uppercase">Support</h4>
                   <ul className="list-unstyled mb-5 text-muted">
                       <li className="py-2">Devolopers </li>
                       <li className="py-2">Support </li>
                       <li className="py-2">Customer Services </li>
                       <li className="py-2">Get Started</li>
                       <li className="py-2">Guide </li>
                   </ul>
                </div>
                 </div>
          </div>
      </div>
            {/* <div className="row justify-content-center align-items-center p-5 ">
                <div className="col-12 col-lg-6 col-md-6 col-sm-12  text-center ">
                    <h2 className="footer-title">Study Point</h2>
                    <div className="text-light ">
                        <i className="fab fa-facebook-square p-1 fs-3"></i>
                        <i className="fab fa-twitter-square p-1 fs-3"></i>
                        <i className="fab fa-google-plus-square p-1 fs-3"></i>
                        <i className="fab fa-linkedin p-1 fs-3"></i>
                    </div>
                    <p className="text-light">©copyrights since - 2021</p>
                    <a className="text-decoration-none text-light" target="_blank" href="https://www.linkedin.com/in/taseenbappi/" rel="noreferrer">Developer: Taseen Bappi</a>
                </div>
                {/* <div className="col-12 col-lg-6 col-md-6 col-sm-12 ">

                </div> */}
            

        </div>
    );
};

export default Footer;