<template>
  <div id="app">
    <el-container>
      <el-header>Knowledge-es查询</el-header>
      <el-main>
        检索字段:
        <el-radio-group v-model="radioField" @change="select_filed">
          <el-radio :label="1">仅标题</el-radio>
          <el-radio :label="2">仅内容</el-radio>
          <el-radio :label="3">作者</el-radio>
        </el-radio-group>
        <br/>
        //
        时间范围选择：
        <el-radio-group v-model="radioTime" @change="select_time">
          <el-radio :label="1">1天内</el-radio>
          <el-radio :label="2">1月内</el-radio>
          <el-radio :label="3">1年内</el-radio>
        </el-radio-group><br/>
        关键词选择
        <el-radio-group v-model="radioNumber" @change="select_number">
          <el-radio :label="1">查询任一关键词</el-radio>
          <el-radio :label="2">查询全部关键词</el-radio>
        </el-radio-group><br/>
        请输入要查询的关键词:
        <el-input v-model="searchValue" size="15" style="width: 300px"></el-input><br/>
        请输入不要查询的关键词:
        <el-input v-model="notSearchValue" size="15" style="width: 300px"></el-input><br/>
        <el-button  @click="send" type="primary" style="width: 150px;height: 40px">查询</el-button>

        <div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            @select="selectItem">
            <el-table-column
              type="selection"

              width="55">
            </el-table-column>
            <el-table-column
              label="内容">
              <template slot-scope="scope"><span>{{ scope.row.content }}</span></template>
            </el-table-column>
          </el-table>
        </div>

        <div>
          <el-button type="primary" round @click="sendToSvm">领域分析</el-button>
          <el-button type="primary" round @click="sendImportWord">主题词语</el-button>
          <el-button type="primary" round @click="sendImportSentence">句子摘要</el-button>
          <div id="svmShow">

          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'ES_Messages',
    data() {
      return {
        field: '',
        time: 0,
        number: '',
        searchValue: '',
        notSearchValue: '',
        radioField: '',
        radioTime: '',
        radioNumber: '',
        tableData: null,  //存放后端返回的json数据
        total: 0,      //数据总条数
        multipleSelection: [],
        svmContent: '',
        svmResult: '',
        ldaContent: '',
        ldaWordResult: '',
        ldaSentenceResult: ''
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getDate(day) {
        var t = new Date();
        t.setDate(t.getDate() + day);//获取Day天后的日期
        var y = t.getFullYear();
        var m = t.getMonth() + 1;//获取当前月份的日期
        var d = t.getDate();
        return y + "-" + m + "-" + d;
      },
      select_filed(i) {
        if (i == 1)
          this.field = "title";
        else if (i == 2)
          this.field = "content";
        else
          this.field = "author";
      },
      select_time(i) {
        var d = new Date();
        if (i == 1) {
          this.time = this.getDate(-1);
          this.time=Date.parse(this.time) //把时间格式更改为毫秒
        } else if (i == 2) {
          this.time = this.getDate(-30);
          this.time=Date.parse(this.time) //把时间格式更改为毫秒
        } else {
          this.time = this.getDate(-365);
          this.time=Date.parse(this.time) //把时间格式更改为毫秒
        }
      },
      select_number(i) {
        if (i == 1)
          this.number = true;//一个关键词
        else
          this.number = false;//多个关键词
      },
      send() {
        this.$http.get("http://127.0.0.1:8083/bool?field=" + this.field + "&value=" + this.searchValue + "&value_not=" + this.notSearchValue + "&time_filter=" + this.time + "&number=" + this.number).then(response => {
          this.tableData = response.data;
          this.total = this.tableData.length;

        })
      },
      selectItem(e) {
        this.svmContent = e[0].content
        this.ldaContent = e[0].content
      },
      sendToSvm() {
        this.$http.get("http://127.0.0.1:15000/domainAnalysis?content=" + this.svmContent).then(response => {
          this.svmResult = response.data;
          document.getElementById("svmShow").innerHTML = this.svmResult;
        })

      },
      sendImportWord() {
        this.$http.get("http://127.0.0.1:1234/lda/word?content=" + this.ldaContent).then(response => {
          this.ldaWordResult = response.data;
          console.log(this.ldaWordResult);
          document.getElementById("svmShow").innerHTML = this.ldaWordResult;
        })
      },
      sendImportSentence() {
        this.$http.get("http://127.0.0.1:1234/lda/sentence?content=" + this.ldaContent).then(response => {
          this.ldaSentenceResult = response.data;
          console.log(this.ldaSentenceResult);
          document.getElementById("svmShow").innerHTML = this.ldaSentenceResult;
        })
      }
    }
  }
</script>
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 640px;
  }
  body > .el-container {
    margin-bottom: 100px;
  }

</style>
