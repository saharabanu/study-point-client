import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;