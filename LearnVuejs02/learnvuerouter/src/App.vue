<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <!--通过params方式传递数据-->
    <router-link :to="'/user/' + userId" replace>用户</router-link>
    <!--使用query方式传递数据-->
    <router-link :to="{ path: '/profile', query: { name: 'chek', age: 15, height: 199 } }">我的</router-link>
    <button @click="btnTestClick">测试页面按钮</button>
    <!--使用按钮跳转到用户页面-->
    <button @click="userBtnClick">用户</button>
    <!--使用按钮跳转到我的页面-->
    <button @click="profileBtnClick">我的</button>
    <!--将加载的组件数据放入缓存,exclude属性表示将某些组件排除在外-->
    <keep-alive exclude="Profile,User">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { userId: 'zhangsan' };
  },
  methods: {
    btnTestClick() {
      //用push可以在浏览器中后退
      //this.$router.push('/test');
      //用replace不能在浏览器中后退
      this.$router.replace('/test');
    },
    userBtnClick() {
      this.$router.push('/user/' + this.userId);
    },
    profileBtnClick() {
      this.$router.push({ path: '/profile', query: { name: 'chek', age: 15, height: 199 } });
    }
  }
};
</script>

<style>
.router-link-active {
  color: yellow;
}
</style>
