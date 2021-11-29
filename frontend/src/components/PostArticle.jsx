import axios from "axios";
import React, {useState, useEffect} from "react";
// import {Form, Button} from "react-bootstrap"

const url = "http://localhost:9000/article";

export default function PostArticle() {

    const [post, setPost] = useState({email: "mathewMoney@gazaphili.com", title: "", content: ""});


    const submitPost = (e) => {
        e.preventDefault();
        axios.put(url, {
            email: post.email,
            title: post.title,
            content: post.content
        }).then((response) => {
            console.log(response)
        }).catch(function (error) {
            console.log(error)
        })
    };


    const changeHandler = (e) => {
        const newData = {
            ...post
        }
        newData[e.target.name] = e.target.value
        setPost(newData)
        console.log("DATA INPUT ", newData)
    }


    return (
        <div>
            <form onSubmit={submitPost}>
                {/*  <input onChange={
                        (e) => changeHandler(e)
                    }
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Put email here"/> */}
                <input onChange={
                        (e) => changeHandler(e)
                    }
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Your title here"/>
                <br/>
                <br/>
                <br/>
                <textarea style={
                        {
                            width: '70%',
                            height: '450px'
                        }
                    }
                    onChange={
                        (e) => changeHandler(e)
                    }
                    type="text"
                    name="content"
                    id="content"
                    placeholder="Your content here"/>
                <br/>
                <br/>
                <br/>
                <button type="submit">Publish</button>
            </form>

        </div>

    )
}


/* 

import axios from "axios";
import React, {useState, useEffect} from "react";
// import {Form, Button} from "react-bootstrap"

const url = "http://localhost:9000/article";

export default function PostArticle() {

    const [post, setPost] = useState({email: "", title: "", content: ""});

    function onFormSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('email', post.email);
        formData.append('title', post.title);
        formData.append('content', post.content);

        const options = {
            method: 'POST',
            body: formData
        };

        fetch(url, options);
    }
    const changeHandler = (e) => {
        const newData = {
            ...post
        }
        newData[e.target.name] = e.target.value
        setPost(newData)
        console.log("DATA INPUT ", newData)
    }


    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input onChange={
                        changeHandler
                    }
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Put email here"/>
                <input onChange={
                        changeHandler                    }
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Your title here"/>
                <input onChange={
                        (e) => changeHandler
                    }
                    type="text"
                    name="content"
                    id="content"
                    placeholder="Your content here"/>
                <button type="submit">Publish</button>
            </form>

        </div>

    )
}
 */
