<script>


export default{
  data(){
    return{


        imgOptionCard:[
            '/assets/img/h-2-blog-img-1.jpg',
            '/assets/img/h-2-blog-img-2.jpg',
            '/assets/img/h-2-blog-img-3.jpg',
        ]
     
    };


  },
 



};
</script>





<template>

    <div class="container ">
        <div v-for="img in imgOptionCard" class="card">
            <img :src="img" alt="">
            <h5 class="p-2">This way, loves: a detailed guide throgh new design</h5>
            <p class="p-2">By Emily Fields</p>
            <div class="targ text-center">
                <p class="giorno p-2">07</p>
                <p class="anno p-2">May '19</p>
            </div>
        </div>
        <!-- <div class="card">
            <img src="../assets/img/h-2-blog-img-2.jpg" alt="">
            <h5 class="p-2">This way, loves: a detailed guide throgh new design</h5>
            <p class="p-2">By Emily Fields</p>
            <div class="targ text-center">
                <p class="giorno p-2">07</p>
                <p class="anno p-2">May '19</p>
            </div>
        </div>
        <div class="card">
            <img src="../assets/img/h-2-blog-img-3.jpg" alt="">
            <h5 class="p-2" >This way, loves: a detailed guide throgh new design</h5>
            <p class="p-2">By Emily Fields</p>
            <div class="targ text-center">
                <p class="giorno p-2">07</p>
                <p class="anno p-2">May '19</p>
            </div>
        </div> -->
        
    </div>



</template>






<style lang="scss" scoped>

.container{
    display: flex;
    gap: 25px;
    padding: 150px 0;
    .card{
        width: 30%;
        border: 0;
        border-radius: 0;
        position: relative;

        h5{
            margin: 0;
        }

        p{
            font-size: 0.8rem;
            font-family:"Playball" ;
        }

        .targ{
            position: absolute;
            top: -20px;
            left: 20px;
            .giorno{
                background-color: #c0e1cf ;
                font-family: "Playball" ;
                font-weight: 500;
                font-size: 2rem;
            }

            .anno{
                background-color: #efcec5 ;
            }
        }
    }
}
  

</style>
