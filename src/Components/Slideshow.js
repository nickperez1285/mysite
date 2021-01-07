import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import "react-slideshow-image/dist/styles.css";
// import Carousel from "react-bootstrap/Carousel";
// import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Slideshow = ({ slides }) => {
	// images / portfolio / cars.png;
	// const slideImages = [
	// 	"/images/portfolio/hack1.jpg",
	// 	"/images/portfolio/hack2.jpg",
	// 	"/images/portfolio/hack3.jpg",
	// 	"/images/portfolio/hack2.jpg",
	// ];
	// const [curr, setCurr] = useState(0);
	// const [loaded, setLoad] = useState(false);
	// const { length } = slides;

	// const goToNext = () => {
	// 	setCurr(curr === length - 1 ? 0 : curr + 1);
	// };

	// useEffect(() => {
	// 	setTimeout(goToNext, 2500);
	// });
	// if (!Array.isArray(slides) || slides.length <= 0) {
	// 	return null;
	// }
	// const ready = () => {
	// 	setLoad(true);
	// };
	return (
		<CarouselProvider isPlaying="true" interval="3000" naturalSlideWidth={50} naturalSlideHeight={55} totalSlides={4}>
			<Slider style={{ height: 300 }} classNameAnimation="translateX">
				<Slide index={0}>
					<img className="sliderImage" src={"/images/portfolio/hack2.jpg"} />
				</Slide>
				<Slide index={1}>
					<img className="sliderImage" src={"/images/portfolio/hack3.jpg"} />
					<p>hack 1</p>
				</Slide>
				<Slide index={2}>
					<img className="sliderImage" src={"/images/portfolio/hack4.jpg"} />
				</Slide>
				<Slide index={3}>
					<img className="sliderImage" src={"/images/portfolio/hack5.jpg"} />
				</Slide>
				<Slide index={4}>
					<img className="sliderImage" src={"/images/portfolio/hack1.jpg"} />
				</Slide>
			</Slider>
		</CarouselProvider>
	);
	// <section className="slider">
	// 	{slides.map((s, i) => (
	// 		<div className={i === curr ? "slide active" : "slide"} key={s.title}>
	// 			{i === curr && <img className="slideImage" src={s.image} />}

	// 			<h2>{s.title}</h2>
	// 			<h3>{s.subtitle}</h3>
	// 		</div>
	// 	))}
	// </section>
	// );
};
// }

export default Slideshow;
