import React, { useState } from "react";
import axios from "axios";
import fs from "fs";

export default function UploadImageToArticle() {
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
      <div
        style={{
          width: "50vw",
          margin: "5px",
          padding: "5px",
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <input type="file" name="image" onChange={fileChangeHandler} />
          <button>Click here</button>
        </form>

        <div>
          {" "}
          {filename ? (
            <img
              style={{
                margin: "5px",
                padding: "5px",
                width: "200px",
                objectFit: "fill",
              }}
              src={"http://localhost:9000/" + filename}
            />
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
}
