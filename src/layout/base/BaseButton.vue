<template>
    <button :type="type" :class="[mode, radius, small]">
         <slot></slot>
         </button>
</template>
<script>
export default {
    props:['type', 'mode', 'radius', 'small']
}
</script>
<style scoped>
 button{
        padding: 0.5rem 1.25rem;
        font-family: inherit;
        background-color: #5492bc;
        border: 1px solid #5492bc;
        color: white;
        cursor: pointer;
        font-size: 18px;
        margin-right: 5px;
    }
    button:last-child{
        margin-right: 0;
    }

    button:hover,
    button:active{
        background-color: #095a91;
        border-color: #095a91;
    }


    .flat{
        background-color: #ae3926;
        color: #ffffff;
        border: 1px solid #ae3926;
    }
    .flat:hover,
    .flat:active{
     background-color: #4e1209; 
     border-color: #4e1209;  
    }


    .flat1{
        background-color: #f19024;
        color: #ffffff;
        border: 1px solid #f19024;
    }
    .flat1:hover,
    .flat1:active{
     background-color: #ba6e17; 
     border-color: #ba6e17;  
    }
    
    .flat2{
        background-color: #052c41;
        color: #ffffff;
        border: 1px solid #052c41;
    }

    .flat2:hover,
    .flat2:active{
     background-color: #031e2c; 
     border-color: #031e2c;  
    }

    .boder_radius1{
        border-radius: 5px;
    }

     .boder_radius2{
        border-radius: 10px;
    }

    .boder_radius3{
        border-radius: 15px;
    }

    .boder_radius4{
        border-radius: 20px;
    }

    .boder_radius5{
        border-radius: 50%;
    }
   
   





















    /* button{
        padding: 0.75rem 1.5rem;
        font-family: inherit;
        background-color: #3a0061;
        border: 1px solid #3a0061;
        color: white;
        cursor: pointer;
    }

    button:hover,
    button:active{
        background-color: #270041;
        border-color: #270041;
    }
    .flat{
        background-color: transparent;
        color: #3a0061;
        border: none;
    }
    .flat:hover,
    .flat:active{
     background-color: #edd2ff;   
    } */
</style>