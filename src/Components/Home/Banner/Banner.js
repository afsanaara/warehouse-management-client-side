import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/side-view-double-cheeseburger-with-grilled-beef-patties-cheese-lettuce-leaf-burger-buns_141793-4883.jpg?t=st=1652107875~exp=1652108475~hmac=fecdc07307b08e06f50abb762de59bd4661b626975b3f9b1a7a86ff0e5117783&w=740"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Cheese Burger</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/experienced-chef-is-cutting-freshly-prepared-pizza-with-special-knife_613910-14828.jpg?t=st=1652107979~exp=1652108579~hmac=3b7dab7a281bd8096824afdb921585cd39d0dff47639650b717e66ce0cc8ada5&w=740"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Pizza</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5069.jpg?t=st=1652106348~exp=1652106948~hmac=0ddaa718642f8dd918992ee32b09507d80ba53dbce09f8b001950d58905d321a&w=740"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Spaghetti</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
       
    );
};

export default Banner;