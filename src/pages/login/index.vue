<template>
    <div id="login">
      账号：<input type="text" v-model="users.username">
      密码：<input type="password" v-model="users.pwd">
      <button @click="deng">登录</button>
      {{islogin}}

      {{name}}---{{indexName}}---{{age}}
      <button @click="bian">改变</button>
      {{data}}
    </div>
</template>
<script>
  export default {
    // props:['cid'],
    data () {
      return {
        // name:'首页',
        id:'',
        users: {
          username:'',
          pwd:'',
        }
      }
    },
    created () {
      // console.log(this.$route.params,11)
      // this.name=this.$route.params.cid
      // console.log(this.cid)
      // const isbool = this.$route.path !== '/login/1'
      // if(!this.cid && isbool){
      //   this.$router.push('/login/1')
      // }
    },
    //  computed: mapState({
    //   sex () {
    //     return 111
    //   },
    //   ...mapState('Login',['name']),
    //   ...mapState({
    //     indexName: 'name',
    //   }),
    //   ...mapState(['age','islogin']),
    //   ...mapState('Login',['data']),
    // }),
    // computed: mapState({
    //   sex: state => state.name,
    //   name1:'name',//取别名
    //   age (state) {
    //     return state.age+this
    //   }
    // }),
    methods:{
      // onclick () {
      //   this.$store.dispatch('FETCT_ACTIONS',true);
      // },
      // ondel () {
      //   if(this.count === 0) return
      //   this.$store.commit('FECH_COUNT',false);
      // },
      deng () {
        this.$store.dispatch('FETCT_LOGIN',this.users)
      },
      // bian () {
      //   this['FECH_DATA']()
      // },
      // ...mapActions([
      //   'FETCT_ACTIONS',
      // ]),
      // ...mapActions('Login',[
      //   'FECH_DATA'
      // ]),
      // ...mapMutations('Login',[
      //   'FECH_NAME',
      //   // 'FECH_DATA',
      // ])
    },
    watch: {
      islogin (islogin) {
        if(islogin == "登录成功"){
          this.$router.push({name:'home'})
        }
      }
    },
    
    // watch: {
    //   $route (next) {
    //     console.log(next.params,111)
    //     this.name=next.params.cid
    //   }
    // }
  }
</script>

<style>

</style>