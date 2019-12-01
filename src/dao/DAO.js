import PouchDB from 'pouchdb';
import Session from "../session/Session";

class DAO {
    static messagesDb = new PouchDB('http://localhost:5984/messages');
    static usersDb = new PouchDB('http://localhost:5984/users');

    static getAllMessages() {
        return DAO.messagesDb.allDocs({ include_docs: true, descending: true });
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