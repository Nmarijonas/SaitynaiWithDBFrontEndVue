import http from "../http-common";
import axios from "axios";

const http_link = "https://back-end-recipessite.herokuapp.com/api/";
// const http_link = "http://localhost:8080/api/"

class CommentDataService {

    create(idusers, idrecipes, data, authHeader) {
        const headers = authHeader;
        return axios.post(http_link + `users/${idusers}/recipes/${idrecipes}/comments`, data,
            {headers})
    }

    getAllRecipeComments(idrecipes) {
        return http.get(`/recipes/${idrecipes}/comments`);
    }

    getIndividualRecipeComment(idusers, idrecipes, commentId) {
        return http.get(`users/${idusers}/recipes/${idrecipes}/comments/${commentId}`)
    }

    deleteComment(idusers, idrecipes, commentId, authHeader) {
        const headers = authHeader;
        return axios.delete(http_link + `users/${idusers}/recipes/${idrecipes}/comments/${commentId}`,
            {headers})
    }

    updateComment(idusers, idrecipes, commentId, data, authHeader) {
        const headers = authHeader;
        return axios.put(http_link + `users/${idusers}/recipes/${idrecipes}/comments/${commentId}`, data,
            {headers})
    }
}

export default new CommentDataService();
