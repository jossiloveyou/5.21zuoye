<template>
    <div id="home">
        <input type="text" v-model="search"><button @click="searchdata">搜索</button><br/>
        <button @click="adddata">增加</button>
        <div>
            name：<input type="text" v-model="add.name"><br/>
            age：<input type="text" v-model="add.age"><br/>
            gender：<input type="text" v-model="add.gender"><br/>
            msg：<input type="text" v-model="add.msg"><br/>
            hospital：<input type="text" v-model="add.hospital"><br/>
            <button @click="que()">确定修改</button>
        </div>
        <ul>
            <li v-for="items in data" :key="items.id">
                <span>{{items.name}}</span>
                <span>{{items.id}}</span>
                <span>{{items.address}}</span>
                <button @click="update(items)">修改</button>
                <button @click="del(items.id)">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import './style.less'

  export default {
    props:['query'],
    data () {
        return {
            add: {
                name:"",
                age:"",
                gender:"",
                msg:"",
                hospital:"",
            },
            search: '',
        }
    },
    created () {
        this.$store.dispatch('FETCT_ACTIONS');
    },
    methods:{
        del (id) {
            this.$store.dispatch('FETCT_DEL',id)
        },
        adddata () {
            this.$store.dispatch('FETCT_ADD',this.add)
        },
        update (val) {
            this.add = { ...val}
        },
        que () {
            this.$store.dispatch('FETCT_UPDATE',this.add)
        },
        searchdata () {
            this.$store.dispatch('FETCT_SEARCH',this.search)
        },
        ...mapActions([
            'FETCT_ACTIONS','FETCT_DEL','FETCT_ADD','FETCT_UPDATE','FETCT_SEARCH'
        ])
    },
    computed: mapState({
      sex () {
        return 111
      },
      ...mapState(['islogin','data','status'])
    }),
    watch: {
        status () {
           window.location.reload()
            console.log(1)
        }
    }
  }
</script>  
<style>

</style>