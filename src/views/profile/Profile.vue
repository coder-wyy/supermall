<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center">我的</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar"

    export default {
        name: "Profile",
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: white;
    }
</style>