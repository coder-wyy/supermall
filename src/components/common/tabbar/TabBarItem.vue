<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive">
            <slot name="item-icon-active"></slot>
        </div>
        <div v-else>
            <slot name="item-icon"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: "red"
            }
        },
        data() {
        },
        computed: {
            // 选中时，修改图片
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            // 选中时，修改字体颜色
            activeStyle() {
                return this.isActive ? {color: this.activeColor}: {}
            }
        },
        methods: {
            itemClick() {
                if (this.$route.path !== this.path) {
                    this.$router.replace(this.path);
                }
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        text-align: center;
        /*flex布局*/
        flex: 1;
        /*一般移动端tab-bar高度为49px*/
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img {
        margin-top: 2px;
        margin-bottom: 2px;
        width: 24px;
        height: 24px;
        /*取消img标签默认的下边3px距离*/
        vertical-align: middle;
    }
</style>
