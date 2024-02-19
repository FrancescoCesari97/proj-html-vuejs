


<script >



export default{
  data(){
    return{
     
    };


  },
 


};
</script>





<template>

    <div class="cards">
        <div class="card">
          <img src="../assets/img/h-2-port-img-1.jpg" alt="">
        </div>
        <div class="card">
          <img src="../assets/img/h-2-port-img-2.jpg" alt="">
        </div>
        <div class="card">
          <img src="../assets/img/h-2-port-img-3.jpg" alt="">
          <div class="small-icon-shop">
            
            <img src="../assets/svg/svg-6.svg" alt="">
          </div>
          <div class="small-icon-circle">
            
            <img src="../assets/svg/svg-4.svg" alt="">
          </div>


        </div>
        <div class="card">
          <img src="../assets/img/h-2-port-img-4.jpg" alt="">
        </div>
        <div class="card">
          <img src="../assets/img/h-2-port-img-5.jpg" alt="">
        </div>
        <div class="card">
          <img src="../assets/img/h-2-port-img-6.jpg" alt="">
          
          <div class="small-icon-top-arrow">
            
            <img src="../assets/svg/svg-2.svg" alt="">
          </div>
          <div class="small-icon-bottom-arrow">
            
            <img src="../assets/svg/svg-2.svg" alt="">
          </div>
        </div>
       
    </div>
   


 

</template>






<style scoped lang="scss">

  .cards{
    display: flex;
    flex-wrap: wrap;
  }

  .card{
    border-radius: 0;
    margin: 0;
    border: 0;
    width: calc(100% / 3);
    position: relative;

    .small-icon-shop{
      position: absolute;
      width: 5%;
      top: 215px;
      right: 1px;
      background-color: aliceblue;
      padding: 4px;
    }
    .small-icon-circle{
      position: absolute;
      width: 5%;
      top: 180px;
      right: 1px;
      background-color:#ef2d52;
      padding: 4px;
    }

    .small-icon-bottom-arrow{
      position: absolute;
      width: 5%;
      top: 350px;
      right: 10px;
      background-color:#c0e1cf;
      padding: 4px;
    }
    .small-icon-top-arrow{
      position: absolute;
      width: 5%;
      top: 0px;
      right: 10px;
      background-color:#c0e1cf;
      padding: 4px;
    }



  }




</style>
