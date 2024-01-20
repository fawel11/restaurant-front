<template>
    <div class="promotions">

        <div class="table-responsive">
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <td colspan="5">
                            <router-link :to="{ name: 'admin-category-add' }" type="button"
                                class="btn btn-primary btn-lg">New Category</router-link>
                        </td>
                    </tr>
                    <tr class="bg-light-gray">
                        <th class="text-uppercase">S/L</th>
                        <th class="text-uppercase">Name</th>
                        <th class="text-uppercase">Sub Category</th>
                        <th class="text-uppercase">Items</th>
                        <th class="text-uppercase">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category, index ) in catObj.data" :key="category.id">
                        <td class="align-middle">{{ index + 1 }}</td>
                        <td> {{ category.name }} </td>
                        <td>

                            <router-link v-if="category.children.length"
                                :to="{ name: 'admin-all-category', params: { categoryId: category.id } }" type="button"
                                class="btn btn-info btn-md"> {{ category.children.length }} Sub
                                Category</router-link>
                        </td>
                        <td>
                            <router-link v-if="category.items.length"
                                :to="{ name: 'admin-all-item', params: { categoryId: category.id } }" type="button"
                                class="btn btn-outline-primary btn-sm"> {{ category.items.length }} Items </router-link>
                        </td>
                        <td>


                            <router-link v-if="!category.items.length"
                                :to="{ name: 'admin-category-add', params: { categoryId: category.id } }" type="button"
                                class="btn btn-outline-primary btn-sm">New Sub Category</router-link>

                            <router-link v-if="!category.children.length"
                                :to="{ name: 'admin-item-add', params: { categoryId: category.id } }" type="button"
                                class="btn btn-outline-primary btn-sm">New Item</router-link>

                            <router-link
                                :to="{ name: 'admin-discount-add', params: { categoryId: category.id } }" type="button"
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
            catObj: {}
        }
    },
    watch: {
        '$route.params.categoryId'(newCategoryId) {
            this.requestObj.categoryId = newCategoryId;
            this.getCaltegoryList();
        }
    },

    methods: {
        async getCaltegoryList() {
            try {
                this.$store.dispatch("category/fetchCategoryList", this.requestObj).then(
                    (data) => {
                        console.log(data);
                        this.catObj = data
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
        this.getCaltegoryList();
    }
}
</script>

<style scoped></style>