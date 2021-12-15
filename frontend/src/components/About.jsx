import "./About.css";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "../images/pixelcells3.png";
import Pic2 from "../images/pixelcells.png";
import Pic3 from "../images/pixelcells2.png";

export default function About() {
  return (
    <div className="about">
      <div className="about_head"></div>
      <div className="about_carousel">
        <Carousel fade>
          <Carousel.Item className="d-flex justify-content-center">
            <img
              className="d-block w-50 about-img"
              src={Pic1}
              alt="First slide"
            />
            <Carousel.Caption className="p-0">
              <h4>WHY YOULEARN</h4>
              <p className="small-font">
                Hybrid learning is one of the main trends in the digitization
                for each, younger students and working adults. Our low code SaaS
                solution enables drivers of universities, high schools, schools
                and even every kind of enterprise or even non-government
                organizations to setup, design and manage individual platforms
                for e-learning.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img
              className="d-block w-50 about-img "
              src={Pic2}
              alt="Second slide"
            />

            <Carousel.Caption className="p-0">
              <h4>WHO ARE THE INITIATORS</h4>
              <p className="small-font">
                The very first try is created by the 'Digital Evangelists'
                Ferdinand Mbucha, Lead Backend Developer Karin Yahud, Lead
                Frontend Developer Carsten Hennig, Digital Strategist
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img
              className="d-block w-50 about-img "
              src={Pic3}
              alt="Third slide"
            />

            <Carousel.Caption className="p-0">
              <h4>HOW TO JOIN</h4>
              <p className="small-font">
                We create a very first 'beta' e-learning platform for students
                and alumni of DCI, while structuring and preparing all frontend
                and backend elements for a low code SaaS solution. The core
                platform for DCI will be created and curated by the 'Digital
                Evangelists' team for free. It's an open platform, means: We
                provide API and support for new developed solutions.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
