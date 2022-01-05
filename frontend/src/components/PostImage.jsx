import React, { useState } from "react";

export default function PostImage() {
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
      body: data,
    })
      .then((result) => {
        console.log(result);
        return result.json();
      })
      .then((result) => {
        setFilename(result.filename);
        console.log(filename);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function imageDisplay(baseUrl, filename) {
    if (filename) {
      return (
        <div class>
          <img src={"http://localhost:9000/uploads" + filename} />
        </div>
      );
    } else {
      return null;
    }
  }
  return (
    <div>
      {" "}
      
      <hr /> {/* FOR KARIN */}
      <div
        style={{
          backgroundColor: "tomato",
          width: "30vw",
          margin: "auto",
          padding: "10px",
        }}
      >
        <h4>Update Your Profile</h4>
        <form onSubmit={onSubmitHandler}>
          <textarea
            placeholder="Say something about yourself"
            style={{
              backgroundColor: "salmon",
              width: "100%",
              margin: "auto",
              padding: "10px",
            }}
          />
          <hr />
          <p>name: Amanda Holding</p>
          <hr />

          <p>Email: amandaholding@gmail.com</p>
          <hr />
          <p>Location: Leads, England</p>
          <hr />
          <p>Posts Count: 250</p>
          <hr />
          <p>Member Since: March, 2013</p>
          <hr />
          <input type="file" name="image" onChange={fileChangeHandler} />
          <button>Publish</button>
        </form>
      </div>
    </div>
  );
}
