import React, {useState} from "react";


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
        } else {
            return null
        }
    }
    return (

        <div> {/* FOR CARSTEN */}
            {/* <div style={{backgroundColor:"tomato", width:"50vw", margin:"auto", padding:"10px"}}>
            <h4>Write Article</h4>
             <form onSubmit={onSubmitHandler}>
               <textarea placeholder="Article title" style={{backgroundColor:"salmon", width:"100%",  margin:"auto", padding:"10px"}}/>
               <hr />
               <textarea name="description" placeholder="Write your article here" style={{backgroundColor:"sandybrown", width:"100%", height:"450px",margin:"auto", padding:"10px"}}/>
               <hr />
                <input type="file" name="image"
                    onChange={fileChangeHandler}/>
                <button>Publish</button>
            </form>
			 
            <div> {
                filename ? <img style={{width: '150px', height: '150px', borderRadius: '50%'}} src={
                    "http://localhost:9000/" + filename
                }/> : null
            } </div>

             </div> */}
            <hr/> {/* FOR KARIN */}
            <div style={
                {
                    backgroundColor: "tomato",
                    width: "30vw",
                    margin: "auto",
                    padding: "10px"
                }
            }>
                <h4>Update Your Profile</h4>
                <form onSubmit={onSubmitHandler}>
                    <textarea placeholder="Say something about yourself"
                        style={
                            {
                                backgroundColor: "salmon",
                                width: "100%",
                                margin: "auto",
                                padding: "10px"
                            }
                        }/>
                    <hr/>
                    <p>name: Amanda Holding</p>
                    <hr/>

                    <p>Email: amandaholding@gmail.com</p>
                    <hr/>
                    <p>Location: Leads, England</p>
                    <hr/>
                    <p>Posts Count: 250</p>
                    <hr/>
                    <p>Member Since: March, 2013</p>
                    <hr/>
                    <input type="file" name="image"
                        onChange={fileChangeHandler}/>
                    <button>Publish</button>
                </form>
            </div>
        </div>
    )
}
