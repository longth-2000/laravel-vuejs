<template>
    <div>
        {{ fullName }}
        {{ array }}
        <button @click="setArray()">oke</button>
        <input v-model.lazy="msg" />
        <label>{{ msg }}</label>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName: "First",
            lastName: "Bar",
            fullName: "Foo Bar",
            array: [1, 2, 3],
            checkedNames: [],
            msg: ""
        };
    },
    created() {
        this.axios
            .get("http://localhost:8084/api/users", {
                headers: {
                    authorization: 'Bearer 24|fkpDitnRV5o69RJYyGE0wcwmwk9B3e5Ex0j3fCqp'
                }
            })
            .then(res => {
                console.log(res.data);
            });
    },
    watch: {
        firstName(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
            this.fullName = newValue + " " + this.lastName;
        },
        lastName(val) {
            this.fullName = this.firstName + " " + val;
        },
        array() {
            console.log("array has changed");
        }
    },
    methods: {
        setFirstName() {
            this.firstName = "Second";
        },
        setArray() {
            this.array.push(4);
        },
        sayWelcome() {
            alert(1);
        }
    }
};
</script>
