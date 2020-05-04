import PouchDB from 'pouchdb';
import Session from "../session/Session";

class DAO {
    static USER_NAME = "admin";
    static USER_PASSWORD = "password"

    static messagesDb = new PouchDB(`http://${DAO.USER_NAME}:${DAO.USER_PASSWORD}@localhost:5984/messages`);
    static usersDb = new PouchDB(`http://${DAO.USER_NAME}:${DAO.USER_PASSWORD}@localhost:5984/users`);

    static getAllMessages() {
        return DAO.messagesDb.allDocs({include_docs: true, descending: true});
    }

    static addMessage(message) {
        message.ownerId = Session.getOrCreateSessionUserId();
        message.creationTime = new Date().getTime();
        DAO.messagesDb.post(message)
    }

    static deleteMessage(id, rev) {
        DAO.messagesDb.remove(id, rev);
    }
}

DAO.messagesDb.info();
DAO.usersDb.info();

export default DAO