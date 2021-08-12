<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">userID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Area</th>
                                <th scope="col">Type room</th>
                                <th scope="col">Live with host</th>
                                <th scope="col">isApproved</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(post, index) in posts" :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ post.userID }}</td>
                                <td>{{ post.username }}</td>
                                <td>{{ post.email }}</td>
                                <td>{{ post.address }}</td>
                                <td>{{ post.cost }}</td>
                                <td>{{ post.area }}</td>
                                <td>{{ post.type_room }}</td>
                                <td>{{ post.live_with_host }}</td>
                                <td>{{ post.isApproved }}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        :style="{ background: post.color }"
                                        @click="
                                            approve($event, index, post.postID, post.userID)
                                        "
                                    >
                                        Approve
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [],
            color: "",
            notify: ""
        };
    },
    created() {
        this.axios.get("http://localhost:8084/admin/post/show").then(res => {
            console.log(res.data);
            this.posts = res.data;
            this.posts.map(element => {
                if (element.isApproved == 0) {
                    element.isApproved = "Chưa được duyệt";
                    element.color = "blue";
                } else {
                    element.isApproved = "Đã được duyệt";
                    element.color = "yellow";
                }
                return element;
            });
        });
    },
    computed: {},
    methods: {
        approve(event, index, postID, userID) {
            let approveAPI = "http://localhost:8084/admin/post/approve";
            let notifyAPI = "http://localhost:8084/api/notifications/post";
            const approveRequest = axios.put(approveAPI, {
                postID: postID
            });
            const notifyRequest = axios.post(notifyAPI, {
                userID: userID
            });
            axios
                .all([approveRequest, notifyRequest])
                .then(
                    axios.spread((...responses) => {
                        this.posts[index].isApproved = "Đã được duyệt";
                        event.target.style.background = "yellow";
                    })
                )
                .catch(errors => {
                    // react on errors.
                });
        }
    }
};
</script>
