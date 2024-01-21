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
                                        <InputComponent v-model="requestObj.value" id="value" type="number" name="value"
                                            :is-required="true" placeholder="Please enter value *" :errors="errors" />
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
import InputComponent from '@/components/InputComponent.vue';

export default {
    components: {
        InputComponent
    },
    name: "DiscountAdd",

    data() {
        return {
            requestObj: {
                value: null,
                type: 'fff',
                category_id: this.$route.params.categoryId,
                item_id: this.$route.params.itemId
            },
            errors: {}
        }
    },
    methods: {
        async saveCategory() {
            try {
                this.$store.dispatch("discount/storeDiscount", this.requestObj).then(
                    (data) => {

                        this.$toast.fire({
                            icon: "success",
                            title: data.message,
                        });
                        this.requestObj.value = 0
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
 