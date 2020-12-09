import http from "../http-common";

class UserDataService {
    getAll() {
        return http.get("/users");
    }

    get(idusers) {
        return http.get(`/users/${idusers}`);
    }

    // create(data) {
    //     return http.post("/recipes", data);
    // }
}

export default new UserDataService();