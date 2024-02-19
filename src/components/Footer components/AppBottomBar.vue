


<script >



export default{
  data(){
    return{
     
    };


  },
 


};
</script>





<template>


   <div class="footer">

       <div class="container py-5">
           <div class="descripion">
               <img src="../assets/img/logo-sidearea-1.png" alt="">
               <p class="p-2">Let's get creative</p>
   
           </div>
           <div class="descripion">
            <p class="p-2">maree.qode@gmail.com</p>
            <p class="p-2">+44645321789</p>
           </div>
           <div class="descripion">
            <p class="p-2">Avenue d'Auderghem 10</p>
            <p class="p-2">1040 Brussels, Belgium</p>
   
           </div>
           <div class="descripion">
            <p class="p-2 ">Stay in Touch with us </p>
                <ul>
                    <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'pinterest-p']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
                    <li><font-awesome-icon :icon="['fas', 'info']" /></li>
                </ul>
           </div>
       </div>
   </div>
 

</template>






<style scoped lang="scss">


    .footer{

        background-color:#c0e1cf;
        .container{
    
            display: flex;
            justify-content: space-between;

            .descripion{
                width: 20%;
            }
    
        }
    }





</style>
