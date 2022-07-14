<template>
<div class="posts">
  <h2>Posts</h2>
  <single-post></single-post>
  <single-post></single-post>
  <!-- <div v-for="(data,index) in posts" :key="index">
    <h1>{{data.title}}</h1>
    <p>{{data.description}}</p>
    <br/>
  </div> -->
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      posts:[
        {
          title:'New Post 1',
          description:'Post Description',
        },
        {
          title:'New Post 2',
          description:'Post Description',
        }
      ]
    }
  }
}
</script>

<style>

</style>
