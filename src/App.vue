<template>
    <component :is="this.$route.meta.layoutComponent">
        <slot />
    </component>
</template>

<script>
// import { mapState } from 'vuex';
export default {
    name: 'App',
}
</script>

<style>
@import "./assets/css/global_style.css";
@import "./assets/css/menu.css";
</style>

