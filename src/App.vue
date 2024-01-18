<template>
    <div>
        <component :is="this.$route.meta.layoutComponent">
            <slot />
        </component>
    </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
    name: 'App',
}
</script>

<style>
@import "./assets/css/global_style.css";
</style>

