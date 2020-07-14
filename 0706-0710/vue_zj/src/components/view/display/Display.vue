<template>
  <div class="usertable" style="padding: 20px;">
    <!-- 表单 -->
    <form>
    <div class="from">
      <div class="form-input">
        <div class="form-input-left" style="float:left;margin-right:20px">
          用户名：
          <a-input style="width:200px" v-model="uname" />
        </div>
        <!-- <div class="form-input-right" style="float:left;margin-right:20px">
          姓名：
          <a-input style="width:200px" />
        </div> -->
      </div>
      <div class="form-submit" style="float:right;margin-right:40px">
        <a-button type="primary" @click="search">查询</a-button>
      </div>
    </div>
  </form>

    <!-- <a-form layout="inline">
      <a-form-item label="邮  箱:   ">
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        ></a-input>
      </a-form-item>

      <a-form-item label="有效标识">
        <a-select
          v-decorator="[
          'select',
          { rules: [{ required: true, message: '请选择有效标识!' }] },
        ]"
          placeholder="请选择"
          style="width:240px"
        >
          <a-select-option value="有效">有效</a-select-option>
          <a-select-option value="无效">无效</a-select-option>
        </a-select>
      </a-form-item>
    </a-form> -->
    <!-- 按钮组 -->
    <!-- 新增按钮 -->
    <a-button @click="userAdd" style="margin-left:720px">新增</a-button>
    <!-- 点击新增按钮后的新建个人信息弹框 -->
    <a-modal v-model="addText" title="用户信息" width='600px' ok-text="确认" cancel-text="取消" @ok="hideModal">
        <a-input v-model="adduname" placeholder='请输入用户名'></a-input>
        <a-input v-model="addname" style="margin-top:15px" placeholder='请输入姓名'></a-input>
        <a-input v-model="addpost" style="margin-top:15px" placeholder='请输入岗位职责'></a-input>
        <a-input v-model="addnumOffice" style="margin-top:15px" placeholder='请输入办公电话'></a-input>
        <a-input v-model="addnumSmart" style="margin-top:15px" placeholder='请输入移动电话'></a-input>
    </a-modal>
    
    <!-- <a-button>编辑</a-button>
    <a-button>删除</a-button>
    <a-button>重置密码</a-button> -->
    <!-- 分配工作组按钮 -->
    <a-button @click="groupAdd">分配工作组</a-button>
    <!-- 点击分配工作组按钮后的弹框 -->
    <a-modal v-model="addgroup" title="分配工作组" width="600px" ok-text="保存" cancel-text="取消" @ok="groupOk">
      <UsersForm></UsersForm>
    </a-modal>

    <!-- <a-button>更改状态</a-button>
    <a-button>分配权限</a-button> -->
    <!-- 表格 -->
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1300, y: 500 }"
    />
  </div>

</template>
<script>
import UsersForm from '@/components/system/user/UsersForm.vue'
import  '@/mock/mock.js';
import axios from 'axios';

const columns = [
  {
    title: "用户名",
    sorter: true,
    dataIndex: "uname",
    width: 130
  },
  {
    title: "姓名",
    sorter: true,
    dataIndex: "name",
    width: 150
  },
  {
    title: "岗位职责",
    dataIndex: "post",
    width: 170
  },
  {
    title: "办公电话",
    sorter: true,
    dataIndex: "numOffice",
    width: 150
  },
  {
    title: "移动电话",
    sorter: true,
    dataIndex: "numSmart",
    width: 120
  },
  // {
  //   title: "Email",
  //   sorter: true,
  //   dataIndex: "numEmail",
  //   width: 200
  // },
  // {
  //   title: "有效标志",
  //   sorter: true,
  //   dataIndex: "mark",
  //   width: 120
  // },
];

export default {
  name:'usertable',
  components: {
    UsersForm
  },
  data() {
    return {
      data:[],
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible: false,
      addText: false,
      addgroup:false,
      uname:'',
      userlist:'',
      adduname:'',
      addname:'',
      addpost:'',
      addnumOffice:'',
      addnumSmart:'',
      userlist:[],
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    start() {
      this.loading = true
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false
        this.selectedRowKeys = []
      }, 1000)
    },
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    //增加功能
    hideModal(e){
      var user={
        key:this.userlist.length+1,
        uname:this.adduname,
        name:this.addname,
        post:this.addpost,
        numOffice:this.addnumOffice,
        numSmart:this.addnumSmart,
      }
      this.userlist.push(user);
      alert('增加成功');
      this.addText=false;
      this.adduname='';
      this.addname='';
      this.addpost='';
      this.addnumOffice='';
      this.addnumSmart='';
    },

    handleAdd() {//弹出新建个人信息弹框
      this.mdl = null
      this.visible = true
    },
    userAdd() {//增加事件
      this.addText = true
    },
    hideOk(e) {//隐藏新建个人信息弹框
      // var user = {
      //   key: this.userlist.length + 1,
      //   uname: this.adduname,
      //   name: this.addname,
      //   post: this.addpost
      // }
      // this.userlist.push(user)
      this.addText = false
    },
    groupAdd() {//显示分配工作组
      this.addgroup = true
    },
    groupOK(e){
      this.addgroup = false
    },
    handleAdd() {//弹出新建个人信息弹框
      this.mdl = null
      this.visible = true
    },
    //查询
    search(){
     if(this.uname =='' || this.uname == null){
       this.data=this.userlist;
     }else{
       this.data=this.userlist;
       this.data=this.data.filter(items=>{
       return items.uname==this.uname;
     });
     }
   },
  },
  mounted () {
    axios.post('userList.com').then((Userlist) => {//axios发起post请求
                this.data=Userlist.data;
                console.log(this.data)
                this.userlist=Userlist.data;
            })
  }
}

</script>

<style lang="less" scoped>
.search {
  margin-left: 600px;
}
</style>