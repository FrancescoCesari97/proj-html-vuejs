


<script >



export default{
  data(){
    return{


      paragraphs:[
        { 
          title:' Devotion that never',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique exercitationem magnam repellat!',
          images:[
            {
              imgHeroPeople:[
                {
                 img:'/assets/img/h-2-slider-img-15.png',
                 class:"main-img-1",
                },
                {
                  img:'/assets/img/h-2-slider-img-16.png',
                 class:"main-img-1",
                }
              ],
              imgHeroLeaves:[
          {
              leaf:"/assets/img/h-2-slider-img-12.png",
              class:'leaves-1'
          },
          {
              leaf:"/assets/img/h-2-slider-img-13.png",
              class:'leaves-2'
          },
          {
              leaf:"/assets/img/h-2-slider-img-14.png",
              class:'leaves-3'
          },
          {
              leaf:"/assets/img/h-2-slider-img-17.png",
              class:'leaves-4'
          },
          {
              leaf:"/assets/img/h-2-slider-img-14.png",
              class:'leaves-5'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-2.png",
              class:'leaves-6'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-2.png",
              class:'leaves-7'
          },
          ],
            }
          ]
        },

        { 
          title:' Happines that never',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique exercitationem magnam repellat!',
          images:[
            {
              imgHeroPeople:[
                {
                 img:'/assets/img/h-2-slider-img-11.png',
                 class:"main-img-2",
                }
              ],
              
              imgHeroLeaves:[
          {
              leaf:"/assets/img/short-slider-rev-1-img-1.png",
              class:'leaves-1'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-8.png",
              class:'leaves-2'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-9.png",
              class:'leaves-3'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-7.png",
              class:'leaves-4'
          },
          {
              leaf:"/assets/img/h-2-slider-img-14.png",
              class:'leaves-5'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-2.png",
              class:'leaves-6'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-2.png",
              class:'leaves-7'
          },
          ],
            }
          ]
        },

        { 
          title:' Music that never',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique exercitationem magnam repellat!',
          images:[
            {
              imgHeroPeople:[
                {
                 img:'/assets/img/short-slider-rev-1-img-3.png',
                 class:"main-img-3",
                }
              ],
              
              imgHeroLeaves:[
              {
              leaf:"/assets/img/h-2-slider-img-17.png",
              class:'leaves-1'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-8.png",
              class:'leaves-2'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-8.png",
              class:'leaves-2'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-7.png",
              class:'leaves-4'
          },
          {
              leaf:"/assets/img/h-2-slider-img-14.png",
              class:'leaves-5'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-2.png",
              class:'leaves-6'
          },
          {
              leaf:"/assets/img/short-slider-rev-1-img-2.png",
              class:'leaves-7'
          },
          ],
            }
          ]
        }

      ],

      /*   imgHeroPeople:[
      
        '/assets/img/h-2-slider-img-15.png',
        '/assets/img/h-2-slider-img-16.png',
        '/assets/img/h-2-slider-img-11.png',
        '/assets/img/short-slider-rev-1-img-3.png'

        
        ],

        imgHeroLeaves:[
        {
            leaf:"/assets/img/h-2-slider-img-12.png",
            class:'leaves-1'
        },
        {
            leaf:"/assets/img/h-2-slider-img-13.png",
            class:'leaves-2'
        },
        {
            leaf:"/assets/img/h-2-slider-img-14.png",
            class:'leaves-3'
        },
        {
            leaf:"/assets/img/h-2-slider-img-17.png",
            class:'leaves-4'
        },
        {
            leaf:"/assets/img/h-2-slider-img-18.png",
            class:'leaves-5'
        },
        {
            leaf:"/assets/img/short-slider-rev-1-img-2.png",
            class:'leaves-6'
        },
        {
            leaf:"/assets/img/short-slider-rev-1-img-2.png",
            class:'leaves-7'
        },
        ], */
     
        activeParagraph: 0,
        
    };
    },

     computed:{
      activeParagra() {
      return this.Paragraphs[this.activeParagraph];
    },
    },


    methods:{
        nextArrow() {
      if (this.activeParagraph >= this.paragraphs.length - 1) {
        this.activeParagraph = 0;
      } else {
        this.activeParagraph++;
      }
    },

    prevArrow() {
      if (this.activeParagraph == 0) {
        this.activeParagraph = this.paragraphs.length - 1;
      } else {
        this.activeParagraph--;
      }
    },

    changeSlide(index) {

      this.activeParagraph = index;
    }

    } 


};
</script>





