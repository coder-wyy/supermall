import Vue from "vue"
import VueRouter from 'vue-router'

// 4. 懒加载导入组件
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const ShopCart = () => import("../views/shopcart/ShopCart");
const Profile = () => import("../views/profile/Profile");

// 1. 安装VueRouter插件
Vue.use(VueRouter);

// 2. 实例化VueRouter
const routes = [
  {
    path: "",
    redirect: "/home"
  },{
    path: "/home",
    component: Home
  },{
    path: "/category",
    component: Category
  },{
    path: "/shopcart",
    component: ShopCart
  },{
    path: "/profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

// 3. 导出router对象
export default router
