/** Frontend component to create a blog post
 * using React, Axios, own style sheet, Bootstrap and FontAwesome
 */

import React, {useState, useContext} from "react";
import axios from "axios";
import "./Article.css";
import {FloatingLabel, Form, FormControl} from "react-bootstrap";
import DropdownBlogCategory from "./ArticleDropdownButton.jsx";
import UploadImageToArticle from "./UploadImageToArticle.jsx";
import Popup from "./HelpPopUp.jsx";
import {UserContext} from "./InfoProvider";

// RICH TEXT EDITOR IMPORTS:
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useHistory} from "react-router-dom";

/** Function to write a blog post */

export default function WriteArticle() {
    let history = useHistory();
    const [isLog, setIsLog] = useContext(UserContext);
    const [title, setTitle]= useState(null);
    const [summary, setSummary] = useState(null);
    const [author] = useState(isLog.user.firstName + " " + isLog.user.lastName);
    const [email] = useState(isLog.user.email);
    const [value, setValue] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [imageURL, setImageURL] = useState(null)

    const [userInfo, setUserInfo] = useState({
        title: '',       
    });


    // Set Help Modal:
    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    // EDITOR CONFIGURATIONS
    let editorState = EditorState.createEmpty();
    let [content, setContent] = useState(editorState);
    const onEditorStateChange = (editorState) => {
        setContent(editorState);
    }

    /** HANDLE CHANGE FUNCTION POSTS ARTICLE TO SERVER*/

    const HandleChange = (e) => {
        e.preventDefault();
        e.persist();
        setUserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
        axios.put("http://localhost:9000/posts/writePost", {
            title,
            summary,
            imageURL,
            content: userInfo.content.value,
            author: author, /* (set to logged in user firstName + lastName) */
            email: email, /* (set to current logged in user email)  */
        }).then((response) => {
            alert("Blog post saved");
            history.push('/Home');
        }, (error) => {
            alert(error);
        });
    };

    return (
        <div>
            <div className="headline">
                <h4>
                    <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    Publish your blog posts
                </h4>
                <button onClick={togglePopUp}>Get help</button>
                {
                isOpen ? <Popup handleClose={togglePopUp}/> : null
            } </div>

            <form>
                <> {/* Inserting blog headline */}

                    <p className="labels">Headline</p>
                    <FloatingLabel controlId="floatingTextarea" className="write-article-headline">
                        <Form.Control as="textarea" placeholder="Write your headline" maxlength="160" name="headline"
                            value={title}
                            onChange={
                                (e) => setTitle(e.target.value)
                            }
                            
                        />
                    </FloatingLabel>

                    {/* Inserting summary */}

                    <p className="labels">Summary</p>
                    <FloatingLabel controlId="floatingTextarea" className="write-article-summary">
                        <Form.Control as="textarea" placeholder="Write your summary" maxlength="320" name="summary"
                            value={summary}
                            onChange={
                                (e) => setSummary(e.target.value)
                            }
                            // style={{ height: "100px", margin: "5px", padding: "5px" }}
                        />
                    </FloatingLabel>

                    {/* Inserting blog text */}
                  <p className="labels">Content</p>
                    <FloatingLabel controlId="floatingTextarea2" className="write-article-content">
                         <Editor editorState={content}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={onEditorStateChange}/>
                  <textarea style={{display:'none'}} ref={(val) => userInfo.content = val} value={draftToHtml(convertToRaw(content.getCurrentContent())) } />
            
                                              
               
                    </FloatingLabel>

                    {/* Insert imageURL */}
                    <p className="labels">Image Link</p>
                    <FloatingLabel controlId="floatingTextarea" className="write-article-headline">
                        <Form.Control as="textarea" placeholder="Paste Image link here" maxlength="160" name="imageURL"
                            value={imageURL}
                            onChange={
                                (e) => setImageURL(e.target.value)
                            }/>
                    </FloatingLabel>
                </>
                {/** Text areas should be responsive for mobile use */}


                {/* Selecting blog category */}

                <div className="dropdownButtons">
                    <p>Select a category</p>
                    <DropdownBlogCategory value={value}
                        setValue={setValue}/>
                </div>

                {/* Button to publish */}

                <button type="submit"
                    onClick={HandleChange}
                    style={
                        {
                            margin: "5px",
                            padding: "5px"
                        }
                }>
                    Publish
                </button>
            </form>
            {/* Inserting component to upload a picture */}
            <UploadImageToArticle/>

        </div>
    );
}
