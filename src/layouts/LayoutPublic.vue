<template>
    <div>
        <NavBar />
        <div class="auth-wrapper">
            <div class="auth-inner">
                <router-view></router-view>
            </div>
        </div>
        <FooterComponent />

    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { mapActions } from 'vuex';
// import { mapState } from 'vuex';
export default {
    name: "PublicLayout",
    components: {
        NavBar,
        FooterComponent
    },

    created() {
        this.getFoodsData()
    },

    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },

    methods: {
        ...mapActions(["getFoodsData"])
    }
}
</script>




 