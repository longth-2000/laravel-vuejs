<template>
    <div>
        <!-- <ul>
            <li v-for="post in laravelData.data" :key="post.id">
                <div>Username: {{ post.username }}</div>
                <div>Email: {{ post.email }}</div>
                <div>Password: {{ post.password }}</div>
                <div>Role: {{ post.roleID }}</div>
                
            </li> 
        </ul> -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">roleID</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Area</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Live with host</th>
                                <th scope="col">Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(post,index) in laravelData.data" 
                                :key="index"
                            >
                                <th scope="row">{{ post.commentID }}</th>
                                <td>{{ post.username }}</td>
                                <td>{{ post.email }}</td>
                                 <td>{{ post.roleID }}</td>
                                <td>{{ post.phone }}</td>
                                <td>{{ post.address }}</td>
                                <td>{{ post.area }}</td>
                                <td>{{ post.cost }}</td>
                                <td>{{ post.live_with_host }}</td>
                                 <td>{{ post.comment }}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
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

        <pagination
            :data="laravelData"
            @pagination-change-page="getResults"
        ></pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // Our data object that holds the Laravel paginator data
            laravelData: {}
        };
    },

    mounted() {
        // Fetch initial results
        this.getResults();
    },

    methods: {
        // Our method to GET results from a Laravel endpoint
        getResults(page = 1) {
            axios
                .get("http://localhost:8084/api/register/show?page=" + page)
                .then(response => {
                    this.laravelData = response.data;
                    console.log(this.laravelData);
                });
        }
    }
};
</script>
