import http from "../http-common";
import authHeader from './auth-header';

class UserDataService {
    getAll() {
        return http.get("/users", {headers: authHeader()});
    }

    get(idusers) {
        return http.get(`/users/${idusers}`, {headers: authHeader()});
    }

    create(data) {
        return http.post("/recipes", data);
    }
}

export default new UserDataService();