import React from "react";
import "./BlogModal.css";
import moment from "moment";

function BlogModal(props) {
    if (! props.post) {
        return null;
    }

    return (
        <div className="modal" id="modal">
            <div className="main-content">
                <button onClick={
                    props.closeHandler
                }>close</button>
                <div className="modal-header"></div>
                <div className="modal-body">
                    <h5>{
                        props.post.title
                    }</h5>
                    <img style={
                            {
                                width: '100%',
                                height: '200px',
                                objectFit: "cover"
                            }
                        }
                        src="https://source.unsplash.com/random/"/>

                    <p>By {
                        props.post.author
                    }</p>
                    <p style={
                        {color: "grey"}
                    }>Posted: {
                        moment(props.post.createdAt).format(' DD - MM - YYYY')
                    }</p>
                    <hr style={
                        {
                            color: "grey",
                            height: "5px",
                            backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
                            width: "40%",
                            border: "3px cyan double"
                        }
                    }/>
                    <div dangerouslySetInnerHTML={
                        {__html: props.post.content}
                    }/>


                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
}

export default BlogModal;
