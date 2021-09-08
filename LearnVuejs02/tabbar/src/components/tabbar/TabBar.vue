<template>

  <div id="tab-bar" >
  <slot/>
      <!-- <div class="tab-bar-item"><img src="../../assets/img/tabbar/1_calendar-time-date-schedule.svg">首页</div>
      <div class="tab-bar-item"><img src="../../assets/img/tabbar/1_finance-markting-money-coin-dollar-molecule.svg">分类</div>
      <div class="tab-bar-item"><img src="../../assets/img/tabbar/1_marketing-email-mail-information-news.svg">购物车</div>
      <div class="tab-bar-item"><img src="../../assets/img/tabbar/1_seo-mobile-setting-gear-cog-07.svg">我的</div> -->
    </div>

</template>

<script>
export default{
  name:'TabBar',
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -8px 8px 0 rgba(0, 0, 0, 0.21)
}

</style>
