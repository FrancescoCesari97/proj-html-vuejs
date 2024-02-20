


<script >



export default{
  data(){
    return{
     

      links:[
        'Home',

        'Pages',

        'Portfolio',

        'Blog',

        'Shop',

        'Element',
     
      ]
    };


  },
 


};
</script>





<template>
<div class="top-bar p-3">
    <img src="../assets/img/logo-sidearea-1.png" alt="">

    <ul class="my-0 list">
        <li class="link" v-for="(link) in links ">{{ link }}</li>
      
        <li  ><img class="image" src="../assets/svg/svg-1.svg" alt=""></li>
    </ul>
</div>


 

</template>






<style scoped lang="scss">



.link:hover {
  border-bottom: 3px solid #f0cebe;
}

.image{
  padding-bottom: 3px;
}



</style>
