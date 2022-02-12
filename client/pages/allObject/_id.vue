<template>
  <div class="container card objectPostDesign">
    <h1>Edit Object</h1>
    <div class="mb-3">
      <label for="title" class="form-label">Object Title</label><br>
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
      <h5>Old image preview</h5>
      <img :src="image" class="card-img-top" alt="image"/>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">description</label>
      <textarea
      v-model="description"
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
      title: "",
      description: "",
      FILE : null ,
      image: ""
    };
  },
  methods: {
    onFileSelected(event){
      this.FILE = event.target.files[0]
    },
    async update() {
      const fd = new FormData();
      if(this.FILE != null){
        fd.append('image',this.FILE,this.FILE.name)
      }
      fd.append('title',this.title)
      fd.append('description',this.description)
      await axios
      .put(update + this.$route.params.id, fd)
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
      this.title = result.data.title;
      this.description = result.data.description;
      this.image = result.data.image;

  }
};
</script>
