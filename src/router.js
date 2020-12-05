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
            component: () => import("./components/Recipe/RecipesList"),
        },
        {
            path: "/recipes/:idrecipes",
            name: "recipe-details",
            component: () => import("./components/Recipe/Recipe")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./components/Login/Login")
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("./components/Login/Signup")
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("./components/Login/Profile")
        },
        {
            path: "/logout",
            name: "logout",
            component: () => import("./components/Login/Logout")
        }
    ]
});
