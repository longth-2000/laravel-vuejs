<template>
    <div>
        <div>Address:{{ post.address }}</div>
        <div>Cost:{{ post.cost }}</div>
        <div>Area:{{ post.area }}</div>
        <div>Type:{{ post.type_room }}</div>
        <div>Host:{{ post.live_with_host }}</div>
        <div>
            <button @click="updatePost">update</button>
        </div>
        <div v-if="display">
            <b-form action="" method="post">
                <b-form-input placeholder="Update Post"></b-form-input>
            </b-form>
        </div>
        <div v-else>
            <p style="color:red">Bạn không có quyền update bài này</p>
        </div>
        <div>
            <b-form action="" method="post" @submit="handleComment">
                <b-form-input
                    v-model="form.content"
                    placeholder="Comment"
                ></b-form-input>
                <button type="submit">Gửi</button>
            </b-form>
        </div>
        <div>
            <div v-for="(comment, index) in comments" :key="index">
                <p>{{ comment.username }}</p>
                <h4>{{ comment.comment }}</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            post: {},
            form: {},
            display:false,
            comments: []
        };
    },
    created() {
        let showApi = `http://localhost:8084/api/post/show/${this.$route.params.id}`;
        let commentApi = `http://localhost:8084/api/comment/show/${this.$route.params.id}`;
        const showRequest = axios.get(showApi);
        const commentRequest = axios.get(commentApi);
        axios
            .all([showRequest, commentRequest])
            .then(
                axios.spread((...responses) => {
                    this.post = responses[0].data;
                    this.comments = responses[1].data;
                })
            )
            .catch(errors => {});
    },
    methods: {
        updatePost() {
            this.axios
                .get("http://localhost:8084/api/post/update")
                .then(res => {
                   this.display = res.data
                })
                .catch(err => console.log(err.response));
        },
        handleComment(event) {
            event.preventDefault();
            this.form.postID = this.$route.params.id;
            this.axios
                .post("http://localhost:8084/api/comment/store", this.form)
                .then(res => {
                    console.log(res.data);
                    this.comments.push(res.data);
                });
        }
    }
};
</script>
