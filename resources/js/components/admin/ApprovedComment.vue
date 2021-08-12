<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">PostID</th>
                                <th scope="col">Comment</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(comment, index) in comments" :key="index">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ comment.username }}</td>
                                <td>{{ comment.email }}</td>
                                <td>{{ comment.postID }}</td>
                                <td>{{ comment.comment }}</td>
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
    </div>
</template>
<script>
export default {
    data(){
        return {
            comments:[]
        }
    },
    created(){
        this.axios.get("http://localhost:8084/admin/comment/show")
        .then(res => {
            console.log(res.data)
            this.comments = res.data
        }) 
       
    }
}
</script>