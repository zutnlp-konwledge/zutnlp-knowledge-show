<template>
  <div>
    <div align="right"><br>
      <el-button @click="wh1" type="success" round><i class="el-icon-refresh"></i>刷新</el-button>
    </div>
    <ul v-for="www in get1data">
      <li>{{www.sentence}}{{www.weight}}</li>
    </ul>


  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "LDADigest",
    data() {
      return {
        wh1data:[],
        wh1site:[],
        get1data:[]
      }
    },

    methods: {
      hangde:function(){
        this.get1data.push({"sentence":this.wh1data[2][0].sentence,"weight":this.wh1data[2][1].weight});
        this.get1data.push({"sentence":this.wh1data[2][1].sentence,"weight":this.wh1data[2][1].weight});
        this.get1data.push({"sentence":this.wh1data[2][2].sentence,"weight":this.wh1data[2][2].weight});



      },

      wh1: function () {
        var that = this;
        const path = 'http://127.0.0.1:1234/lda?connect=1%E6%9C%888%E6%97%A5%E4%B8%8B%E5%8D%88%EF%BC%8C%E5%8C%97%E4%BA%AC%E5%B8%82%E8%A5%BF%E5%9F%8E%E5%8C%BA%E6%96%B0%E9%97%BB%E5%8A%9E%E5%AE%98%E6%96%B9%E5%BE%AE%E5%8D%9A%E2%80%9C%E5%8C%97%E4%BA%AC%E8%A5%BF%E5%9F%8E%E2%80%9D%E5%8F%91%E5%B8%83%E6%B6%88%E6%81%AF%EF%BC%9A8%E6%97%A5%E4%B8%8A%E5%8D%8811%E7%82%B917%E5%88%86%E5%B7%A6%E5%8F%B3%EF%BC%8C%E5%AE%A3%E5%B8%88%E4%B8%80%E9%99%84%E5%B0%8F%E6%A0%A1%E5%86%85%E5%8F%91%E7%94%9F%E4%B8%80%E7%94%B7%E5%AD%90%E4%BC%A4%E5%AE%B3%E5%AD%A9%E5%AD%90%E4%BA%8B%E4%BB%B6%E3%80%82%E5%88%9D%E6%AD%A5%E4%BA%86%E8%A7%A3%EF%BC%8C%E5%85%B1%E6%9C%8920%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%8F%97%E4%BC%A4%EF%BC%8C%E5%9D%87%E5%B7%B2%E9%80%81%E5%88%B0%E5%8C%BB%E9%99%A2%E6%95%91%E6%B2%BB%EF%BC%8C%E5%85%B6%E4%B8%AD3%E4%BA%BA%E4%BC%A4%E5%8A%BF%E8%BE%83%E9%87%8D%EF%BC%8C%E7%9B%AE%E5%89%8D%E7%94%9F%E5%91%BD%E4%BD%93%E5%BE%81%E5%B9%B3%E7%A8%B3%EF%BC%8C%E6%97%A0%E7%94%9F%E5%91%BD%E5%8D%B1%E9%99%A9%E3%80%82%E5%AB%8C%E7%96%91%E4%BA%BA%E5%B7%B2%E8%A2%AB%E5%BD%93%E5%9C%BA%E6%8E%A7%E5%88%B6%E3%80%82%E5%B8%82%E3%80%81%E5%8C%BA%E5%85%AC%E5%AE%89%E3%80%81%E5%8D%AB%E7%94%9F%E3%80%81%E6%95%99%E8%82%B2%E3%80%81%E5%BA%94%E6%80%A5%E7%AD%89%E7%9B%B8%E5%85%B3%E5%8D%95%E4%BD%8D%E6%AD%A3%E5%9C%A8%E5%85%A8%E5%8A%9B%E5%BC%80%E5%B1%95%E6%95%91%E6%B2%BB%E5%92%8C%E8%B0%83%E6%9F%A5%E5%B7%A5%E4%BD%9C%E3%80%821%E6%9C%888%E6%97%A5%E4%B8%8B%E5%8D%8815%E6%97%B6%E8%AE%B8%EF%BC%8C%E5%B0%81%E9%9D%A2%E6%96%B0%E9%97%BB%E8%AE%B0%E8%80%85%E5%9C%A8%E4%BA%8B%E5%8F%91%E5%B0%8F%E5%AD%A6%E9%97%A8%E5%A4%96%E7%9C%8B%E5%88%B0%EF%BC%8C%E8%AF%A5%E5%AD%A6%E6%A0%A1%E7%9B%AE%E5%89%8D%E4%BB%8D%E5%9C%A8%E6%AD%A3%E5%B8%B8%E4%B8%8A%E8%AF%BE%EF%BC%8C%E5%A4%A7%E6%89%B9%E5%AD%A6%E7%94%9F%E5%AE%B6%E9%95%BF%E5%9C%A8%E9%97%A8%E5%A4%96%E7%AD%89%E5%80%99%E6%8E%A5%E5%AD%A6%E7%94%9F%E6%94%BE%E5%AD%A6%E3%80%82%E5%9C%A8%E7%9B%B8%E5%85%B3%E6%89%A7%E5%8B%A4%E4%BA%BA%E5%91%98%E5%BC%95%E5%AF%BC%E4%B8%8B%EF%BC%8C%E5%AD%A6%E7%94%9F%E5%AE%B6%E9%95%BF%E7%BB%8F%E7%99%BB%E8%AE%B0%E5%90%8E%E5%8F%AF%E8%BF%9B%E5%85%A5%E5%AD%A6%E6%A0%A1%E6%8E%A5%E5%AD%A9%E5%AD%90%E3%80%82%E5%9C%A8%E5%AD%A6%E6%A0%A1%E5%8D%97%E5%A2%99%E5%A4%96%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%90%AC%E5%88%B0%E6%A0%A1%E5%86%85%E5%AD%A6%E7%94%9F%E5%AC%89%E7%AC%91%E6%89%93%E9%97%B9%E7%9A%84%E5%A3%B0%E9%9F%B3%E3%80%82%E4%B8%80%E4%BD%8D%E5%AD%A6%E7%94%9F%E5%AE%B6%E9%95%BF%E5%91%8A%E8%AF%89%E8%AE%B0%E8%80%85%EF%BC%8C%E4%BA%8B%E5%8F%91%E5%AD%A6%E6%A0%A1%E4%B8%BA%E5%AE%A3%E5%B8%88%E4%B8%80%E9%99%84%E5%B0%8F%E5%88%86%E9%83%A8%EF%BC%8C%E8%AF%A5%E6%A0%A1%E4%BA%8C%E3%80%81%E4%B8%89%E5%B9%B4%E7%BA%A7%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%AD%A4%E4%B8%8A%E8%AF%BE%E3%80%82%E5%A4%9A%E4%BD%8D%E5%9C%A8%E9%99%84%E8%BF%91%E6%89%A7%E5%8B%A4%E7%9A%84%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%A7%B0%EF%BC%8C%E4%BA%8B%E5%8F%91%E4%B8%BA%E8%AF%A5%E5%B0%8F%E5%AD%A6%E4%BA%8C%E5%B9%B4%E7%BA%A7%E3%80%82'
        axios.get(path).then(function (response) {
          that.wh1data = response.data;
          //alert(that.wh1data[0][0].word)
          that.hangde();
        }).catch(function (error) {
          alert('Error' + error)
        })
      }
    }
  }
</script>

<style scoped>

</style>
