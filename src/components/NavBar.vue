<template>
    <div class="header">
        <router-link @click="scrollToTop()" to="/" class="logo"><img src="../assets/images/taco-logo.png" alt="" />QFood
        </router-link>

        <nav class="navbar">
            <router-link @click="scrollToTop()" to="/">home</router-link>
            <router-link @click="scrollToTop()" to="/about">about</router-link>
            <router-link @click="scrollToTop()" to="/promotions">promotions</router-link>
            <router-link @click="scrollToTop()" to="/menu">menu</router-link>
            <router-link @click="scrollToTop()" to="/table">table</router-link>
        </nav>

        <div class="icons">
            <div id="menu-btn" class="fas fa-bars menu-btn" @click="showNav"></div>
            <router-link @click="scrollToTop()" to="/cart">
                <div class="fas fa-shopping-cart cart"></div>
            </router-link>

            <div v-if="!isLoggedIn" class="fas fa-user account" @click="showLog">
                <ul class="drop-down-select">
                    <li>
                        <router-link @click="scrollToTop()" to="/login">login</router-link>
                    </li>
                    <li>
                        <router-link @click="scrollToTop()" to="/register">register</router-link>
                    </li>
                </ul>

            </div>

            <div v-else class="fas fa-user account" style="background: #f38609;color: white;" @click="showLog">
                <ul class="drop-down-select">
                    <li>
                        <router-link @click="scrollToTop()" to="/admin/dashboard">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link @click="scrollToTop()" to="/myorder">my orders</router-link>
                    </li>
                    <li>
                        <router-link @click="handleLogout" to="/">logout</router-link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    computed: {
        isLoggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },

        showNav: function () {
            let navbar = document.querySelector('.header .navbar');
            navbar.classList.toggle('active');
        },

        showLog: function () {
            let mq = window.matchMedia("(max-width: 768px)");
            if (mq.matches) {
                let log = document.querySelector('.drop-down-select');
                log.classList.toggle('active');
            }
        },

        handleScroll: function () {
            let navbar = document.querySelector('.header .navbar');
            navbar.classList.remove('active');
            let log = document.querySelector('.drop-down-select');
            log.classList.remove('active');
        },

        handleLogout: function () {
            this.$store.dispatch("auth/logout").then(
                () => {
                    this.$router.push("/");
                }, (error) => {
                    console.log(error);
                    this.errors.push(error.message);
                }
            );
        },
    }
}
</script>

<style scoped>
</style>