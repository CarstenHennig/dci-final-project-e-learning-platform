import React, {useState} from "react";
import "./BlogModal.css";
import moment from "moment";
import Comments from "./Comments.jsx"
import {useHistory} from "react-router-dom";
import {Alert,Container, Row, Col} from "react-bootstrap"

function BlogModal(props) { // Comments component


    function DisplayComments() {
        const history = useHistory();
        let commentData;
        if (props.post) {           
            commentData =props.post.comments            
            return (
                <>
                
                    <Alert variant="success"  placeholder="No comments Yet"> {
                        commentData ? commentData.map((comment) => {
                            return (
                                <Row>
                                    <div className="commentsInfoContainer">                                   <p className="commentHeader">On {
                                            moment(comment.createdAt).format(' DD - MM - YYYY')
                                        }</p>     
                                        <p className= "commentHeader"> by  {
                                            comment.commenter
                                        } </p>
                                        
                                    </div>
                                    <p dangerouslySetInnerHTML={
                                        {__html: comment.comment}
                                    }/>
                                    <hr />
                                </Row>

                            )

                        }) : null
                    } </Alert>
                </>

            )
        }

    }

    if (! props.post) {
        return null
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
                        src={
                            props.post.imageURL
                        }
                        alt="Random"/>

                    <p>By {
                        props.post.author
                    }</p>
                    <p style={
                        {
                            color: "grey",
                            width: "fit-content"
                        }
                    }>Posted: {
                        moment(props.post.createdAt).format(' DD - MM - YYYY')
                    }
                        <hr style={
                            {
                                color: "grey",
                                height: "1px",
                                width: "100%",
                                border: "1px tomato solid"
                            }
                        }/>
                    </p>

                    <div dangerouslySetInnerHTML={
                        {__html: props.post.content}
                    }/>

                </div>
                <hr/> {/* DisplayComments shows users comments*/}
                <h4>Comments</h4>
                <div className="comments-display" placeholder="No comments Yet">
                    <DisplayComments commenting={props.post} />
                </div>

                <hr/> {/* WRITE a comment component follows*/}
                <div className="comments">
                    <Comments post={
                        props.post
                    }/>
                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
}

export default BlogModal;
