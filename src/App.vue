<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" breakpoint="md"
      collapsedWidth="0">
      <div class="logo">
        <img src="./assets/images/logo.png" alt="logo"/>
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link to="/">Home</router-link> |
          <span>nav 1</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-icon
   width="200px"
          height="200px"
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer>
        Created by Hivelocity &copy; 2020
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style lang="less">
.logo img {
  width: 100%;
}
.ant-layout-header {
  padding: 0;
  position: relative;
}
.trigger {
  position: fixed;
  top: 18px;
  color: white;
  font-size: 1.2rem;
  z-index: 9999;
  background: #1A1C1C;
  padding: .4rem;
}
.ant-layout.ant-layout-has-sider {
  min-height: 100%;
}
.ant-layout-footer {
  text-align: center;
  font-weight: 900;
  color: #2f2f2f;
}
#components-layout-demo-custom-trigger .logo {
  height: 52px;
  background: #2f2f2f;
}
</style>
