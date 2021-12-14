import React from "react";
import "./BlogModal.css";

function BlogModal(props) {
  if (!props.post) {
    return null;
  }

  return (
    <div className="modal" id="modal">
      <div className="main-content">
        <button onClick={props.closeHandler}>close</button>
        <div className="modal-header"></div>
        <div className="modal-body">
          <h4>{props.post.author}</h4>
          <p>{props.post.content}</p>
          <p>{props.post.email}</p>
          <p>This Blog created on: {props.post.createdAt}</p>

        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
}

export default BlogModal;
