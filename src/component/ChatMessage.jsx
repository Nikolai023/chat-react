import React, {Component} from 'react';
import Session from "../session/Session";
import DAO from "../dao/DAO";

class ChatMessage extends Component {

    constructor(props) {
        super(props);
        this.message = props.message;
    }

    render() {
        let myId = Session.getOrCreateSessionUserId();
        let messageOwnerId = this.message.ownerId;
        let isMyMessage = messageOwnerId === myId;
        let className = "chat-message" + (!isMyMessage ? ' chat-message__left' : '');
        let messageContent = this.message.content;
        let deleteButton = (
            isMyMessage
                ? <button className="chat-message-button"
                          type="button"
                          onClick={() => this.deleteMessage()}>
                    Удалить
                </button>
                : ''
        );
        return (
            <div className={className} tabIndex="0">
                <span className="chat-message-name">{messageOwnerId}</span>
                <p className="chat-message-text">{messageContent}</p>
                {deleteButton}
            </div>
        )
    }

    deleteMessage() {
        DAO.deleteMessage(this.message._id, this.message._rev);
    }
}

export default ChatMessage;