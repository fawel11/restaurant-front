<template>
    <div class="admin-container">
        <div class="d-flex justify-content-between">
            <h1>Hello Admin!</h1>
            <button class="btn" @click="handleLogout()">Logout</button>
        </div>

        <div class="table-responsive">
            <!-- PROJECT TABLE -->
            <table class="table colored-header datatable project-list">
                <thead>
                    <tr>
                        <th>Bill Id</th>
                        <th>User Id</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>When</th>
                        <th>Paid</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
    name: 'Dashboard',
    computed: {
        ...mapState(["allFoods", "isLoggedIn"]),

       
    },
    data() {
        return {
            showOrderDetails: false,
        }
    },

    created() {
        this.getAllBills();
        if (!this.admin) {
            this.$router.push("/");
        }
    },

    mounted: function () {
        this.autoUpdate();
    },

    beforeUnmount() {
        clearInterval(this.interval)
    },

    methods: {
         ...mapMutations(["setLogout"]),
        async getAllBills() {
            this.allBills = (await axios.get('/billstatus')).data;
        },

        handleLogout: function () {
            this.setLogout();
            this.$router.push("/");
        },

    },
}
</script>

<style scoped>
.admin-container {
    background-color: #fff;
    height: 100vh;
    padding: 2rem 9%;
    font-size: 16px;
}

.project-list>tbody>tr>td {
    padding: 12px 8px;
}

.project-list>tbody>tr>td .avatar {
    width: 22px;
    border: 1px solid #CCC;
}

.table-responsive {
    margin-top: 8vh;
}

.action-btn,
.cancel-btn,
.paid-btn {
    width: 100px;
    height: 25px;
    color: white;
    text-transform: capitalize;
}

.action-btn {
    background-color: #0da9ef;
    margin-right: 10px;
}

.cancel-btn,
.paid-btn {
    background-color: red;
}

.action-btn:hover {
    background-color: #27ae60;
}
</style>