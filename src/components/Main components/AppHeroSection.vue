


<script >



export default{
  data(){
    return{

        imgHeroPeople:[
      
        '/assets/img/h-2-slider-img-15.png',
        '/assets/img/h-2-slider-img-16.png',

        
        ],

        imgHeroLeaves:[
        {
            img:"/assets/img/h-2-slider-img-12.png",
            class:'leaves-1'
        },
        {
            img:"/assets/img/h-2-slider-img-13.png",
            class:'leaves-2'
        },
        {
            img:"/assets/img/h-2-slider-img-14.png",
            class:'leaves-3'
        },
        {
            img:"/assets/img/h-2-slider-img-17.png",
            class:'leaves-4'
        },
        {
            img:"/assets/img/h-2-slider-img-18.png",
            class:'leaves-5'
        },
        {
            img:"/assets/img/short-slider-rev-1-img-2.png",
            class:'leaves-6'
        },
        {
            img:"/assets/img/short-slider-rev-1-img-2.png",
            class:'leaves-7'
        },
        ]
     
     
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
                <img v-for="(img) in imgHeroPeople" :src="img" alt="">
                
                
            </div>

            <div class="leaves-img">
                <img :class="imgHeroLeaves[0].class" :src=imgHeroLeaves[0].img alt="">
                <img :class="imgHeroLeaves[1].class" :src=imgHeroLeaves[1].img alt="">
                <img :class="imgHeroLeaves[2].class" :src=imgHeroLeaves[2].img alt="">
                <img :class="imgHeroLeaves[3].class" :src=imgHeroLeaves[3].img alt="">
                <img :class="imgHeroLeaves[4].class" :src=imgHeroLeaves[4].img alt="">
                <img :class="imgHeroLeaves[5].class" :src=imgHeroLeaves[5].img alt="">
                <img :class="imgHeroLeaves[6].class" :src=imgHeroLeaves[6].img alt="">


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
