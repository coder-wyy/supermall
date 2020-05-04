<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(title,index) in titles" @click="itemClick(index)">
            <span :class="{'active-item': index === currentIndex}">{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data() {
          return {
              currentIndex: 0
          }
        },
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        background-color: #ffffff;
    }

    .tab-control-item {
        flex: 1;
    }

    .active-item {
        border-bottom: 2px solid pink;
    }

</style>