import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/app-react",
        name: "Home",
        component: Home,
        children: [
            {
                path: "about",
                name: "About",
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ "../views/About.vue");
                }
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/",
    routes
});

export default router;
