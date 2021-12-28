import React, {useState, useContext} from "react";
import {UserContext} from "./InfoProvider";
import {Button} from "react-bootstrap"

export default function EditProfileImage() {
    const [isLog, setIsLog] = useContext(UserContext);
    const [fileData, setFileData] = useState();
    const [filename, setFilename] = useState(null);   
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
            console.log("RES",result);
            return result.json();
        }).then((result) => {
            setFilename(result.filename);
            console.log( "FILENAME",filename);
        }).catch((err) => {
            console.log(err.message);
        });
    };


    return (
        <div>
            <div  >
                <form onSubmit={onSubmitHandler} style={{width: "10%"}}>
                    <input type="file" name="image"
                        onChange={fileChangeHandler}/>
                    <Button variant="outline-dark" >Load image</Button>
                </form>
                

                <div>
                 
                    <> {
                        filename ? (

                            <img style={
                                    {
                                        margin: "5px",
                                        padding: "5px",
                                        width: "100px",
                                        objectFit: "fill",
                                        borderRadius:"20%"
                                    }
                                }
                                src={
                                    "http://localhost:9000/" + filename
                                }/>
                        ) : null
                    } </>
                    {
                    filename ? ( localStorage.setItem('profileImage', "http://localhost:9000/" + filename) ) : null
                } </div>
            </div>
        </div>
    );
}

