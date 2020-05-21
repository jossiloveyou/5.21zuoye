<template>
  <div class="hello">
    <h1>{{name}}</h1> 
    <input type="text">
    {{username}}
    {{password}}
    <slot></slot>  
    <button @click="onclick">点击</button>
  </div>
</template>

<script>
export default {
  props: ['username','password'],
  data () {
    return {
      name:"小花",
    }
  },
  methods:{
    onclick () {
      this.$emit('lx',{sex:"男"})
    }
  }
}
</script>

<style scoped>

</style>
