<template>
    <div class="goods">
        <goods-item v-for="item in goods" :item="item">
        </goods-item>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";

    export default {
        name: "Goods",
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            GoodsItem
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        padding: 2px;
    }
</style>