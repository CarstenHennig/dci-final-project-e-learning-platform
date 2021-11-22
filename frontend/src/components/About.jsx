import "./About.css";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "../images/pixelcells3.png";
import Pic2 from "../images/pixelcells.png";
import Pic3 from "../images/pixelcells2.png";

function About() {
  return (
    <div className="about">
      <div className="about_head"></div>
      <div className="about_carousel">
        <Carousel fade>
          <Carousel.Item className="d-flex justify-content-center">
            <img className="d-block w-50" src={Pic1} alt="First slide" />
            <Carousel.Caption className="p-5">
              <h2>WHY YOULEARN</h2>
              <h4>
                <b>
                  Hybrid learning is one of the main trends in the digitization
                  for each, younger students and working adults. Our low code
                  SaaS solution enables drivers of universities, high schools,
                  schools and even every kind of enterprise or even
                  non-government organizations to setup, design and manage
                  individual platforms for e-learning.
                </b>
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img className="d-block w-50" src={Pic2} alt="Second slide" />

            <Carousel.Caption>
              <h2>WHO ARE THE INITIATORS</h2>
              <h4>
                The very first try is created by the 'Digital Evangelists'
                Ferdinand Mbucha, Lead Backend Developer Karin Yahud, Lead
                Frontend Developer Carsten Hennig, Digital Strategist
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img className="d-block w-50" src={Pic3} alt="Third slide" />

            <Carousel.Caption>
              <h2>HOW TO JOIN</h2>
              <h4>
                We create a very first 'beta' e-learning platform for students
                and alumni of DCI, while structuring and preparing all frontend
                and backend elements for a low code SaaS solution. The core
                platform for DCI will be created and curated by the 'Digital
                Evangelists' team for free. It's an open platform, means: We
                provide API and support for new developed solutions.
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <footer>
        <h1> Let's Learn Together </h1>
      </footer> */}
    </div>
  );
}

export default About;
