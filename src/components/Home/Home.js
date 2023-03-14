import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
         <Banner /> 
         <Services />  
         <Gallery />
         <Contact />
        
        </>
    );
};

export default Home;