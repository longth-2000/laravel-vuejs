<template>
    <div>
        <b-form action="" method="post" @submit="createPost">
            <b-form-file
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                id="file"
                accept="image/*"
                @change="updateImage"
                multiple
            ></b-form-file>
            <b-form-input
                v-model="user.phone"
                placeholder="Enter your phone"
            ></b-form-input>
            <b-form-input
                v-model="user.address"
                placeholder="Enter your address"
            ></b-form-input>

            <b-form-select
                v-model="user.type"
                placeholder="Enter your type of room"
                >>
                <b-form-select-option value="Chung cư"
                    >Chung cư</b-form-select-option
                >
                <b-form-select-option value="Phòng trọ mini"
                    >Phòng trọ mini</b-form-select-option
                >
                <b-form-select-option value="Nhà nguyên căn"
                    >Nhà nguyên căn</b-form-select-option
                >
            </b-form-select>
            <br />
            <br />

            <b-form-input
                v-model="user.costs"
                placeholder="Enter your cost per month"
            ></b-form-input>
            <br />
            <b-form-input
                v-model="user.area"
                placeholder="Enter your area"
            ></b-form-input>
            <b-form-group label="Có sống với chủ nhà không">
                <b-form-radio
                    v-model="user.host"
                    name="some-radios"
                    value="true"
                    >Có</b-form-radio
                >
                <b-form-radio
                    v-model="user.host"
                    name="some-radios"
                    value="false"
                    >Không</b-form-radio
                >
            </b-form-group>

            <b-button type="submit" variant="primary">Create</b-button>
        </b-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {},
            file: []
        };
    },
    methods: {
        updateImage(e) {
            this.file = e.target.files;
            console.log(this.file);
        },
        createPost(event) {
            event.preventDefault();
            var formData = new FormData();
            for (let i = 0; i < this.file.length; i++) {
                formData.append("file[]", this.file[i]);
            }
            this.axios.post("http://localhost:8084/api/post/create",this.user)
            .then(response => response.data)
            .then (postID => {
               formData.append("postID", postID);
               this.axios.post("http://localhost:8084/api/post/image",formData )
               .then (res => {
                   console.log(res.data)
               }) 
            })
        }
    }
};
</script>
