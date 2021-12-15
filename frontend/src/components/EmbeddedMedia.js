import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios"
import moment from "moment"
import "../App.css";
import playVideo1 from "../images/playVideo1.jpg"
import { Card, Button, Modal } from "react-bootstrap"
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
					gallery = gallery.concat(video.videos)
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
			<h1> YouLearn</h1>
			<div className= "main" style={{ display: 'flex', flexWrap: "wrap", flexFlow: "row Wrap", justifyContent: "spaceAround" }}>

				<>
					{videoData.map((clip, index) => <Card key={clip._id} style={{ width: '18rem', display: "flex", flexWrap: "wrap", flexFlow: "row Wrap", justifyContent: "spaceAround" }}>

						<Card.Img variant="top" src={playVideo1} />
						<Card.Text>
							{clip.title}
						</Card.Text>
						<Button key={index + 1} className="me-2" onClick={() => { setVideoClip(clip); handleShow(); }}>

							Play Clip
						</Button>

						<Modal show={show} onHide={() => setShow(false)}>
							<Modal.Header closeButton>
								<p>{videoClip.title}</p>
							</Modal.Header>
							<Modal.Body style={{ width: "100%" }}>   {
								<ReactPlayer autoPlay={true} width="100%"
									controls={true} url={videoClip ? videoClip.videoUrl : null} />}
							</Modal.Body>
							Posted by {videoClip.postedBy} on
							{moment(videoClip.createdAt).format(' DD - MM - YYYY')}
							<hr />
							<div style={{ padding: "10px", fontSize: "10px", justifyContent: "justify" }}>
								Clip Info: <br /> {videoClip.desc}
							</div>

						</Modal>
						<Card.Footer className="text-muted">

						</Card.Footer>
					</Card>)}




				</>
			</div></>
	);
}


