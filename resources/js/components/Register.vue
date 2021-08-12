<template>
    <div>
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
            >
                <b-form-input
                    id="input-2"
                    v-model="form.username"
                    placeholder="Enter name"
                    required
                ></b-form-input>
            </b-form-group>
            <p>{{ errors.username }}</p>
            <b-form-group
                id="input-group-2"
                label="Your password:"
                label-for="input-2"
            >
                <b-form-input
                    type="password"
                    id="input-2"
                    v-model="form.password"
                    placeholder="Enter password"
                    required
                ></b-form-input>
            </b-form-group>
            <p>{{ errors.password }}</p>
            <b-form-group
                id="input-group-2"
                label="Vai trò:"
                label-for="input-2"
            >
                <b-form-select v-model="form.role">
                    <b-form-select-option value="host"
                        >host</b-form-select-option
                    >
                    <b-form-select-option value="admin"
                        >admin</b-form-select-option
                    >
                    <b-form-select-option value="tenant"
                        >tenant</b-form-select-option
                    >
                </b-form-select>
            </b-form-group>
            <br />
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>
<script>
export default {
    name: "Register",
    data() {
        return {
            form: {},
            errors: {
                username: "",
                passwword: ""
            }
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.axios
                .post("http://localhost:8084/api/register/store", this.form)
                .then(res => {
                    if (res.data.status == false) {
                        alert(res.data.message);
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch(err => {
                    var errors = err.response.data.errors;
                    console.log(errors);
                    this.errors.username = errors.username[0];
                    this.errors.password = errors.password[0];
                });
        }
    }
};
</script>
