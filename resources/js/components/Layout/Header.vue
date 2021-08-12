<template>
    <div>
        <b-button @click="Logout">Log out</b-button>
        <div>
            <div v-for="(notifycation, index) in notifications" :key="index">
                <h3>{{ notifycation.title }}</h3>
                <p>{{ notifycation.content }}</p>
                <hr />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    created() {
        var userID = window.localStorage.getItem("userID");
        console.log(userID);
        this.axios
            .get(`http://localhost:8084/api/post/showByAuthor/${userID}`)
            .then(response => response.data)
            .then(res => {
                res.forEach(element => {
                    Echo.private(`posts.${element.postID}`).listen("ApprovePost", e => {
                        console.log(e.post);
                        this.notifications.push(e.post);
                    });
                });
            });
        /*   */
    },
    data() {
        return {
            notifications: []
        };
    },
    methods: {
        Logout() {
            this.axios.get("http://localhost:8084/api/logout").then(res => {
                window.localStorage.removeItem("userID");
            });
        }
    }
};
</script>
