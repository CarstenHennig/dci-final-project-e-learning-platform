import React, {useState} from "react";
import { Alert,Button } from 'react-bootstrap';
/* import axios from "axios";
import fs from "fs"; */


export default function PostImage() {
    const [fileData, setFileData] = useState()
    const [filename, setFilename] = useState(null)
    const baseUrl = "http://localhost:9000"
    

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0])
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData()
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

 
    return (

        <div className="App">
            <Alert variant="success" style={{width: '30vw', margin: "auto", borderRadius: "15%", alignContent: "center",}}>
  <Alert.Heading>Upload a Photo</Alert.Heading>
  <hr />
         
            <form onSubmit={onSubmitHandler}>
                <input type="file" name="image"
                    onChange={fileChangeHandler}/>
                    
              <hr style={{width: "70%", height: "6px", color: "white"}} />
            <button style={{width: "30%", height: "50px", color: "blue", borderRadius:"40%", backgroundColor:"beige", border:"2px double brown"}}type="submit">
      Upload
    </button>{' '}
            </form>
			<hr />
            <div> {
                filename ? <img style={{width: '150px', height: '150px'}} src={
                   "http://localhost:8055/" + filename
                   
                }alt="uploaded file test" /> : null
            } </div>
            </Alert>
        </div>
    )
}
