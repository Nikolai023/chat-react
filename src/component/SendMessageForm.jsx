import React, { Component } from "react";
import Session from "../session/Session";
import DAO from "../dao/DAO";

class SendMessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createMessage = this.createMessage.bind(this)
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="chat-form" onSubmit={this.createMessage}>
                <input className="chat-form-input"
                       aria-label="Ваше сообщение"
                       placeholder="Напишите что-нибудь"
                       value={this.state.message}
                       onChange={this.handleChange}
                       required>
                </input>
                <button className="chat-form-button"
                        type="submit">
                    Отправить
                </button>
            </form>
        )
    };

    createMessage() {
        const message = {
            ownerId: Session.sessionUser,
            content: this.state.message
        };
        DAO.addMessage(message);
    }
}

export default SendMessageForm;