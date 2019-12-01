export default class UIDGenerator {
    static current = 0;

    static getOrCreateSessionUserId() {
        let id = localStorage.getItem("user_id");
        if (!id) {
            id = ++this.current;
            localStorage.setItem("user_id", id.toString())
        }
        return id;
    }
}