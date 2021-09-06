<template>
  <div>
    <p>用户{{ userId }}的页面</p>
    <p>用户{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {return{}},
  computed: {
    userId() {
      //获取当前激活的路由
      return this.$route.params.userId;
    }
  },
  methods: {}
};
</script>

<style scoped></style>
