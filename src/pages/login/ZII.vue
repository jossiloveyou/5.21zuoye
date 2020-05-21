<template>
    <div id="zi">
        商品--{{cid}}
    </div>
</template>
<script>
  export default {
    props:['cid'],
    created () {
        console.log(this.cid,'detail')
    },
    methods:{
       
    },
  }
</script>  
<style>

</style>