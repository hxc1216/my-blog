import { createRouter, createWebHistory } from "vue-router";

const Layout = () => import("../views/layout/index.vue")

let routes = [
  {
    path: "/",
    component:Layout,
    children:[
      {
        path:"",
        name:"home",
        component: () => import("../views/home/index.vue"),
        meta:{
          title:"首页"
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
