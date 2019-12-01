export default class UIDGenerator {

    static getOrCreateSessionUserId() {
        let id = localStorage.getItem("user_id");
        if (!id) {
            id = new Date().getTime();
            localStorage.setItem("user_id", id.toString())
        }
        return id;
    }
}