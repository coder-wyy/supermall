<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        /*设置nav-bar下阴影*/
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }

    .left, .right {
        width: 60px;
    }

    /* 左右宽度设定后，设置flex为1，会自动填充中间的剩余宽度*/
    .center {
        flex: 1;
        text-align: center;
    }
</style>