
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js"
import React, { Component } from 'react'
import draftToHtml from "draftjs-to-html"

export default class TextEditor extends Component {
	state = {
		editorState: EditorState.createEmpty()
	}
	onEditorStateChange = (editorState) => {
		this.setState({editorState: editorState})
	}

	render() {
		const { editorState } = this.state
		console.log(draftToHtml(convertToRaw (editorState.getCurrentContent())))
		return (
			<div className="editor">
				<Editor
					editorState={editorState}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={this.onEditorStateChange}
				/>

				<textarea
				value ={draftToHtml(convertToRaw (editorState.getCurrentContent()))}></textarea>
			</div>
		)
	}
}
