import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Alert, Card, Row, Col, Button, ListGroupItem, Image } from "react-bootstrap"
import axios from "axios"
import moment from "moment"
import "../App.css";
import playVideo1 from "../images/playVideo1.jpg"

const baseUrl = "http://localhost:9000/galleries/getClips"

function VideoGallery() {

	let [videoData, setVideoData] = useState([])
	let [vidUrl, setVidUrl] = useState("https://www.youtube.com/watch?v=W2FVN8AYYx8")

	useEffect(() => {
		axios.get(baseUrl)
			.then(response => {
				const clips = response.data

				let gallery = []
				clips.forEach((video) => {
					gallery = gallery.concat(video.videos)
				})
				setVideoData(gallery)
			}
			)
			.catch(error => {
				error.message = "Error getting request"
			});

	}, []);

	const data = videoData.length ? videoData[0] : null
	
	return (<div className="main" >
		
		<h1> Video Gallery</h1>
		<hr style={{width: '28%', height: '1rem'}}/>
		

		{/* Gallery Comes Bellow */}
<Row xs={1} md={4} className="g-4" >
			{Array.from({ length: 4 }).map((_, idx) => (
				<Col>
		{videoData ? videoData.map((item, i) => <
			ListGroupItem key={item + i}>
			{<Card.Img variant="top" style={{width: "100%", display: 'flex'}}  src={playVideo1} />}
			{item.title}{<button style={{border: "0px", backgroundColor: "#ccd9ff" ,borderRadius: "40%"}} >Play</button>}</ListGroupItem>) : null}
</Col>
			))}
		</Row>
	</div>)
}
export default VideoGallery;