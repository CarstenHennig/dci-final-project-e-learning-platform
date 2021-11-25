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
                         changeHandler
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