<template>
    <div v-for="(paragraph, index) in paragraphs" v-show="activeParagraph == index"  class="container active py-3" >
        <div  class="testo-hero py-5">
            <h2>{{paragraph.title}} <span class="grassetto">ends</span></h2>
            <p>{{paragraph.text}} </p>
            <button class="btn bottone my-2 ">
                <p>READ ME</p>
            </button>

        </div>

        <div class="img-hero ">
            <div class="img-container"  >
                <img v-for="(image, imageIndex) in paragraph.images[0].imgHeroPeople"
                :key="imageIndex" 
                :src="image.img" 
                :class="image.class">
                

                
                
                
            </div>

            <div v-for="(leaf, leafIndex) in paragraph.images[0].imgHeroLeaves" class="leaves-img" >
                <img  
                :key="leafIndex" 
                :src="leaf.leaf" 
                :class="leaf.class"  >
   


            </div>



        </div>
        <div>


        </div>
    </div>

    <div class="carosel-dots">
      <span v-for="(paragraph, index) in paragraphs" 
       class="dot" 
      :class="index == activeParagraph ? 'active-dot': '' " @click="changeSlide(index)"></span>
    </div>




    <!-- freccia prev -->
    <div @click="prevArrow()"  class="arrow-prev bordered" >
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    
    
    </div>

    <!-- freccia next  -->
    <div @click="nextArrow()"  class="arrow-next bordered"  >
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                
    
    </div>


    
 

</template>






<style scoped lang="scss">



      .container{
      
        
      

        display: none;
    }

   
    

    .container.active{
      display: flex;
      justify-content: end;
      max-width: 100vw; 
      height:45vh ;
      gap: 60px;
      .testo-hero{
        width: 30%;
        margin-right: 30px;

        h2{
            font-size: 4rem;
            font-weight: 200;
            .grassetto{
                font-family: "Playball" ;
                font-size: 4.7rem;
                font-weight: 500;
                
            }
        }
        p{
            font-size: 14px;
            color: rgba(0, 0, 0, 0.484);
        }
        .bottone{
            border: 2px solid #e1c0b0;
            border-radius: 0;
            padding: 10px 30px;
            P{
                color: black;
                font-size: 0.7rem;
                letter-spacing: 2px;
                font-weight: 700;
            }
        }
      }

      .img-hero{
        width: 40%;
        margin-top: auto;

        .img-container{
            display: flex;
            justify-content: center;
        }
        
        .main-img-1{
            width: 40%;
            object-fit:contain;
            display: flex;
            
        }
        .main-img-2{
            width: 85%;
            object-fit:cover;
            display: flex;
        }

        .main-img-3{
            width: 65%;
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
                transform: rotate(-45deg);
            }
            .leaves-2{
                position: absolute;
                bottom: -54px;
                right: 181px;
            }
            .leaves-3{
                position: absolute;
                bottom: 255px;
                right: -424px;
                width: 30%;
                transform: rotate(-40deg)
            }
            .leaves-4{
                position: absolute;
                bottom: -40px;
                right: -418px;
                width: 30%;
            }

            .leaves-5{
                position: absolute;
                top: 150px;
            }
            .leaves-6{
                position: absolute;
                bottom: 159px;
                right: -445px;
                width: 25%;
            }
            .leaves-7{
                position: absolute;
                bottom: 317px;
                right: 177px;
                width: 25%;
                transform: rotate(-15deg);
            }
        }
      }
    

    }
    .arrow-prev,
    .arrow-next{
        color: rgb(222, 206, 39);
        width: 50px;
        height: 50px;

        position: absolute;
        top: 25%;
        transform: translateY(-50%);
        line-height: 50px;
        text-align: center;
        font-size: 1.3rem;

        background-color: rgba(250, 235, 215, 0.453);
        border-radius: 50%;

        cursor: pointer;
    }

    .arrow-next{
        right: 20px;
    }

    .arrow-prev{
        left: 20px;
    }


    .carosel-dots{
    
    

    position: absolute;
    bottom: 561px;
    left: 50%;
    transform: translateX(-50%);

    background-color: rgba(255, 255, 255, 0.453);
    border-radius: .5rem;

    display: flex;
    gap: 15px;
    padding: 8px;
}

.dot {
    border-radius: 50%;
    height: 8px;
    width: 8px;
    background-color: #e1c0b0;
    cursor: pointer;
}

.active-dot{
    border-radius: 50%;
    height: 10px;
    width: 10px;
    
    cursor: pointer;
}




</style>
