import http from "../http-common";
import authHeader from './auth-header';
class RecipeDataService {
    getAll() {
        return http.get("/recipes");
    }

    get(idrecipes) {
        return http.get(`/recipes/${idrecipes}`, { headers: authHeader() });
    }

    create(data) {
        return http.post("/recipes", data);
    }

    // update(id, data) {
    //     return http.put(`/recipes/${id}`, data);
    // }

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
