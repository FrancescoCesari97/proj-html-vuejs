


<script >



export default{
  data(){
    return{
     
    };


  },
 


};
</script>





<template>
    <div class="container py-3">
        <div class="testo-hero py-5">
            <h2>Devotion that never ends</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique exercitationem magnam repellat! Earum nihil voluptate necessitatibus modi, facere non minus excepturi aspernatur rem dolores quisquam molestiae ipsam magni illo placeat.</p>
            <button class="btn bottone ">
                READ MORE
            </button>

        </div>

        <div class="img-hero">
            <div class="main-img">
                <img src="../assets/img/h-2-slider-img-15.png" alt="">
                <img src="../assets/img/h-2-slider-img-16.png" alt="">
            </div>

            <div class="leaves-img">
                <img class="leaves-1" src="../assets/img/h-2-slider-img-12.png" alt="">
                <img class="leaves-2" src="../assets/img/h-2-slider-img-13.png" alt="">
                <img class="leaves-3" src="../assets/img/h-2-slider-img-14.png" alt="">
               
                <img class="leaves-4" src="../assets/img/h-2-slider-img-17.png" alt="">
                <img class="leaves-5" src="../assets/img/h-2-slider-img-18.png" alt="">
                <img class="leaves-6" src="../assets/img/short-slider-rev-1-img-2.png" alt="">
                <img class="leaves-7" src="../assets/img/short-slider-rev-1-img-2.png" alt="">

            </div>



        </div>
        <div>


        </div>
    </div>
 

</template>






<style scoped lang="scss">

    

    .container{
      display: flex;
      justify-content: end;
      max-width: 100vw;
      gap: 60px;
      .testo-hero{
        width: 30%;
        margin-right: 30px;

        h2{
            font-size: 3.5rem;
        }
        p{
            font-size: 13px;
            color: rgba(0, 0, 0, 0.484);
        }
        .bottone{
            border: 2px solid #e1c0b0;
        }
      }

      .img-hero{
        width: 40%;
        margin-top: auto;
       
        .main-img{
            width: 40%;
            object-fit:cover;
            display: flex;
        }

        .leaves-img{
            position: relative;
            bottom: 50px;
            width: 30%;
            .leaves-1{
                position: absolute;
                bottom: 99px;
                right: 183px;
            }
            .leaves-2{
                position: absolute;
                bottom: -54px;
                right: 153px;
            }
            .leaves-3{
                position: absolute;
                bottom: 259px;
                right: -324px;
                width: 30%;
            }
            .leaves-4{
                position: absolute;
                bottom: -40px;
                right: -355px;
                width: 30%;
            }

            .leaves-5{
                position: absolute;
                top: 150px;
            }
            .leaves-6{
                position: absolute;
                bottom: 159px;
                right: -377px;
                width: 25%;
            }
            .leaves-7{
                position: absolute;
                bottom: 274px;
                right: 177px;
                width: 25%;
                transform: rotate(-15deg);
            }
        }
      }
    

    }




</style>
