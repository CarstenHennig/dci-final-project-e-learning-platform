import React, {useState, useContext} from 'react';
import {Button} from "react-bootstrap"
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useHistory} from "react-router-dom";
import {UserContext} from "../InfoProvider";
import axios from 'axios';

 function RichTextEditor() {
    let history = useHistory();
    const [isLog, setIsLog] = useContext(UserContext);
    const [userInfo, setUserInfo] = useState({
        title: '',
        summary: '',
        content: '',
        author: isLog.user.firstName + " " + isLog.user.lastName,
        email: isLog.user.firstName + " " + isLog.user.lastName,
        imageURL: ''
    });
    const onChangeValue = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }

    let editorState = EditorState.createEmpty();
    const [content, setContent] = useState(editorState);
    const onEditorStateChange = (editorState) => {
        setContent(editorState);
    }

    const [isError, setError] = useState(null);
    const addDetails = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            if (userInfo.content.value.length < 50) {
                setError('Required, Add description Minimum length 50 characters');
                return;
            }
            axios.post("http://localhost:9000/posts/writePost", {
                title: userInfo.title,
                summary: userInfo.summary,
                content: userInfo.content.value,
                author: userInfo.author,
                email: userInfo.email,
                imageURL: userInfo.imageURL
            }).then(res => {
                if (res.data.success === true) {
                    history.push('/');
                }
            })
        } catch (error) {
            throw error;
        }
    }

    return (
        <>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <form onSubmit={addDetails}
                            className="update__forms">
                            <h3 className="myaccount-content">
                                Post Article
                            </h3>
                            <div className="form-row">
                                {/* Insert Article Title */}
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold">
                                        Headline
                                        <span className="required">
                                            *
                                        </span>
                                    </label>
                                    <input type="text" name="title"
                                        value={
                                            userInfo.title
                                        }
                                        onChange={onChangeValue}
                                        className="form-control"
                                        placeholder="Headline"
                                        required/>
                                </div>
                                {/* Insert Article Summary */}
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold">
                                        Summary
                                        <span className="required">
                                            *
                                        </span>
                                    </label>
                                    <textarea style={
                                            {height: "150px"}
                                        }
                                        name="summary"
                                        value={
                                            userInfo.summary
                                        }
                                        onChange={onChangeValue}
                                        className="form-control"
                                        placeholder="Summary"
                                        required/>
                                </div>
                                {/* Insert Image link */}
                                <div className="form-group col-md-12">
                                    <label className="font-weight-bold">
                                        Image Link
                                        <span className="required">
                                            *
                                        </span>
                                    </label>
                                    <input type="text" name="title"
                                        value={
                                            userInfo.imageURL
                                        }
                                        onChange={onChangeValue}
                                        className="form-control"
                                        placeholder="past the display image link here"
                                        required/>
                                </div>
                                {/* Insert Rich Text Editor for content */}
                                <div className="form-group col-md-12 editor">
                                    <label className="font-weight-bold">
                                        Content
                                        <span className="required">
                                            *
                                        </span>
                                    </label>
                                    <Editor editorState={content}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={onEditorStateChange}/>
                                    <textarea style={
                                            {
                                                display: 'none',
                                                height: '500px',
                                                width: 'auto',
                                                backgroundColor: "red"
                                            }
                                        }
                                        disabled
                                        ref={
                                            (val) => userInfo.content = val
                                        }
                                        value={
                                            draftToHtml(convertToRaw(content.getCurrentContent()))
                                        }/>
                                </div>
                                {
                                isError !== null && <div className="errors">
                                    {isError} </div>
                            }
                                <div className="form-group col-sm-12 text-right">
                                    <Button variant="success" type="submit" className="btn btn__theme">
                                        Publish
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
