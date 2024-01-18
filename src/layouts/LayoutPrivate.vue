<template>
    <div>
        <NavBar />
        <div class="container">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>

        <PrivateFooter />
    </div>
</template>

<script>
import NavBar from '@/layouts/components/PrivateNavBar.vue';
import PrivateFooter from '@/layouts/components/PrivateFooter.vue';
import { mapActions } from 'vuex';
// import { mapState } from 'vuex';
export default {
    name: "PrivateLayout",
    components: {
        NavBar,
        PrivateFooter
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




 