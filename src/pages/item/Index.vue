<template>
    <div class="promotions">

        <div class="table-responsive">
            <table class="table table-bordered text-center">
                <thead>
                    <tr class="bg-light-gray">
                        <th class="text-uppercase">S/L</th>
                        <th class="text-uppercase">Name</th>
                        <th class="text-uppercase">Category</th>
                        <th class="text-uppercase">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index ) in responseObj.data" :key="item.id">
                        <td class="align-middle">{{ index + 1 }}</td>
                        <td> {{ item.name }} </td>
                        <td> {{ item.category?.name }} </td>
                        <td>
                            <router-link :to="{ name: 'admin-discount-add', params: { itemId: item.id } }" type="button"
                                class="btn btn-info btn-sm">Add discount</router-link>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



    </div>
</template>

<script>
export default {
    name: "Category",

    data() {
        return {
            requestObj: {
                searchText: "",
                paginate: 10,
                categoryId: this.$route.params.categoryId
            },
            responseObj: {}
        }
    },
    watch: {
        '$route.params.categoryId'(newCategoryId) {
            this.requestObj.categoryId = newCategoryId;
            this.getItemList();
        }
    },

    methods: {
        async getItemList() {
            try {
                this.$store.dispatch("item/fetchItemList", this.requestObj).then(
                    (data) => {
                        console.log(data);
                        this.responseObj = data
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {
        this.getItemList();
    }
}
</script>

<style scoped></style>