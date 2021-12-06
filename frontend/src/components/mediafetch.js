import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Row, Col, ListGroup, Card, ListGroupItem, Alert } from "react-bootstrap"
import axios from "axios"

const baseUrl = "http://localhost:9000/galleries/getClips"

function YoutubeEmbed() {

	/* 	const [data, setData] = useState({title: "", desc: "",videoUrl: "", createdAt: "",email: "zhonleig@gmail.com"}) For post requests*/

	let [data, setData] = useState({ title: "", desc: "", postedBy: "", videoUrl: "" })
	const [videoData, setVideoData] = useState([])
	const [clipData, setClipData] = useState()

	useEffect(() => {
		axios.get(baseUrl)
			.then(response => {
				setVideoData(response.data)

			}
			)
			.catch(error => {
				error.message = "Error getting request"
			});

	}, []);
	/* console.log(videoData)  */

	useEffect(() => {
		videoData.map((clip, index) => {
			console.log("CLIPS", clip.videos)
			return setClipData(clip.videos)

		})
	}, [clipData, videoData], [])

	console.log("CLIPDATA ", clipData)
let vidDat= []
for (let index = 0; index < clipData.length; index++) {
	vidDat = clipData[index];

	console.log(vidDat)
	
}
	return (<div>
		<h1>YOULEARN !</h1>

		<div className="ReactPlayer" style={{ display: 'flex', flexDirection: 'row' }}>
			<Card style={{ width: '42rem' }}>

				<Card.Body>
					<Card.Title>{clipData ? <p>Title: {clipData[2].title}</p> : null}</Card.Title>
					{clipData ? <ReactPlayer url={clipData[2].videoUrl} /> : null}
				</Card.Body>

				<ListGroup className="list-group-flush">
					<ListGroupItem style={{ marginLeft: "2%", backgroundColor: "#e6d1da" }}>
						<Card.Img variant="top" style={{
							width: '10%', height: '20%',
							borderRadius: '10%'
						}} src="http://placekitten.com/g/150/150" />
						{clipData ? <p >{clipData[2].postedBy}</p> : null}
						{clipData ? <p> Date: {clipData[2].createdAt}</p> : null}
					</ListGroupItem>

					<ListGroupItem>{clipData ? <p>Description: {clipData[2].desc}</p> : null}</ListGroupItem>

				</ListGroup>
				<Card.Body>
					<h3>Production note:</h3>
					<p style={{ color: 'red' }}>
						Viewers' comments will appear here
					</p>
				</Card.Body>
			</Card>
			<div>
				<Card style={{ width: '30rem', height: '50rem', backgroundColor: 'skyBlue' }}>
					<Card.Header>Related Videos</Card.Header>
					<ListGroup variant="flush">
						<ListGroup.Item>Cras justo odio</ListGroup.Item>
						<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
						<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
					</ListGroup>
				</Card>
			</div>
		</div>



	</div>)






}

export default YoutubeEmbed;