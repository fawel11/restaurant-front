
<!-- CustomInput.vue -->

<template>
    <div>

        <div v-if="hasError" class="error">
            <p v-for="(error, index) in errorMessages" :key="index" v-html="error" />
        </div>
    </div>
</template>
  
<script>
export default {
    props: {

        errors: {
            type: Object,
        }
    },
    computed: {

        hasError() {
            return this.errors;
        },
        errorMessages() {
            return this.hasError ? this.errors : [];
        }
        /*    showError() {
               return this.error !== "";
           },
           errorMessage() {
               return this.showError ? this.error : "";
           },
    */
    },
    methods: {
        emitInput(event) {
            console.log(event.target.value);
            this.$emit('update:modelValue', event.target.value)
        }
    }
};
</script>
  
<style scoped>
.error {
    color: red;
}
</style>
  












































<!-- <template>
     <input   id="name" type="text" name="name"
                                            class="form-control is-invalid" placeholder="Please enter name *" required="required"
                                            data-error="Firstname is required.">
        <div class="invalid-feedback" v-for="error in errorMessages" :key="error">{{ error }}
      
    </div>
</template>
  
<script>
export default {
    props: {
        errors: {
            type: Object,
            required: true
        },
        fieldName: {
            type: String,
            required: true
        },
        vModle: {
            type: String,
            required: true
        }
    },
    computed: {
        hasError() {
            return this.errors && this.errors[this.fieldName] !== undefined;
        },
        errorMessages() {
            return this.hasError ? this.errors[this.fieldName] : [];
        }
    }
};
</script>
<style scoped>
.error-box {
    background-color: #fff9fa;
    box-sizing: border-box;
    border: 2px solid rgba(255, 66, 79, .2);
    border-radius: 2px;
    font-size: 12px;
    margin-bottom: 20px;
}

.error-box ul {
    list-style-type: none;
    margin: 0;
    padding: 10px 0px;
}

.error-box ul li {
    padding-left: 10px;
    color: rgb(182, 0, 0);
}
</style> -->