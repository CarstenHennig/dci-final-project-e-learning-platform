import React, { useState, useEffect } from "react";

export default function GetPosts() {
  fetch("http://localhost:9000/posts/getPost")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>Get posts</h1>
    </div>
  );
}
