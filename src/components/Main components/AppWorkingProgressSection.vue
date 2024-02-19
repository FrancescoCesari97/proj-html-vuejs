<script>


export default{
  data(){
    return{
     
    };


  },
 



};
</script>





<template>

<div class="container py-5">

    <h3 class="text-center"> Working Process</h3>
    <div class="linea-rossa">

        <img src="../assets/svg/svg-3.svg" alt="">
    </div>

    <div class="wrapper">
        <div class="card">
            <div class="circle-icon text-center ">
                <font-awesome-icon class=" icon" :icon="['far', 'lightbulb']" size="2xl" />
            </div>
            <h4 class="text-center my-3">First theres an idea</h4>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
        </div>

        <div class="card">
            <div class="circle-icon messaggio">
                <font-awesome-icon :icon="['far', 'comment']" size="2xl" />
            </div>
            <h4 class="text-center my-3">First theres an idea</h4>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
        </div>

        <div class="card">
            <div class="circle-icon nuvola ">
                <font-awesome-icon :icon="['fas', 'cloud']" size="2xl" />
            </div>
            <h4 class="text-center my-3">First theres an idea</h4>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
        </div>

        <div class="card">
            <div class="circle-icon penna">
                <font-awesome-icon :icon="['fas', 'pen-fancy']"  size="2xl" />
            </div>
            <h4 class="text-center my-3">First theres an idea</h4>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
        </div>
       
    </div>
</div>

    
 

</template>






<style lang="scss" scoped>

    .container{
        position: relative;


        .linea-rossa{
                position: absolute;
                left: 10px;
                top: 10px;
                
                
            }
        
        h3{
          
            font-size: 3rem;
            
        }
        .wrapper{

            display: flex;
            position: relative;


            .card{
                border: 0;
                width: 25%;
            
                h4{
                    font-size: 1rem;
                }

                p{
                    font-size: 0.8rem;
                    color: rgba(0, 0, 0, 0.507);
                }

                .circle-icon{
                    background-color: #faf7f1;
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    padding: 20px;
                    color: #badac9 ;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                  
                    
                    
                    
                    
                }

              
                .messaggio{
                    color:#f8df7a ;
                };
                .nuvola{
                    color: #80465f;
                }

                .penna{
                    color:#eb6950;
                }


            }

        }

    }

</style>
