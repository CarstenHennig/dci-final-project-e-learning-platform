import axios from "axios";
import React, {useState, useRef,useEffect} from "react";
// import {Form, Button} from "react-bootstrap"

/* const url = "http://localhost:9000/posts/writePost"; */

export default function PostArticle() {

    const [post, setPost] = useState({
        email: "zhonglei@gmail.com",
        title: "",
        content: "",
        author: "",
       
    });
  const [fileData, setFileData] = useState()

    const submitPost = async(e) => {
        e.preventDefault();
        const postFormData= post
       /*  const postFormData = new FormData(); */
      /*   postFormData.append('data', post) */
     try {
         const response = await axios({
             method: "put",
             url: "http://localhost:9000/posts/writePost",
             data: postFormData,
             headers: { 'Content-Type': 'application/json'},
            
         })
         console.log(response.data.content.posts)
     } catch (error) {
         console.log(error)
         
     }
       
    //    /*  formData.append("image", fileData)
    //     console.log(fileData) */
    //     console.log("I AM POSTS! ", postFormData );



    //    axios.put(url, formData  )
    //     .then((response) => {
    //         const incomingData = response.config.data
    //         console.log("BACKENDo: ", incomingData);
    //     }).catch(function (error) {
    //         console.log(error)
    //     }) 
    };


    const changeHandler = (e) => {
        const newData = {...post
        }
        newData[e.target.name] = e.target.value
        setPost(newData)
        console.log("DATA INPUT ", newData)
    }
    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }

    return (
        <div style={
            {
                margin: "auto",
                backgroundColor: "aliceblue",
                display: "flex",
                alignItems: "center",
                width: "60vw",
                paddingLeft:"20px"
            }
        }>
            <form onSubmit={submitPost}>
                {/*  <input onChange={
                        (e) => changeHandler(e)
                    }
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Put email here"/> */}
                    <h3>Write Article</h3>
                     <hr />
                     <label>Title</label>
                <input onChange={
                        (e) => changeHandler(e)}
                        style={{ width: '100%', height: '50px'}}
                      type="text" name="title"id="title"
                      placeholder="Your title here"/>
                <hr />
               <label>Brief Intro Text</label>
                 <textarea style={{ width: '100%', height: '150px'}}name="intro" onChange={(e) => changeHandler(e)}
                      type="text" placeholder="summary"/>
                      <label>Post Body</label>
                <textarea style={{ width: '100%', height: '450px'}}
                    onChange={(e) => changeHandler(e)}
                    type="text"name="content"id="content"
                    placeholder="Your content here"/>
                <hr />
                {/*  <input type="file" name="image"
                    onChange={fileChangeHandler}/> */}
               <input onChange={(e)=> setFileData(e.target.files[0])} 
                     type="file" name="image" id="image" 
                     placeholder="Select a photo"/> 
             
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
