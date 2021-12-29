import React, {useState, useContext} from "react";
import {UserContext} from "./InfoProvider";


export default function UploadImageToArticle() {
    const [isLog] = useContext(UserContext);
    const [fileData, setFileData] = useState();
    const [filename, setFilename] = useState(null);
    
    const [imageLink, setImageLink] = useState(null)
    const baseUrl = "http://localhost:9000/uploads";

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("image", fileData);
        fetch(baseUrl + "/single", {
            method: "POST",
            body: data
        }).then((result) => {
            console.log(result);
            return result.json();
        }).then((result) => {
            setFilename(result.filename);
            console.log(filename);
        }).catch((err) => {
            console.log(err.message);
        });
    };
    

    return (
        <div>
            <div style={
                {
                    width: "50vw",
                    margin: "5px",
                    padding: "5px"
                }
            }>
                <form onSubmit={onSubmitHandler}>
                    <input type="file" name="image"
                        onChange={fileChangeHandler}/>
                    <button onSubmit={
                        () => {
                            setImageLink("http://localhost:9000/" + filename)
                        }
                    }>Load image</button>
                </form>

                <div>
                    <> {
                        filename ? (

                            <img style={
                                    {
                                        margin: "5px",
                                        padding: "5px",
                                        width: "200px",
                                        objectFit: "fill"
                                    }
                                }
                                src={
                                    "http://localhost:9000/" + filename
                                }/>
                        ) : null
                    } </>
                    {
                    filename ? (
                        <p>
                            Copy the code below and insert in the "Image Link" field above: {
                            "http://localhost:9000/" + filename
                        }</p>
                    ) : null
                } </div>
            </div>
        </div>
    );
}
