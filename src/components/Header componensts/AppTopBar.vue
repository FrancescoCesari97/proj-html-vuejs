


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

    <ul class="my-0">
        <li v-for="(link) in links ">{{ link }}</li>
      
        <li><img src="../assets/svg/svg-1.svg" alt=""></li>
    </ul>
</div>


 

</template>






<style scoped lang="scss">




</style>
