import React from "react";
import "./Imprint.css";
import ModalCredits from "./ImprintModal.jsx";
import { Button } from "react-bootstrap";

export default function Imprint() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="imprint">
      <h2> Imprint </h2>
      <div className="imprint-head">
        <h5>Data according to section 5 TMG</h5>
        <h5>Digital Evangelists, Hohe Weide 10, 20259 Hamburg, Germany</h5>
        <p>
          Represented by: Mrs. Karin Yahud || Mr. Ferdinand Mbecha || Mr.
          Carsten Hennig
        </p>
        <p>Contact person:</p>
        <p>Mr. Carsten Hennig, Phone: +49 (0)40 414311692,</p>
        <p>
          Email:
          <a href="mailto:ch@digitalevangelists.de">
            {" "}
            ch (at) digitalevangelists (.) de
          </a>
        </p>
        <p>
          Website:
          <a href="http://digitalevangelists.de" target="_blank">
            {" "}
            www.digitalevangelists.de
          </a>
        </p>
      </div>

      {/* Modal for credits */}

      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Deep thanks to ...
        </Button>

        <ModalCredits show={modalShow} onHide={() => setModalShow(false)} />
      </>

      <hr />

      {/* Large text part of imprint in scrollbar div */}

      <div class="imprint-text">
        <p>Registered in the regional register of cooperatives</p>
        <p>Court of jurisdiction: Hamburg</p>
        <p>Disclaimer</p>
        <p>
          Responsibility for contents: The contents of our web pages have been
          created with the greatest care. Nevertheless, we cannot guarantee that
          the content is up-to-date, reliable or complete. According to the
          legal regulations we are responsible for the content created by
          ourselves. In this context, we would like to clarify that we are not
          responsible for information provided by or collected from third
          parties. We neither control the information that is sent, nor do we
          follow up on possible illegal activities. If illegal activities are
          detected, we will follow our obligation to block or delete the
          corresponding content, according to paragraphs 8 to 10 of the
          Telemedia Act (TMG).
        </p>
        <p>
          Responsibility for links: The responsibility for the content of third
          party links (external content) lies with the respective website
          operators. At the time of inserting the links used on our pages, no
          illegal activities were detected in them. As soon as we become aware
          of illegal activities or violations, we will remove the corresponding
          link.
        </p>
        <p>
          Copyright: Our web pages and their content (texts, photos, graphics,
          design) are subject to German copyright law. Unless otherwise agreed
          by law, the use, reproduction, copying or modification of the content
          is subject to copyright. Exceptions must be approved in writing by the
          website operators or rights holders. Individual copies are only
          permitted for private use, they may not be used directly or indirectly
          for commercial purposes. The unauthorized use of material protected
          under copyright law is punishable under Section 106.
        </p>
      </div>
    </div>
  );
}
