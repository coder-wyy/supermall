<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(value, key) in titles" @click="itemClick(value, key)">
            <span :class="{'active-item': value === currentTitle}">{{value}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data() {
          return {
              currentTitle: "流行"
          }
        },
        props: {
            titles: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            itemClick(title, key) {
                this.currentTitle = title;
                this.$emit("tabChange", key);
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