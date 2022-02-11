<template>
    <div class="container card main_container">
        <div class="row">
            <div class="col-md-10">
                <h2>All Objects</h2>
            </div>
            <div class="col-md-2">
                <nuxt-link to="/">
                    <button type="button" class="btn btn-success">
                        Create Object
                    </button>
                </nuxt-link>
            </div>
        </div>
        <div class="catalog">
            <div class = "eachObject" v-for="objData in obj" :key="objData.id">
                <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="image">
                    <div class="card-body body_card">
                        <h5 class="card-title">{{objData.title}}</h5>
                        <p class="card-text" >{{objData.description.substring(0, 100)}}</p>
                        <div>
                            <button v-on:click="deleteObject(objData._id)" type="button" class="btn btn-danger">
                            Delete
                            </button>
                            <nuxt-link :to="'/allObject/'+objData._id">
                                <button type="button" class="btn btn-outline-primary">
                                Edit
                                </button>
                            </nuxt-link>
                        </div>
                    </div>
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
  margin-top: 50px;

}
.eachObject {
    margin: 0px auto; /*2*/
    background-color: white; /*3*/
    box-shadow: 0px 5px 20px #999; /*4*/
    height: 400px;
    display: flex;
    align-items: justify;
    border-radius: 15px;
}
.eachObject:hover {
  cursor: pointer;
  -webkit-box-shadow: 3px 10px 15px -1px rgba(0, 0, 0, 0.46);
  box-shadow: 3px 10px 15px -1px rgba(0, 0, 0, 0.46);
}
.catalog {
    display: flex;
    flex-wrap: wrap;
    gap : 50px;
    justify-content: center;
}
.body_card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>
