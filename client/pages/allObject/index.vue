<template>
    <div class="container card main_container">
        <div class="row">
            <div class="col-md-10">
                <h2>All Object</h2>
            </div>
            <div class="col-md-2">
                <nuxt-link to="/">
                    <button type="button" class="btn btn-success">
                        Create Post
                    </button>
                </nuxt-link>
            </div>
        </div>
        <div class ="row" v-for="objData in obj" :key="objData.id">
            <div class="col-md-9 card each_item">
                <div>
                    <h5>{{objData.title}}</h5>
                    <p>{{objData.description}}</p>
                </div>
            </div>
            <div class="col-md-2 card each_item">
                <div>
                        <button v-on:click="deleteObject(objData._id)" type="button" class="btn btn-outline-primary">
                        Delete
                        </button>
                        <nuxt-link :to="'/allpost/' + objData._id">
                            <button type="button" class="btn btn-danger">
                                Edit
                            </button>
                        </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default{
    data(){
        return {
            obj : []
        }
    },

    mounted(){
        this.getAllData()

    },

    methods : {
        async getAllData(){
            await axios.get("http://localhost:8080/getObject")
            .then(res=>{
                this.obj = res.data
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        },
           async deleteObject(id) {
                await axios
                .delete("http://localhost:8080/deleteObject/" + id)
                .then(res => {
                    this.getAllData();
                })
                .catch(err => {
                    console.log(err);
                });     
            }       
    }
}

</script>
<style scoped>
.main_container {
  padding: 50px;
  margin-top: 30px;
}
.each_item {
  margin: 5px;
}
.each_item:hover {
  cursor: pointer;
  -webkit-box-shadow: 3px 10px 15px -1px rgba(0, 0, 0, 0.46);
  box-shadow: 3px 10px 15px -1px rgba(0, 0, 0, 0.46);
}
</style>
