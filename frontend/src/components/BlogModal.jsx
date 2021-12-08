import React from 'react'
import "./BlogModal.css"

function BlogModal(props) {
    if(!props.show){
        return null
    }

    return (
            <div className="modal" id="modal">
                <div className="main-content">

                <button onClick={props.closeHandler}>
                    close
                </button>
                <div className="modal-header">

                        </div>
                        <div className="modal-body">
                            <h4>{props.userName}</h4>
                        <p>{props.content}</p>
                </div>
                <div className="modal-footer">
                </div>
                </div>
        </div>
       
    )
}

export default BlogModal
