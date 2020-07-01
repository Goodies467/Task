<template>
  <div>
    <!-- 侧边栏 -->
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-right"></i>用户管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!-- name传组件名 params传递参数 需要对象：v-bind -->
                <router-link :to="{name:'UserProfile',params:{id:''}}">个人信息</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/user/List">用户列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-caret-right"></i>内容管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/content/type">分类管理</router-link>
                </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/content/conList">内容列表</router-link>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-caret-right"></i>系统管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link to="/system/update">更新系统</router-link>
                </el-menu-item>
              <el-menu-item index="3-2">
                <router-link to="/system/setting">系统设置</router-link>
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 上边的个人信息 -->
      <el-container>
        <el-header style="text-align:right;font-size:12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right:15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{name}}</span>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  props: ["name"],
  name: "Main"
};
</script>

<style scoped lang="scss">
.el-header {
  background-color:rgb(214, 216, 214);
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}

a {
  text-decoration: none;
}
</style>