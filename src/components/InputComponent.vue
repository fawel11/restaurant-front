
<!-- CustomInput.vue -->

<template>
    <div>
        <label :for="name">{{ name }}  <span v-if="isRequired" style="color: red;">*</span> :</label>
        <input :value="modelValue" :id="id" :type="type" :name="name"
            :class="{ 'form-control': true, 'is-invalid': hasError }" :placeholder="placeholder" :required="isRequired"
            @input="emitInput" />
        <div v-if="hasError" class="invalid-feedback">
            <p v-for="(error, index) in errorMessages" :key="index" v-html="error" />
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        modelValue: {
            type: [String, Number],
            default: ""
        },
        id: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "text"
        },

        name: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        isRequired: {
            type: Boolean,
            default: false
        },
        errors: {
            type: Object,
        }
    },
    computed: {

        hasError() {
            return this.errors && this.errors[this.name] !== undefined;
        },
        errorMessages() {
            return this.hasError ? this.errors[this.name] : [];
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
/* Add your component-specific styles here if needed */
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