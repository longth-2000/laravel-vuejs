<template>
    <div>
        <div>
            <b-form action="" method="post" @submit="onUpdate">
                <b-form-file
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    id="file"
                    accept="image/*"
                ></b-form-file>
                <b-form-input
                    v-model="user.name"
                    placeholder="Enter your name"
                ></b-form-input>
                <b-form-input
                    v-model="user.sex"
                    placeholder="Enter your sex"
                ></b-form-input>
                <b-form-input
                    v-model="user.age"
                    placeholder="Enter your age"
                ></b-form-input>

                <b-button type="submit" variant="primary">Update</b-button>
            </b-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
              name:"",
              age:"",
              sex:""
            }
        }
    },
    methods:{
      onUpdate(event){
          event.preventDefault();
          this.axios.post("http://localhost:8084/api/profile/update", this.user)
          .then(res => console.log(res))
      }
    }
}
</script>
