<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/messages" tag="button">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default{
  name:"Home",
  data(){
    return{}
  },
  methods:{
  },
  //activated和deactivated只有在keep-alive作用时才起作用
  activated() {
 /*  Vue-router 报NavigationDuplicated的可能解决方案
出现这个问题，控制台会报[NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}]。其原因在于Vue-router在3.1之后把$router.push()方法改为了Promise。
所以假如没有回调函数，错误信息就会交给全局的路由错误处理，因此就会报上述的错误。
如果你仔细观察并复现了多次错误你会发现，vue-router是先报了一个Uncaught (in promise)的错误(因为push没加回调)，然后再点击路由的时候才会触发NavigationDuplicated的错误(路由出现的错误，全局错误处理打印了出来)。
通过加入catch(err => {err})进行回调解决报错*/
    this.$router.push(this.path).catch(err => {err})
  },
  beforeRouteLeave (to, from, next) {
    this.path=this.$route.path
    next()
  }
}
</script>

<style scoped>
</style>
