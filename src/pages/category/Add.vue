<template>
    <div class="row ">
        <div class="col-lg-6 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light">


                    <form id="contact-form" role="form" @submit.prevent="saveCategory">
                        <div class="controls">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">

                                        <InputComponent v-model="requestObj.name" id="name" type="text" name="name"
                                            :is-required="true" placeholder="Please enter name *" :errors="errors" />

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <input type="submit" class="btn btn-success btn-send pt-2 btn-block" value="Save">
                                </div>

                            </div>


                        </div>
                    </form>

                </div>


            </div>
            <!-- /.8 -->

        </div>
        <!-- /.row-->


    </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue'; // Adjust the path based on your project structure

export default {
    components: {
        InputComponent
    },
    name: "CategoryAdd",

    data() {
        return {
            requestObj: {
                name: "",
                parent_id: this.$route.params.categoryId
            },
            catObj: {},
            errors: {}
        }
    },
    watch: {
        '$route.params.categoryId'(newCategoryId) {
            this.requestObj.categoryId = newCategoryId;
        }
    },

    methods: {
        async saveCategory() {
            try {
                this.$store.dispatch("category/storeCategory", this.requestObj).then(
                    (data) => {

                        this.$toast.fire({
                            icon: "success",
                            title: data.message,
                        });
                        console.log(data);
                        this.requestObj.name = "";
                    },
                    (error) => {
                        this.$toast.fire({
                            icon: "error",
                            title: error.message,
                        });
                        console.error(error);
                        this.errors = error.errors
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },
    },

}
</script>
 