import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Alert, Card, Row, Col, Button, ListGroupItem, Image } from "react-bootstrap"
import axios from "axios"
import moment from "moment"
import "../App.css";
import playVideo1 from "../images/playVideo1.jpg"

const baseUrl = "http://localhost:9000/galleries/getClips"

function EmbeddedMedia() {
	
	let [videoData, setVideoData] = useState([])
	let [vidUrl, setVidUrl] = useState("https://www.youtube.com/watch?v=W2FVN8AYYx8")
	const [video, setVideo]= useState(null)

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

	function VideoPlayer() {
		return (
			<div style={{ display: 'flex' }}>

				<hr />
				<Alert style={{ width: '50%', margin: 'auto' }}>
					{/* <Alert.Heading>{videoData ? videoData.map(x => x.videoUrl === vidUrl ? <p>{x.title}</p> : null) : null}</Alert.Heading> */}
					<Alert.Heading>{video ? video.title : null}</Alert.Heading>
					<p>{<ReactPlayer width="100%" muted={true} autoplay={true}
						onReady={true} controls={true} url={video ? video.videoUrl : null} />}</p>
					<hr />
					<p className="mb-0">
						<Card.Img variant="top" style={{
							width: '10%', height: '20%',
							borderRadius: '10%'
						}} src="http://placekitten.com/g/150/150" />
						{video ? 
							<>
								<p>{video.postedBy}</p>
								<p>{moment(video.createdAt).format(' DD - MM - YYYY')}</p>
								<hr />
								<p>{video.desc}</p>
							</>	: null}
					</p>
				</Alert>
				{/* =================== */}
				{/* Create Playlist */}

				<Card variant="primary" style={{ width: '35rem', marginRight: 'auto', backgroundColor: ' #c6a61a' }}>
					<Card.Body>
						<Card.Title>Playlist</Card.Title>
						<Card.Text>
							{videoData ? videoData.map((item, i) =>
								<ListGroupItem key={item + i}
									onClick={() => setVideo(item)}  >{<Image style={{ width: '10%' }}
										src={playVideo1} alt="play icon" thumbnail />}{item.title}
								</ListGroupItem>) : null}

						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
	return (<div className="main" >
		<h1>YOULEARN !</h1>
		<hr />
		<VideoPlayer />

	</div>)
}
export default EmbeddedMedia;