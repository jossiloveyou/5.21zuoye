<template>
  <div id="app">
    <!-- <router-link exact to="/login">login1</router-link>---- -->
    <!-- <router-link exact to="/login/2">login2</router-link> -->
    <router-view></router-view>
    <!-- {{name+1}}
    <div v-on:click="onclick('小花',$event)">666</div>
    <a 
      href="https://www.baidu.com" 
      target="_blank" 
      @click.prevent.stop="jump"
      :class="{active:isshow}"  
    >点击</a>
    <h1 v-if="num===0">{{name}}</h1>
    <h2 v-else-if="num===1">{{name}}</h2>
    <h3 v-else>{{name}}</h3>

    <h1>{{message}}</h1>
    <h1>{{firstname}}</h1>
    <h1 v-if="eq==='666'"><button>添加</button></h1>
    <h1 v-else><button>删除</button></h1>

    <input type="checkbox" id="jack" value="小花" v-model="names" />
    <label for="jack">小花</label>
    <input type="checkbox" id="xiao" value="小蓝" v-model="names" />
    <label for="xiao">小蓝</label>
    <input type="checkbox" id="ming" value="小明" v-model="names" />
    <label for="ming">小明</label>
    <br/>
    <span>names:{{names}}</span> -->
    <!-- <Home 
      username="小花"
      :password="password"
      @lx="onchange"
    />
    <Home>父组件的值</Home> -->
  </div>
</template>
<script>
  // import Home from './pages/Home'
  export default {
    data () {
      return {
        name: "abc",
        isshow: false,
        num: 2,
        eq: "666",
        firstname:'123',
        password:'789',
        names:[]
      }
    },
    methods:{
      onclick (val,event) {
        console.log(event.target,val,this.name)
        this.name="qwe"
      },
      jump () {
        console.log(111)
      },
      onchange (options) {
        console.log(options,111)
      }
    },
    computed: {
      message () {
        return this.name+''+this.eq
      }
    },
    watch: {
      name () {
        this.firstname=this.eq+this.name
      }
    },
    components:{
      // Home
    },
    created () {
      console.log(this.$router.history)
    }
  }
</script>  
<style>
  .active{
    color: blue;font-weight: 900;
  }
</style>