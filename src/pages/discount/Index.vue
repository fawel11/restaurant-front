<template>
    <div class="promotions">

        <div class="table-responsive">
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <td colspan="5">
                           
                            <router-link
                                :to="{ name: 'admin-discount-add' }" type="button"
                                class="btn btn-info btn-sm">Add discount</router-link>
                        </td>
                    </tr>
                    <tr class="bg-light-gray">
                        <th class="text-uppercase">S/L</th>
                        <th class="text-uppercase">Type</th>
                        <th class="text-uppercase">Amount</th>
                        <th class="text-uppercase">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index ) in responseObj.data" :key="item.id">
                        <td class="align-middle">{{ index + 1 }}</td>
                        <td> {{ item.type }} </td>
                        <td> {{ item.value }} </td>
                        <td>
                           

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



    </div>
</template>

<script>
export default {
    name: "Discount",

    data() {
        return {
            requestObj: {
                searchText: "",
                paginate: 10,
            },
            responseObj: {}
        }
    },
    methods: {
        async getDiscountList() {
            try {
                this.$store.dispatch("discount/fetchDiscountList", this.requestObj).then(
                    (data) => {
                        console.log(data);
                        this.responseObj = data
                    },
                    (error) => {
                        this.$toast.fire({
                            icon: "error",
                            title: error.message,
                        });
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {
        this.getDiscountList();
    }
}
</script>

<style scoped></style>