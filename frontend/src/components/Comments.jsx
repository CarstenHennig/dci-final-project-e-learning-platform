import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import "./Article.css";
import {FloatingLabel, Form, Alert} from "react-bootstrap";
import {UserContext} from "./InfoProvider";

// RICH TEXT EDITOR IMPORTS:
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
/* import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; */
import "./Com_Editor.css"
import {useHistory} from "react-router-dom";

/** Function to write a blog post */

export default function Comments(props) {
    let history = useHistory();

    // Declare states

    const [isLog, setIsLog] = useContext(UserContext);
    const [commenter] = useState(isLog.user.firstName + " " + isLog.user.lastName);
    const [email] = useState(isLog.user.email);    
    const [userInfo, setUserInfo] = useState({title: ''});    
    const [isError, setError] = useState(null);

    // RICH TEXT EDITOR CONFIGURATIONS
    let editorState = EditorState.createEmpty();
    let [comment, setComment] = useState(editorState);
    const onEditorStateChange = (editorState) => {
        setComment(editorState);
    }

    /** HANDLE CHANGE FUNCTION POSTS COMMENTS TO SERVER*/

    const postComment = (e) => {
        e.preventDefault();
        e.persist();

        if (comment.length > 350) {
            setError(alert('Required, Add content Minimum length 450 characters or less'));
            return;
        }
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });

        axios.put("http://localhost:9000/comments/writeComment", {
            comment: userInfo.comment.value,
            commenter: commenter, /* (set to logged in user firstName + lastName) */
            postId: props.post._id,
            postAuthor: props.post.author,
            email: email, /* (set to current logged in user email)  */
        }).then((response) => {
            alert("Blog comment saved");
            /* history.push('/Home'); */
            
        }, (error) => {
            alert(error);
        });
    };
    

    return (
        <div>
        
            {/* <p>From Comments: PostId - {postId} </p> */}
            <form >
                <> {/* Comments Editor */}
                    <h5 className="labels">Post a Comment</h5>
                    <FloatingLabel controlId="floatingTextarea2" className="write-article-content">
                        <Editor editorState={comment}
                            toolbarClassName="toolbarClass"
                            wrapperClassName="wrapperClass"
                            editorClassName="editorClass"
                            onEditorStateChange={onEditorStateChange}/>
                        <textarea style={
                                {display: 'none'}
                            }
                            ref={
                                (val) => userInfo.comment = val
                            }
                            value={
                                draftToHtml(convertToRaw(comment.getCurrentContent()))
                            }/>

                    </FloatingLabel>

                </>

                <button type="submit"
                    onClick={postComment}
                    style={
                        {
                            margin: "5px",
                            padding: "5px",
                            borderRadius: "10px"
                        }
                }>
                    Submit Comment
                </button>
            </form>
        </div>
    );
}
