<script >


import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'


import { store } from './store';

  export default{
    data(){
      return{
        title: 'hello world',

        store,
      };
    },


    components: {AppHeader, AppMain, AppFooter},
  }

</script>



<template>
  
 
  <app-header> </app-header>

  <app-main> </app-main>

  <app-footer>  </app-footer>

</template>

<style lang="scss">

  @use './style/general.scss';

</style>
