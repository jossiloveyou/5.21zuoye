<template>
	<div id="home">
		<!-- <input type="text" v-model="search"><button @click="searchdata">搜索</button><br/>
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
		</ul> -->
			<div class="dev"> 
				<el-row>
						<el-col :span="6">
							<el-menu 
								style="width:100%"
								default-active="2"
								class="el-menu-vertical-demo"
								background-color="#545c64"
								text-color="#fff"
								active-text-color="#ffd04b"
							>

								<el-submenu index="1">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>首页</span>
									</template>
									<el-menu-item-group >
										<el-menu-item index="1-1">选项1</el-menu-item>
										<el-menu-item index="1-2">选项2</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="2">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>基础管理</span>
									</template>
									<el-menu-item-group>
										<el-menu-item index="1-1">选项1</el-menu-item>
										<el-menu-item index="1-2">选项2</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="3">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>销售</span>
									</template>
									<el-menu-item-group>
										<el-menu-item index="1-1">选项1</el-menu-item>
										<el-menu-item index="1-2">选项2</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="4">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>进货</span>
									</template>
									<el-menu-item-group>
										<el-menu-item index="1-1">选项1</el-menu-item>
										<el-menu-item index="1-2">选项2</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="5">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>库存</span>
									</template>
									<el-menu-item-group>
										<el-menu-item index="1-1">选项1</el-menu-item>
										<el-menu-item index="1-2">选项2</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
								<el-submenu index="6">
									<template slot="title">
									<i class="el-icon-location"></i>
									<span>系统管理</span>
									</template>
									<el-menu-item-group>
										<el-menu-item index="1-1">选项1</el-menu-item>
										<el-menu-item index="1-2">选项2</el-menu-item>
									</el-menu-item-group>
								</el-submenu>
							</el-menu>
						</el-col>
						<el-col :span="18">
							<el-tabs type="card" >
								<el-tab-pane label="首页" name="first"></el-tab-pane>
								<el-tab-pane label="供应商管理" name="second"></el-tab-pane>
							</el-tabs>
							<div style="padding:25px;boxSizing:border-box;">
								<el-button type="primary"  @click="dianadd">添加供应商</el-button>
								<el-table
									:data="data"
									height="500"
									border
									style="width: 100%;">
									<el-table-column
										prop="supplierName"
										label="供应商"
										width="100">
									</el-table-column>
									<el-table-column
										prop="supplierContact"
										label="联系人"
										width="100">
									</el-table-column>
									<el-table-column
										prop="phone"
										label="联系电话">
									</el-table-column>
									<el-table-column
										prop="address"
										label="预付款">
									</el-table-column>
									<el-table-column
										prop="address"
										label="应付款">
									</el-table-column>
									<el-table-column	prop="status"	label="状态">
										<template>
										{{status>1?<el-button type="primary">启用</el-button>:
										<el-button type="primary">禁用</el-button>}}
											
										</template>	
										<template slot-scope="scope">
											<el-tag
												:type="scope.row.prop == 1 ? 'success' : 'primary'"
												disable-transitions>{{scope.row.prop == 1?'禁用':'启用'}}</el-tag>
										</template>
									</el-table-column>
									<el-table-column prop="description"	label="描述">
									</el-table-column>
									<el-table-column prop="address" label="操作">
										<template slot-scope="scope">
											<el-button
												size="mini"
												@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
											<el-button
												size="mini"
												type="danger"
												@click="handleDelete(scope.$index, scope.row)">删除</el-button>
										</template>
									</el-table-column>
								</el-table>
							</div>
							
						</el-col>
				</el-row>
			</div>
			<!-- 弹出框 -->

			<el-dialog title="添加供应商" :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item label="供应商名称" :label-width="formLabelWidth">
						<el-input v-model="form.supplierName" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="供应商联系人" :label-width="formLabelWidth">
						<el-input v-model="form.supplierContact" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="联系电话" :label-width="formLabelWidth">
						<el-input v-model="form.phone" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="详细地址" :label-width="formLabelWidth">
						<el-input v-model="form.address" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="备注信息" :label-width="formLabelWidth">
						<el-input v-model="form.description" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="状态" :label-width="formLabelWidth">
						<el-input v-model="form.status" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="adddata" > {{username}}</el-button>
				</div>
			</el-dialog>
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
				dialogTableVisible: false,
				username:"",
				dialogFormVisible: false,
				form: {
					supplierName: '',
					supplierContact: '',
					phone: '',
					address: '',
					description: '',
					status: '1',
				},
				formLabelWidth: '120px'
			}
    },
    created () {
				this.$store.dispatch('FETCT_ACTIONS');
				console.log(this.$store)
    },
    methods:{
			handleEdit ( a, b ) {
				this.dialogFormVisible = true
				console.log(a,b)
				this.form=b
				this.username='编辑'
			},
			handleDelete(a, b) {
				console.log(b.supplierId)
				this.$store.dispatch('FETCT_DEL',b.supplierId)
			},
			dianadd () {
				this.dialogFormVisible = true
				this.username='添加'
			},
			del (id) {
					this.$store.dispatch('FETCT_DEL',id)
			},
			adddata (event) {
					this.dialogFormVisible = false;
					console.log(event.target.innerText)
					if(event.target.innerText == '添加'){
						this.$store.dispatch('FETCT_ADD',this.form)
					}else{
						this.$store.dispatch('FETCT_UPDATE',this.form)
					}
				
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
			...mapActions('home',[
				'FETCT_ACTIONS','FETCT_DEL','FETCT_ADD','FETCT_UPDATE',
			])
    },
    computed: mapState({
      sex () {
        return 111
      },
      ...mapState('home',['data','status'])
    }),
    watch: {
        status () {
           this.$store.dispatch('FETCT_ACTIONS');
        }
    }
  }
</script>  
<style>

</style>