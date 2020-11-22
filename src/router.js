import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/recipes",
            name: "recipes",
            component: () => import("./components/RecipesList"),
        },
        {
            path: "/recipes/:id",
            name: "recipe-details",
            component: () => import("./components/Recipe")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./components/Login")
        }
    ]
});
