import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalCredits(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deep thanks, merci beaucoup, muchas gracias to ...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Huge hugs for</h4>
        <p>
          <b>
            <a
              href="https://www.linkedin.com/in/yaelsegall/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Yael Segall
            </a>
          </b>{" "}
          from Tel Aviv, Israel for giving our YouLearn open source project an
          outstanding styling with a unique logo!
        </p>
        <p>
          <b>Alexander Shatov</b> for his free-to-use{" "}
          <a
            href="https://unsplash.com/photos/niUkImZcSP8"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            video icon provided via unsplashed.com
          </a>{" "}
          that gives our video gallery an awesome looking!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
