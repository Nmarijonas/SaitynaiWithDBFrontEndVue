import http from "../http-common";
import axios from "axios";

class RecipeDataService {

    getAll() {
        return http.get("/recipes");
    }

    getIndividualRecipes(idusers) {
        return http.get(`/users/${idusers}/recipes`);
    }

    getIndividual(idusers, idrecipes) {
        return http.get(`/users/${idusers}/recipes/${idrecipes}`);
    }

    get(idrecipes) {
        return http.get(`/recipes/${idrecipes}`);
    }

    create(idusers, data, authHeader) {
        const http = "https://back-end-recipessite.herokuapp.com/api/";
        const headers = authHeader;
        return axios.post(http + `users/${idusers}/recipes`, data,
            {headers});
    }

    update(idusers, idrecipes, data, authHeader) {
        const http = "https://back-end-recipessite.herokuapp.com/api/";
        const headers = authHeader;
        return axios.put(http + `users/${idusers}/recipes/${idrecipes}`, data,
            {headers});
    }

    delete(idusers, idrecipes, authHeader) {
        const http = "https://back-end-recipessite.herokuapp.com/api/";
        const headers = authHeader;
        return axios.delete(http + `users/${idusers}/recipes/${idrecipes}`,
            {headers});
    }

// delete(id) {
//     return http.delete(`/recipes/${id}`);
// }

// deleteAll() {
//     return http.delete(`/recipes`);
// }

// findByTitle(title) {
//     return http.get(`/recipes?title=${title}`);
// }
}

export default new RecipeDataService();
