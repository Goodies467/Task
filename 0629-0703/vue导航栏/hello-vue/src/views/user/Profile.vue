<template>
<!-- 所有的元素，必须不能直接在根节点下 -->
  <div>
    <h1>个人信息</h1>
    {{id}}
  </div>
</template>

<script>
export default {
  props:['id'],
  name: "UserProfile",                 //这个名字不用非要跟文件名一致，它导出什么，别人引用什么就可以
  beforeRouteEnter:(to, from, next) => {//钩子函数，进入页面，先执行这行代码然后执行下面的beforeRouteLeave代码
    console.log("进入路由之前");//加载数据
    next(vm=>{
      vm.getData();//进入路由之前执行getData方法
    });
  },
  beforeRouteLeave:(to, from, next) => {
    console.log("进入路由之后");
    next();
  },
  methods:{
    getData:function(){
      this.axios({
        method:'get',
        url:'http://localhost:8080/static/mock/data.json'
      }).then(function(response){
        console.log(response)
      })
    }
  }
}
</script>

<style>

</style>