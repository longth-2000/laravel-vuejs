<template>
    <div>
        <b-form action="" method="post" @submit="onSubmit">
            <b-form-file
                @change="updateImage"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                id="file"
                accept="image/*"
            ></b-form-file>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            file: "",
        };
    },
    methods: {
        updateImage(e) {
            this.file = e.target.files[0];
            console.log(this.file);
        },
        onSubmit(event) {
            event.preventDefault();
            var formData = new FormData();
            formData.append("file", this.file);
            this.axios
                .post("http://localhost:8084/api/profile", formData, {
                    "content-type": "multipart/form-data"
                })
                .then(res => {
                    console.log(res.data);
                });
        },
    }
};
</script>

