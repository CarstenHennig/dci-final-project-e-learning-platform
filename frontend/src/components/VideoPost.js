import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Row, Col, ListGroup, Card, ListGroupItem, Alert } from "react-bootstrap"
import axios from "axios"
import moment from "moment"

const baseUrl = "http://localhost:9000/galleries/getClips"

function YoutubeEmbed() {

	let [videoData, setVideoData] = useState([])
	useEffect(() => {
		axios.get(baseUrl)
			.then(response => {
				const clips = response.data
				console.log("CLIPS", clips)
				let gallery = []
				clips.forEach((video) => {
					gallery = gallery.concat(video.videos)
					console.log("GALLERY", gallery)
				})
				setVideoData(gallery)
				console.log(gallery)
			}
			)
			.catch(error => {
				error.message = "Error getting request"
			});

	}, []);
	console.log("VIDEODATA: ", videoData)


	const data = videoData.length ? videoData[3] : null

	return (<div>
		<h1>YOULEARN !</h1>

		<div className="ReactPlayer" style={{ display: 'flex', flexDirection: 'row' }}>
			<Card style={{ width: '42rem' }}>

				<Card.Body>
					<Card.Title>{data ? <p>Title: {data.title}</p> : null}</Card.Title>
					{data ? <ReactPlayer url={data.videoUrl} /> : null}
				</Card.Body>

				<ListGroup className="list-group-flush">
					<ListGroupItem style={{ marginLeft: "2%", backgroundColor: "#e6d1da" }}>
						<Card.Img variant="top" style={{
							width: '10%', height: '20%',
							borderRadius: '10%'
						}} src="http://placekitten.com/g/150/150" />
						{data ? <p >{data.postedBy}</p> : null}
						{data ? <p> Date: {moment(data.createdAt).format('YYYY : MM : DD : HH :mm')}</p> : null}
					</ListGroupItem>

					<ListGroupItem>{data ? <p>Description: {data.desc}</p> : null}</ListGroupItem>

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
						<ListGroup.Item> </ListGroup.Item>
						<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
						<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
					</ListGroup>
				</Card>
				{/*  {data.map((item,key)=>
               { return
                <tr key={key}>
                <td>{item.title}</td>
                <td>{item.videoUrl}</td>
                <td>{item.desc}</td>
              </tr> */}

				{/*  })} */}
			</div>
		</div>



	</div>)

}

export default YoutubeEmbed;