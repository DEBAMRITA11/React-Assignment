import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Banner1 from "../../images/banner1.png";
import Banner2 from "../../images/banner2.png";
import Banner3 from "../../images/banner3.png";
import "./Banner.css"

const Banner =() => {
    return (
        <Carousel>
        <Carousel.Item>
         <container className="hero-area d-flex align-items-center section-bg">
         <div className="container">
         <div className="row justify-content-between gy-5">
         <div className="col-lg-6 col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 className='hero-text'>Enjoy Your Healthy<br/>Delicious Food</h2>
          <p>Yummy a healthy and delicious food business committed to providing high-quality, nutritious meals to fuel your body and nourish your soul.
            <br/>Founded by some passionate chef with years of experience in the culinary industry, Yummy was born out of a desire to create healthy and satisfying meals that don't compromise on flavor.</p>
          <div>
          <Button variant="danger">Book a Table</Button>{' '}
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src={Banner1}
          className="d-block w-100"
          alt="First slide"/>
        </div>
      </div>
      </div>

         </container>
        </Carousel.Item>
        <Carousel.Item>
         <container className="hero-area d-flex align-items-center section-bg">
         <div className="container">
         <div className="row justify-content-between gy-5">
         <div className="col-lg-6 col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2>Enjoy Your Healthy<br/>Delicious Food</h2>
          <p>Yummy a healthy and delicious food business committed to providing high-quality, nutritious meals to fuel your body and nourish your soul.
            <br/>Founded by some passionate chef with years of experience in the culinary industry, Yummy was born out of a desire to create healthy and satisfying meals that don't compromise on flavor.</p>
          <div>
          <Button variant="danger">Book a Table</Button>{' '}
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src={Banner2}
          className="d-block w-100"
          alt="First slide"/>
        </div>
      </div>
      </div>

         </container>
        </Carousel.Item>
        <Carousel.Item>
         <container className="hero d-flex align-items-center section-bg">
         <div className="container">
         <div className="row justify-content-between gy-5">
         <div className="col-lg-6 col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 >Enjoy Your Healthy<br/>Delicious Food</h2>
          <p>Yummy a healthy and delicious food business committed to providing high-quality, nutritious meals to fuel your body and nourish your soul.
            <br/>Founded by some passionate chef with years of experience in the culinary industry, Yummy was born out of a desire to create healthy and satisfying meals that don't compromise on flavor.</p>
          <Button variant="danger">Book a Table</Button>{' '}
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src={Banner3}
          className="d-block w-100"
          alt="First slide"/>
        </div>
      </div>
      </div>

         </container>
        </Carousel.Item>
      </Carousel>
    );
};
export default Banner; 