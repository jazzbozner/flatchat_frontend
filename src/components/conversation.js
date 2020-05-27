import React from 'react';


const Conversation = (props) => {

    const { handleClick, conversation } = props

    return (
        <li onClick={() => handleClick(conversation)}><a className="waves-effect" href="#!">{conversation.title}</a></li>
    )

}

export default Conversation;