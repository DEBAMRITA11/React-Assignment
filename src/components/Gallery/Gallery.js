import React from 'react';
import AllImages from '../AllImages/AllImages';
import SectionHeading from '../SectionHeading/SectionHeading';
import "./Gallery.css";


const Gallery = () => {
    return (
        <section className='gallery-area'>
        <SectionHeading text="Check Our Gallery" heading="Gallery" />
        <div className='gallary-img py-4'>
        <AllImages />
        </div>
        
        </section>
    );
};

export default Gallery;