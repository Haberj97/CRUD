<template>
  <div class="container card objectPostDesign">
    <h1>Edit an Object post</h1>
    <div class="mb-3">
      <label for="title" class="form-label">Post Title</label>
      <input 
        type="text"
        id="title"
        v-model="obj.title"
        placeholder="Please enter the title"
      />
    </div>
    <div class="mb-3">
      <label for="image" class="form-label">image</label>
      <input class="form-control" type="file" id="image">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">add a description</label>
      <textarea
      v-model="obj.description"
      class="form-control" 
      id="description" 
      rows="3"
      ></textarea>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <nuxt-link to="/allObject">
        <button type="button" @click = "update" class="btn btn-outline-primary btn-lg">Edit</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from "axios"

const getUpdateData = "http://localhost:8080/findOne/";
const update = "http://localhost:8080/udpateObject/"

export default {
  data() {
    return {
      obj: {
        title : "",
        description :  ""
      }
    };
  },
  methods: {
    async update() {
      await axios
      .put(update + this.$route.params.id, this.obj)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
       console.log(err);
      });
    }
  },
  async mounted(){
      const result = await axios.get(getUpdateData + this.$route.params.id);
      this.obj = result.data;
  }
};
</script>
