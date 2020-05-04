<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <!-- 通过path参数传入组件路径  -->
      <tab-bar-item path="/home" active-color="red">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="blue">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" active-color="blue">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="blue">
      <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
      <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
    import router from "./router";
    import TabBar from "./components/common/tabbar/TabBar";
    import TabBarItem from "./components/common/tabbar/TabBarItem";

    export default {
      name: 'App',
      router,
      components: {
        TabBar,
        TabBarItem
      }
    }
</script>

<style>
    @import "assets/css/style.css";

</style>
