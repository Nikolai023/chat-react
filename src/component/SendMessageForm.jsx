import React, { Component } from "react";
import Session from "../session/Session";
import DAO from "../dao/DAO";

class SendMessageForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({ message: event.target.value });
    };

    handleSubmit = (event)  => {
        event.preventDefault();
    };

    createMessage = () => {
        if(this.state.message.trim() === '')
            return;
        this.setState({message: ''});
        const message = {
            ownerId: Session.sessionUser,
            content: this.state.message
        };
        DAO.addMessage(message);
    };

    render() {
        return (
            <form className="chat-form" onSubmit={this.handleSubmit}>
                <input className="chat-form-input"
                       aria-label="Ваше сообщение"
                       placeholder="Напишите что-нибудь"
                       value={this.state.message}
                       onChange={this.handleChange}
                       >
                </input>
                <button className="chat-form-button"
                        onClick={this.createMessage}
                        type="submit">
                    Отправить
                </button>
            </form>
        )
    };
}

export default SendMessageForm;
