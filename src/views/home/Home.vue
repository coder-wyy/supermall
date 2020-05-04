<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center">首页</div>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar"
    import HomeSwiper from "./childrenComponents/HomeSwiper";

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
            HomeSwiper
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
    .home-nav {
        background-color: var(--color-tint);
        color: white;
    }
</style>