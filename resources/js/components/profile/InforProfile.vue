<template>
    <div>
        <div>
            <div>Name: {{ profile.name }}</div>
            <div>Age: {{ profile.age }}</div>
            <div>Sex: {{ profile.sex }}</div>
            <div>
                <img style="width:200px; height:200px" :src="profile.image" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profile: {}
        };
    },
    created() {
        this.$store.dispatch("GET_PROFILE").then(res => {
            this.profile = res;
        });
    },
};
</script>
