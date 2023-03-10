import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Imageone from "../../images/banner1.png";
import Imagetwo from "../../images/banner2.png";
import Imagethree from "../../images/banner3.png";
import Imagefour from "../../images/banner4.png";
import Imagefive from "../../images/banner5.png";
import Imagesix from "../../images/banner6.png";
import Imageseven from "../../images/banner7.webp";
import Imageeight from "../../images/banner8.png";
import "./AllImages.css";
import SingleImage from '../SingleImage/SingleImage';

const AllImages = () => {
    return (
        <div className='all-images'>
          <Container>
            <Row>
                <SingleImage Image={Imageone} />
                <SingleImage Image={Imagetwo} />
                <SingleImage Image={Imagethree} />
                <SingleImage Image={Imagefour} />
                <SingleImage Image={Imagefive} />
                <SingleImage Image={Imagesix} />
                <SingleImage Image={Imageseven} />
                <SingleImage Image={Imageeight} />
                
            </Row>
          </Container>
        </div>
    );
};

export default AllImages;