import axios from "axios";
import React, {useState, useEffect} from "react";
//import {Form, Button} from "react-bootstrap"

const url = "http://localhost:9000/article";

export default function PostArticle() {

    const [post, setPost] = useState({email: "", title: "", content: ""});

onFormSubmit(e){
        e.preventDefault() // Stop form submit


        const formData = new FormData();

        formData.append('email', set);
        formData.append('slug', this.state.slug);
        formData.append('image', this.state.file);
        formData.append('description', this.state.description);

        const options = {
            method: 'POST',
            body: formData
        };

        fetch('http://localhost:8000/api/create', options);


    const submitPost =  (e) => {
        e.preventDefault();
         axios.post(url, {
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
        console.log("DATA INPUT " , newData)
    }


    return (
        <div>
            <form onSubmit={submitPost}>
                <input onChange={
                        (e) => changeHandler(e)
                    }
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Put email here"/>
                <input onChange={
                        (e) => changeHandler(e)
                    }
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Your title here"/>
                <input onChange={
                        (e) => changeHandler(e)
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
