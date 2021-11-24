import React from 'react'
import axios from 'axios'

export default function WriteArticle () {
 
	const HandleChange = (e)=> {
		e.preventDefault()



	}
	const handleClick= (e)=> {
		e.preventDefault()
	}
	const formData = new FormData()
	axios.post("http://localhost:9000/postBlog", formData)

	return (
		<div>
			<form onChange={HandleChange} >
				<textarea name="textarea" placeholder="Write our text here"/>			
			<button type="submit" onClick={handleClick}>POst Article</button>


			</form>
		</div>
	)
}
