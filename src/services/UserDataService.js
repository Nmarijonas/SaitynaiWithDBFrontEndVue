// import http from "../http-common";
import axios from "axios";

// const http_link = "http://localhost:8080/api/"
const http_link = "https://back-end-recipessite.herokuapp.com/api/";

class UserDataService {
    getAll(authHeader) {
        const headers = authHeader;
        return axios.get(http_link + `users`, {headers});
    }

    get(idusers, authHeader) {
        const headers = authHeader;
        return axios.get(http_link + `users/${idusers}`, {headers});
    }

    deleteUser(idusers, authHeader) {
        const headers = authHeader;
        return axios.delete(http_link + `users/${idusers}`,
            {headers})
    }

    updateUser(idusers, data, authHeader) {
        const headers = authHeader;
        return axios.put(http_link + `users/${idusers}`, data,
            {headers})
    }

    createUser(data, authHeader) {
        const headers = authHeader;
        return axios.post(http_link + `users`, data,
            {headers})
    }
}

export default new UserDataService();