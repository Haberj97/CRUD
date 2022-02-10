<template>
  <div class="container card objectPostDesign">
    <h1>Create an Object post</h1>
    <div class="mb-3">
      <label for="title" class="form-label">Post Title</label>
      <input type="text" class="form-control" id="title" placeholder="Please enter the Object name">
    </div>
    <div class="mb-3">
      <label for="image" class="form-label">image</label>
      <input class="form-control" type="file" id="image">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">add a description</label>
      <textarea class="form-control" id="description" rows="3"></textarea>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-outline-primary btn-lg">Submit</button>
    </div>
  </div>
</template>
<script>
  import Nav from "../layouts/nav.vue";
  export default{
      component : {
          Nav
      }
  }
</script>
<style scoped>
  .objectPostDesign {
    margin-top: 20px;
    padding : 20px;
  }
</style>
