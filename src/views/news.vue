<template>
  <div class='news-page'>
    <TopBar :title='"动态圈"'></TopBar>
    <div class='news-lists'
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10">
      <div v-for="item in newsList" :key="item">
        <List :item='item'></List>
      </div>
    </div>
    <div class="nsr-card-loading">
      <Loading
      :hide-loading="isloadingComplete">
      </Loading>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import TopBar from '../components/topBar';
  import FooterBar from '../components/footerBar';
  import List from '../components/list';
  import Loading from '../components/loading';
  import {mapState} from 'vuex';
  export default {
    name: 'news',
    components: {
      TopBar,
      FooterBar,
      Loading,
      List,
    },
    mounted: function() {
      this.$nextTick(function () {
        this.fetchData(this);
      });
    },
    methods: {
      fetchData: function(progress) {
        this.$store.dispatch('getNewsData', {
          progress: progress,
          refresh: false
        });
      },
      loadMore: function() {
        this.fetchData(this);
      }
    },
    computed: mapState({
      newsList: state => state.newsData,
      isloadingComplete: state => state.isloadingComplete,
      busy: state => state.busy,
    })
  }
</script>
<style lang='less'>
  .news-lists{
      padding-bottom: 3.5rem;
  }
  .nsr-card-loading {
    margin: 30px auto 80px auto;
  }
</style>