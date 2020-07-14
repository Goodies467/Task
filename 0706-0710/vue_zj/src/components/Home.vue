<template>
  <a-layout class="home_container">
    <!-- 头部区域 -->
    <a-layout-header>
      <div class="header_left">
        <img src="../assets/img/logo.png" style="width: 30px; height: 30px;" />
        <span style="margin-right:30px;">中国交建· 统一监控管理平台</span>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </div>
      <div class="header_right">
        <a-dropdown>
          <a-button>
            <img src="../assets/img/avatar.jpg" style="width:24px;height:24px;margin-right:10px" />超级管理员
          </a-button>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="#">重置密码</a>
            </a-menu-item>
            <a-menu-item @click="logout">退出登录</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>

    <a-layout>
      <!-- 侧边栏 -->
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <!-- 侧边栏菜单区 -->
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <!-- 一级菜单 -->
          <a-sub-menu key="sub1">
            <!-- 一级菜单的模板区域 -->
            <span slot="title">
              <!-- 图标 -->
              <a-icon type="setting" />
              <!-- 文本 -->
              <span>系统设置</span>
            </span>
            <!-- 二级菜单 -->
            <a-menu-item key="2">
              <router-link to="/users">用户管理</router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/group">工作组管理</router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/audit">审计管理</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <!-- 内容区 -->
      <a-layout-content>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    // 退出登录
    logout() {
      window.localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.ant-layout-header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
  margin: 0;
  font-family: arial, Microsoft Yahei, Hiragino Sans GB, sans-serif !important;
  font-weight: 100;
  font-size: 16px !important;
}
.a-layout-sider {
  background: #000c17;
  font: #fff;
}
.ant-layout-content {
  background: #fff;
}
.header_left {
  padding: 12px, 20px;
}
.ant-btn {
  cursor: pointer;
  padding: 0 12px;
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  height: 100%;
  color: rgba(0, 0, 0, 0.65);
  border: none;
}
</style>