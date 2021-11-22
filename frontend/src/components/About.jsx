import "./About.css";
import Carousel from "react-bootstrap/Carousel";

function About() {
  return (
    <div className="about">
      <div className="about_head"></div>
      <div className="about_carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://pixabay.com/images/id-4986076/"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>#NewDesignThinking</h3>
              <p>
                <b>WHY</b>
              </p>
              <p>
                Hybrid learning is one of the main trends in the digitization
                for each, younger students and working adults. Our low code SaaS
                solution enables drivers of universities, high schools, schools
                and even every kind of enterprise or even non-government
                organizations to setup, design and manage individual platforms
                for e-learning.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <footer>
        <h1> Lets Learn Together </h1>
      </footer>
    </div>
  );
}

export default About;
