import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Alert, Card, Button } from "react-bootstrap"
import axios from "axios"
import moment from "moment"

const baseUrl = "http://localhost:9000/galleries/getClips"

function EmbeddedMedia() {

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

	function VideoPlayer() {
		return (
			<div style={{ display: 'flex' }}>

				<hr />
				<Alert style={{ width: '50%', margin: 'auto' }}>
					<Alert.Heading>{videoData ? videoData.map(x => x.videoUrl == vidUrl ? <p>{x.title}</p> : null) : null}</Alert.Heading>
					<p>{<ReactPlayer width="100%" muted={true} autoplay={true}
						onReady={true} controls={true} url={vidUrl} />}</p>
					<hr />
					<p className="mb-0">
						<Card.Img variant="top" style={{
							width: '10%', height: '20%',
							borderRadius: '10%'
						}} src="http://placekitten.com/g/150/150" />
						{videoData ? videoData.map(x => x.videoUrl === vidUrl ?
							<>
								<p>{x.postedBy}</p>
								<p>{moment(x.createdAt).format(' DD - MM - YYYY')}</p>
								<hr />
								<p>{x.desc}</p>
							</> : null)
							: null}
					</p>
				</Alert>
				<Card style={{ width: '35rem' }}>
					<Card.Body>
						<Card.Title>Playlist</Card.Title>
						<Card.Text>
							{videoData ? videoData.map((item, i) => <li key={item + i} onClick={() => setVidUrl(item.videoUrl)}  >{item.title}</li>) : null}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
	return (<div>
		<h1>YOULEARN !</h1>
		<hr />
		<VideoPlayer />
	</div>)
}
export default EmbeddedMedia;