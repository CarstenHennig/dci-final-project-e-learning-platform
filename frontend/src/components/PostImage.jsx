import React, {useState} from "react";
import axios from "axios";
import fs from "fs";


export default function PostImage() {
    const [fileData, setFileData] = useState()
    const [filename, setFilename] = useState(null)
    const baseUrl = "http://localhost:9000/uploads"
    

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData
        data.append('image', fileData)
        fetch(baseUrl + '/single', {

            method: 'POST',
            body: data
        }).then((result) => {
            console.log(result)
            return result.json()
        }).then((result) => {
            setFilename(result.filename)
            console.log(filename)
        }).catch((err) => {
            console.log(err.message)
        })

    }

    function imageDisplay(baseUrl, filename) {

        if (filename) {
            return <div class>
                <img src={
                     "http://localhost:9000/uploads" + filename
                }/></div>
        }else {return null}
    }
    return (

        <div className="App">
            <h1>LernStubeR File Upload</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="file" name="image"
                    onChange={fileChangeHandler}/>
                <br/>
                <br/>
                <br/>
                <button>Upload</button>
            </form>
			
            <div> {
                filename ? <img style={{width: '150px', height: '150px'}} src={
                    "http://localhost:9000/" + filename
                }/> : null
            } </div>
        </div>
    )
}
