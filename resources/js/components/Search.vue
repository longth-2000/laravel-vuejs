<template>
    <div>
        <b-form action ="" method="post" @submit="searchForm">
            <b-form-group>
                <b-form-select
                    v-model="search.address"
                    placeholder="Enter your city"
                    >
                    <b-form-select-option value="Trên cả nước"
                        >Trên cả nước</b-form-select-option
                    >
                    <b-form-select-option value="Hà Nội"
                        >Hà Nội</b-form-select-option
                    >
                    <b-form-select-option value="Đà Nẵng"
                        >Đà Nẵng
                    </b-form-select-option>
                    <b-form-select-option value="Hải Phòng"
                        >Hải Phòng</b-form-select-option
                    >
                    <b-form-select-option value="Cần thơ"
                        >Cần Thơ</b-form-select-option
                    >
                </b-form-select>
                <b-form-input
                    v-model="search.cost"
                    placeholder="Enter your cost per month"
                ></b-form-input>
                <b-form-input
                    v-model="search.area"
                    placeholder="Enter your area"
                ></b-form-input>
                <b-form-select
                    v-model="search.type_room"
                    placeholder="Enter your type of room"
                    >
                    <b-form-select-option value="Không xác định"
                        >Không xác định</b-form-select-option
                    >
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
                <button type="submit">search</button>
            </b-form-group>
        </b-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: {},
            posts:[]
        };
    },
    methods: {
        searchForm() {
            event.preventDefault();
            this.axios.post("http://localhost:8084/api/search", this.search)
            .then(res => {console.log(res.data)})
        }
    }
};
</script>
