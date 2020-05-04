<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">首页</div>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
        <recommend-view :recommends="recommend"></recommend-view>
        <feature></feature>
        <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>0</li>
        </ul>

    </div>
</template>

<script>

    import HomeSwiper from "./childrenComponents/HomeSwiper";
    import RecommendView from "./childrenComponents/RecommendView";
    import Feature from "./childrenComponents/Feature";

    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";

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
            HomeSwiper,
            RecommendView,
            Feature,
            NavBar,
            TabControl
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
    /* tab-control固定位置停止滑动 */
    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>