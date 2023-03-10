import React from 'react';
import "./SectionHeading.css";

const SectionHeading = ({text, heading}) => {
    return (
        <div className='section-heading text-center mb-4'>
                <h4>{heading}</h4>
                <h2>{text}</h2>
            </div>
    );
};

export default SectionHeading;