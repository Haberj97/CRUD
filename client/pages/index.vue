<template>
    <div class="container card objectPostDesign">
      <h1>Create an Object post</h1>
      <div class="mb-3">
        <label for="title" class="form-label">Post Title</label>
        <input 
          type="text"
          id="title"
          v-model="title"
          placeholder="Please enter the title"
        />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">image</label>
        <input class="form-control" type="file" @change="onFileSelected" name="image" id="image">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">add a description</label>
        <textarea
        v-model="description"
        class="form-control" 
        id="description" 
        rows="3"
        ></textarea>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <nuxt-link to="/allObject">
          <button type="button" @click="addObject" class="btn btn-outline-primary btn-lg">Submit</button>
        </nuxt-link>
      </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      FILE: null,
      title : "",
      description : ""
    };
  },
  methods: {
    onFileSelected(event){
      this.FILE = event.target.files[0]
    },
   async addObject() {
      const fd = new FormData();
      fd.append('image',this.FILE,this.FILE.name)
      fd.append('title',this.title)
      fd.append('description',this.description)
      await axios
        .post("http://localhost:8080/postObject", fd)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  },
  
};
</script>
<style scoped>
  .objectPostDesign {
    margin-top: 20px;
    padding : 20px;
  }
</style>
