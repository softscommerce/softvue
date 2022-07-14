<template>
<div class="posts">
  <div>
    <h1>{{posts.title}}</h1>
    <p>{{posts.description}}</p>
    <hr/>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      posts:{
          title:'New Post Title 1',
          description:'Post Description',
        }
    }
  }
}
</script>

<style>

</style>
