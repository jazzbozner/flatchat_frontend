import React, { Component, Fragment } from 'react';
import NavBar from './navBar'
import ConversationForm from '../components/forms/conversationForm'
import MessageContainer from '../containers/messageContainer';
import Cable from '../components/cable';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT, HEADERS } from '../constraints/index'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
          conversations: [],
          activeConversation: null
        }
      }
    
      componentDidMount = () => {
        fetch(`${API_ROOT}/conversations`)
        .then(res => res.json())
        .then(json => this.setState({conversations: json}))
      }
    
      handleClick = activeConversation => {
        this.setState({activeConversation: activeConversation})
      }
    
      handleReceivedConversation = res => {
        const { conversation } = res
        this.setState({conversations: [...this.state.conversations, conversation]})
      }
    
      handleReceivedMessage = res => {
        console.log("Here I am", res)
        const {message} = res
        this.setState(prevState => {
          const conversations = [...prevState.conversations]
          const convo = conversations.find(convo => convo.id === message.conversation_id)
          convo.messages = [...convo.messages, message]
          this.setState({conversations})
        })
      }
    
      onAddMessage = (message) => {
        fetch("http://localhost:3000/messages", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            message: {
              text: message,
              conversation_id: this.state.activeConversation.id,
              user_id: 13
             } //hard coded - change with auth
          })
        })
      }

      onAddConversation = (conversation) => {
        fetch("http://localhost:3000/conversations", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
              conversations: {
              
              user_id: 13
             } //hard coded - change with auth
          })
        })
      }

      showConversationForm = () => {
        console.log("conversation form")
      }

      logout = () => {
        console.log('logout')
      }

      
      render() {
          const {conversations, activeConversation} = this.state
        return(
            <Fragment>
                <NavBar 
                  conversations={conversations} 
                  handleClick={this.handleClick}
                  onshowConversationForm={this.showConversationForm}
                  onLogout={this.logout}
                />
                <ActionCableConsumer 
                    channel={{channel: 'ConversationsChannel'}} 
                    onReceived={this.handleReceivedConversation} 
                  />
                  {this.state.conversations.length ? (
                    <Cable conversations={conversations} handleReceivedMessage={this.handleReceivedMessage} />
                  ): null}
                {activeConversation ?
                    <MessageContainer activeConversation={activeConversation} onAddMessage={this.onAddMessage} />
                : null}
            </Fragment>
        )
      }
    
}

export default Home

Home.defaultProps = {
  conversations: [],
  activeConversation: null
}