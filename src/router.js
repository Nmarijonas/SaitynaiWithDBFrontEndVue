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
            path: "/myRecipes",
            name: "myRecipes",
            component: () => import("./components/user_admin_view_components/user_components/IndividualRecipesList")

        },
        {
            path: "/myRecipes/:idrecipes",
            name: "myRecipe-details",
            component: () => import("./components/user_admin_view_components/user_components/IndividualRecipe")
        },
        {
            path: "/addRecipe",
            name: "add-recipe",
            component: () => import("./components/user_admin_view_components/user_components/addRecipe")
        },
        {
            path: "/updateRecipe",
            name: "update-recipe",
            component: () => import("./components/user_admin_view_components/user_components/updateRecipe")
        },
        {
            path: "/recipes/:idrecipes",
            name: "recipe-details",
            component: () => import("./components/Recipe")
        },
        {
            path: "updateComment",
            name: "update-comment",
            component: () => import("./components/user_admin_view_components/user_components/updateComment")
        },
        {
            path: "/users",
            name: "users",
            component: () => import("./components/user_admin_view_components/admin_components/usersList")
        },
        {
            path: "/users/:idusers",
            name: "user-details",
            component: () => import("./components/user_admin_view_components/admin_components/user")
        },
        {
            path: "updateUser",
            name: "update-user",
            component: () => import("./components/user_admin_view_components/admin_components/updateUser")
        },
        {
            path: "/addUser",
            name: "add-user",
            component: () => import("./components/user_admin_view_components/admin_components/addUser")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./components/guest_view_components/Login")
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("./components/guest_view_components/Signup")
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("./components/user_admin_view_components/Profile")
        },
        {
            path: "/logout",
            name: "logout",
            component: () => import("./components/user_admin_view_components/Logout")
        }
    ]
});
