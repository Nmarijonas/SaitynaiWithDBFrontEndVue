import http from "../http-common";
import axios from "axios";

const http_link = "https://back-end-recipessite.herokuapp.com/api/";
// const http_link = "http://localhost:8080/api/"

class RecipeDataService {

    getAll() {
        return http.get("/recipes/published");
    }

    getRecipeOwnerId(idrecipes, authHeader) {
        const headers = authHeader;
        return axios.get(http_link + `recipes/${idrecipes}/user`, {headers});
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
        const headers = authHeader;
        return axios.post(http_link + `users/${idusers}/recipes`, data,
            {headers});
    }

    update(idusers, idrecipes, data, authHeader) {
        const headers = authHeader;
        return axios.put(http_link + `users/${idusers}/recipes/${idrecipes}`, data,
            {headers});
    }

    delete(idusers, idrecipes, authHeader) {
        const headers = authHeader;
        return axios.delete(http_link + `users/${idusers}/recipes/${idrecipes}`,
            {headers});
    }
}

export default new RecipeDataService();
