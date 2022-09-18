import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

/*import pic from "../img/pic1.jpg";*/
import "./Event.css";

function Events() {
  return (
    <div className="m-5 even">
      <div className="eve-title mt-5 pt-5">
        <h1>Events</h1>
      </div>
      <Carousel className="mt-5 p-5">
        <CarouselItem className=" mt-5 p-5">
          <Carousel.Caption className="eve-cor">
            <h2>Event</h2>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem className="mt-5 p-5">
          <Carousel.Caption className="eve-cor">
            <h2>Event</h2>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem className="mt-5 p-5">
          <Carousel.Caption className="eve-cor">
            <h2>Event</h2>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default Events;
