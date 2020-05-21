<template>
    <div id="zi">
        home子路由
    </div>
</template>
<script>
  export default {
    created () {
        console.log(this.$route.params,666)
    },
    methods:{
       
    },
    watch: {
      $route (next) {
        console.log(next.params,111)
      }
    }
  }
</script>  
<style>

</style>