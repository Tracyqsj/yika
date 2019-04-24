<template>
  <div class="mainWrap">
    <div class="bg">
      <div class="page article js_show">
        <div class="page__bd">
          <article class="weui-article">
            <mpToast type="success" v-model="showToast" content="收藏成功"></mpToast>
            <div class="article-title">
              <div style="font-size: 18px;font-weight: bolder; width: 100vw;word-wrap:break-word">{{article.title}}</div>
            </div>

            <div style="float: left">
              <div>{{article.writer}}</div>

              <div>{{article.date}}</div>
            </div>
            <div style="float: right">
              <i class="iconfont " @click="like">&#xe6af;</i>
            </div>

            <img :src="article.img" style="display: block;width: 96vw;height: 40vw;">
            <div class="text-wrapper">
              {{article.content}}
            </div>
          </article>
        </div>
        <div class="page__ft j_bottom">
          <a href="javascript:home()"></a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import mpToast from 'mpvue-weui/src/toast';
export default {
  components: {
    mpToast
  },
  data() {
    return {
      showToast:false,
      articles:[{
        title : "全系进口的奔驰，油耗5毛，爆胎照样跑，售价低至17.65万",
        writer: "车茶一味",
        date:"2018-09-01 23:34",
        img : "/static/images/benchi-article.jpg",
        content:'  “开大奔，坐宝马”是大多数男士的梦想，也是大多数男士成功的标志。目前的豪华品牌，获得市场认可度最高的还属于奔驰、宝马和奥迪，其他的二线豪华品牌的表现都不称心如意，只有凯迪拉克进行大减价策略，形成错位竞争取得一定的销量。BBA为了获得更好的市场份额，也纷纷进行合资降低价格，但是有一款奔驰旗下的进口车型，一公里只需5毛油钱，爆胎照样可以跑，目前全国最低价已经低至17.65万，颇具性价比，它就是奔驰A级。\n' +
        '  奔驰A级全系进口，属于一款两厢轿车，它的造型时尚动感，它的售价为21.98～33.68万，属于一款高品质低售价的全系进口豪车，目前大多数地区都拥有不同程度的优惠，全国优惠比较大的地区，已经低至17.65万。奔驰A级不仅售价低廉，而且拥有以下三大方面的优势。\n' +
        '  首先，奔驰A级的外观造型就是一大亮点，它的前脸造型美观大气，特别是挂在前脸中网处的奔驰大标显得非常的具有运动感和力量感。两侧的大灯造型也非常的漂亮具有个性。车身的侧面造型富有曲线感，尾部造型简约大气。它的车身尺寸为4304*1780*1433mm，轴距为2699mm，使得奔驰A级的空间表现还不错，谈不上有多充足，但是坐在后排舒适度不错，腿部空间也还有余量，非常的适合白领女士上下班以及买菜的一个代步工具。\n' +
        '  其次，奔驰A级的动力表现出色，搭载了1.6T高低功率和1.8T涡轮增压发动机，均匹配7挡双离合变速箱，最大功率分别为90kw、115kw以及155kw，峰值扭矩为200N.m、250N.m以及350N.m，最大马力分别为122马力、156马力以及211马力。百公里加速分别为8.8s、6.3s以及6.5s。悬架系统为前麦弗逊独立悬架，后四连杆式独立悬架。这款车驾驶起来感受非常的不错，最低配的车型虽然动力只有122马力，但是依然觉得动力很充足，加速超车完全不在话下，同时车身的尺寸比较小，操控性能也比较优良，指哪打哪，指向精准。\n' +
        '  最后，奔驰A级的配置丰富，油耗表现喜人。奔驰A级作为全系进口车型，在配置方面并不像国产化后进行简配，就连优惠后售价17万多的乞丐版都拥有胎压监测装置、零胎压继续行驶、主动刹车系统、驾驶疲劳提示这些高配车型才拥有的配置，其中的零胎压继续行驶非常的不错，爆胎照样可以跑，很大程度保证了行车过程的安全，据统计高速上车速超过160km/h，爆胎发生死亡的概率为100%。所以能够拥有这个配置让人放心不少。奔驰A级的百公里油耗大概6.3L，燃油经济性还是比较不错的，折算下来一公里不到5毛钱。\n' +
        '  小结:奔驰A级各方面都非常的不错，作为一辆全系进口的奔驰豪华轿车，如今价格已经低至17.58万，对于大多数梦想“开大奔，坐宝马”的人士，无疑是最佳福音。'
      }],
      article:{}
    };
  },
  methods: {
    like(){
      this.showToast = true;
    }
  },
  created() {},
  onLoad(options) {
    console.log( options )

    this.article = this.articles[options.index]
  }
  }

</script>

<style scoped>

  .text-wrapper {
    white-space: pre-wrap;
  }
  .article-title{

  }
</style>
