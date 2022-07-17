<template>
<div class="posts" style="margin: 10px">
  <base-button type="submit" mode="flat1 boder_radius1" @click="inputIsInvalid = true">Submit</base-button>
  <base-modal  v-if="inputIsInvalid" @close="confirmError">
    <template v-slot:header>A Pair of Quotes</template>
    <template v-slot:actions>
      <base-button mode="flat2 boder_radius1 " @click="inputIsInvalid = false" >Close</base-button>
      <base-button mode="flat boder_radius1" @click="inputIsInvalid = false">Submit</base-button>
    </template>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores dolor nihil eaque, ab blanditiis reiciendis veritatis suscipit ad voluptatibus aliquid necessitatibus, placeat exercitationem, assumenda veniam itaque rem consequuntur tempora.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolores dolor nihil eaque, ab blanditiis reiciendis veritatis suscipit ad voluptatibus aliquid necessitatibus, placeat exercitationem, assumenda veniam itaque rem consequuntur tempora.
    </p>
 
  </base-modal>
</div>
</template>

<script>
import {ref} from 'vue';
export default {
  setup() {
    const isOpen = ref(false);
    return {
     isOpen
    }
  },


  name: 'App',
  data(){
    return {
      inputIsInvalid:false,
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
  },

  methods:{
    confirmError(){
      this.inputIsInvalid = false;
    }
  },

}
</script>

<style>

</style>
