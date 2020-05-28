import React from 'react';
import Message from '../components/message'
import MessageForm from '../components/forms/MessageForm'

const populateMessages = messages => {
    return messages.map(message => {
        return <Message key={message.id} message={message} />
    })
}

const MessageContainer = (props) => {

    const {title, description, messages} = props.activeConversation

    return (
        <div>
            <h4>{title}</h4>
            <h5>{description}</h5>
            {populateMessages(messages)}
            <div className="divider"></div>
            <MessageForm onAddMessage={props.onAddMessage} />
        </div>
    )
}

export default MessageContainer