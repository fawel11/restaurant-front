<template>
   
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
</template>


<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
    name: 'Dashboard',
    computed: {
        ...mapState(["allFoods"]),


    },
    data() {
        return {
            showOrderDetails: false,
        }
    },

    created() {
        //  this.getAllBills();

    },

    mounted: function () {
        // this.autoUpdate();
    },

    beforeUnmount() {
        clearInterval(this.interval)
    },

    methods: {
        async getAllBills() {
            this.allBills = (await axios.get('/billstatus')).data;
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

    },
}
</script>
