import React, { Component, Fragment } from "react";
import ChatMessage from "./ChatMessage";
import SendMessageForm from "./SendMessageForm";
import DAO from "../dao/DAO";

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        DAO.getAllMessages()
            .then((docs) => docs.rows.map((row) => row.doc))
            .then(messages => {
                this.setState({
                    messages: messages
                })
            })
    }

    renderSubs() {
        return this.state.messages.map(sub =>
            <Fragment key={sub._id}>
                <ChatMessage message={sub}/>
            </Fragment>
        );
    }

    render() {
        return (
            <section className="chat">
                <div className="chat-content">
                    {this.renderSubs()}
                </div>
                <SendMessageForm/>
            </section>
        )
    };
}

export default Chat;