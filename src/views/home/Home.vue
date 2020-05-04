<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">首页</div>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
        <recommend-view :recommends="recommend"></recommend-view>
        <feature></feature>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar"
    import HomeSwiper from "./childrenComponents/HomeSwiper";
    import RecommendView from "./childrenComponents/RecommendView";
    import Feature from "./childrenComponents/Feature";

    import {getHomeMultiData} from "network/home";


    export default {
        name: "home",
        data() {
          return {
              banner: [],
              recommend: []
          }
        },
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            Feature
        },
        created() {
            getHomeMultiData()
                .then(res=>{
                    console.log(res);
                    this.banner = res.data.banner.list;
                    this.recommend = res.data.recommend.list;
                })
                .catch(error=>{

                })
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: white;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 10;

    }
</style>