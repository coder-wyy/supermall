<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar {
        background-color: #f2f2f2;
        /*flex布局*/
        display: flex;
        /*设置tab-bar在屏幕下方*/
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        /*设置tab-bar上方1px阴影*/
        box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
    }
</style>
