<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">首页</div>
        </nav-bar>
        <home-swiper :banners="banner"></home-swiper>
        <recommend-view :recommends="recommend"></recommend-view>
        <feature></feature>
        <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
        <goods :goods="goods.new.data"></goods>
    </div>
</template>

<script>
    import HomeSwiper from "./childrenComponents/HomeSwiper";
    import RecommendView from "./childrenComponents/RecommendView";
    import Feature from "./childrenComponents/Feature";

    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";
    import Goods from "components/content/goods/Goods";

    import {getHomeMultiData, getGoodsData} from "network/home";


    export default {
        name: "home",
        data() {
          return {
              banner: [],
              recommend: [],
              goods: {
                  new: {page: 0, data: []},
                  sell: {page: 0, data: []},
                  pop: {page: 0, data: []},
              }
          }
        },
        components: {
            HomeSwiper,
            RecommendView,
            Feature,
            NavBar,
            TabControl,
            Goods
        },
        created() {
            // 1. 请求轮播图数据
            this.getHomeMultiData();

            // 2. 请求商品数据
            this.getGoodsData("sell");
            this.getGoodsData("new");
            this.getGoodsData("pop");
        },
        methods: {
            getHomeMultiData() {
                getHomeMultiData()
                    .then(res => {
                        this.banner = res.data.banner.list;
                        this.recommend = res.data.recommend.list;
                    })
                    .catch(error => {})
            },
            getGoodsData(type) {
                const page = this.goods[type].page + 1;
                getGoodsData(type, page)
                    .then(res => {
                        console.log(res);
                        this.goods[type].data = this.goods[type].data.concat(res.data.list);
                        this.goods[type].page += 1;
                    })
                    .catch(error => {})
            }
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
        z-index: 10;
    }
</style>