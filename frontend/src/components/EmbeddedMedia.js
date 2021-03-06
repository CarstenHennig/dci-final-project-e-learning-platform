import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios"
import moment from "moment"
import "./EmbeddedMedia.scss";
import playVideo1 from "../images/playVideo1.jpg"
import { Card, Button, Modal, Alert } from "react-bootstrap"
const baseUrl = "http://localhost:9000/galleries/getClips"

export default function EmbeddedMedia() {
	let [videoData, setVideoData] = useState([])
	const [videoClip, setVideoClip] = useState("")

	useEffect(() => {
		axios.get(baseUrl)
			.then(response => {
				const clips = response.data
				let gallery = []
				clips.forEach((video) => {
					gallery = gallery.concat(video)

				})
				setVideoData(gallery)
			}
			)
			.catch(error => {
				error.message = "Error getting request"
			});

	}, []);


	const [show, setShow] = useState(false);

	function handleShow() {



		setShow(true);
	}
	return (
		<>
			<h1> Video Gallery </h1>
			<div className="embedded-media">


				<>
					{videoData.map((clip, index) => <Card style={{ width: '18rem', height: '18rem' }}className="wrap-card" key={clip._id} >
						<Card.Text variant="info" style={{ pointerEvents: "none", width: '100%', height: '100%' }} >
							<ReactPlayer width="100%" height="100%" light={true}url={clip.videoUrl} />
						</Card.Text>
						<Card.Text onClick={() => { setVideoClip(clip); handleShow() }} className="card-media">
							{clip.title}
						</Card.Text>
						<Button key={index + 1} className="me-2" onClick={() => { setVideoClip(clip); handleShow(); }}>

							Play Clip
						</Button>

					</Card>)}

					<Modal show={show} onHide={() => setShow(false)}>
						<Modal.Header closeButton>
							<p>{videoClip.title}</p>
						</Modal.Header>
						<Modal.Body style={{ width: "100%" }}>   {
							<ReactPlayer url={videoClip ? videoClip.videoUrl : null} onReady={true} autoPlay={true} width="auto"
								controls={true} />}
						</Modal.Body>
						Posted by {videoClip.postedBy} on
						{moment(videoClip.createdAt).format(' DD - MM - YYYY')}
						<hr />
						<div style={{ padding: "10px", fontSize: "10px", justifyContent: "justify" }}>
							Clip Info: <br /> {videoClip.desc}
						</div>

					</Modal>




				</>
			</div></>
	);
}


