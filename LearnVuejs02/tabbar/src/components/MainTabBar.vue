<template>
  <TabBar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="~assets/img/tabbar/1_calendar-time-date-schedule.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/1_finance-markting-money-coin-dollar-molecule.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="item-icon" src="~assets/img/tabbar/1_marketing-bill-payment-invoice-receipt.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/1_marketing-email-mail-information-news.svg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item link="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/1_marketing-hand-give-bar-chart-statistic.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/1_marketing-laptop-chat-comment-dialogue.svg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="gray">
      <img slot="item-icon" src="~assets/img/tabbar/1_seo-application-like-thumb.svg" />
      <img slot="item-icon-active" src="~assets/img/tabbar/1_seo-mobile-setting-gear-cog-06.svg" />
      <div slot="item-text">档案</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar';
import TabBarItem from 'components/tabbar/TabBarItem';
export default {
  name: 'MainTabBar',
  data() {
    return {};
  },
  methods: {},
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped></style>
