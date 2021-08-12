<template>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <b-form action="/api/login" method="post" @submit="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone "
                >
                    <b-form-input
                        id="input-1"
                        type="email"
                        placeholder="Enter email"
                        v-model="user.email"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label="Password:"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-2"
                        type="password"
                        placeholder="Enter password"
                        v-model="user.password"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {},
            file: ""
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
           
            this.axios
                .post("http://localhost:8084/api/login",this.user)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err));
        }
    }
};
</script>
<style scoped>
.full-height {
    height: 100vh;
}
.flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
}
.position-ref {
    position: relative;
}
.top-right {
    position: absolute;
    right: 10px;
    top: 18px;
}
.content {
    text-align: center;
}
.title {
    font-size: 60px;
}
.links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
}
.m-b-md {
    margin-bottom: 30px;
    color: #000000;
}
</style>
