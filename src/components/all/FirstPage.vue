<template>
  <div id="app">
    <div align="center">
      <h2><font color="#00001">知识智能感知</font></h2>
      <br/>
      <div align="center">
        <el-button type="success" round>Knowledge</el-button>
        <el-button type="primary" plain @click="open_ElasticSearch">ElasticSearch</el-button>
        <el-button type="success" plain @click="open_Domain">领域 分类</el-button>
        <el-button type="info" plain @click="open_Subject">主题 分类</el-button>
        <el-button type="warning" plain @click="open_Digest">摘要 提取</el-button>
        <el-button type="danger" plain @click="open_Entity">实体 抽取</el-button>

        <el-button  type="warning" round>Knowledge</el-button>
      </div>
      <br/>
    </div>
    <br/>
    <br/>

    <e-s-list/>
    <el-input id="text"
              type="textarea"
              style="font-size: 30px"
              :autosize="{ minRows: 6, maxRows: 10}"
              placeholder="请输入内容"
              v-model="textarea"
    >
    </el-input>
    <div align="center">
      <el-button style="" type="info">开始分析</el-button><br/><br/>
    </div>

    <div align="center">
      <el-container>
        <el-header>
          <el-row>
            <!--<el-button index="1" type="primary" round><router-link to="/ldaDigest">领域分类</router-link></el-button>-->
            <el-button index="1" type="primary" round><router-link to="svmDomain">领域分类</router-link></el-button>
            <el-button index="2" type="success" round><router-link to="ldaSubjects">主题分类</router-link></el-button>
            <el-button index="3" type="warning" round><router-link to="ldaDigest">摘要提取</router-link></el-button>

            <!--<el-button type="warning" round>警告按钮</el-button>-->
            <!--<el-button type="danger" round>危险按钮</el-button>-->
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>

        </el-main>


        <!--<component :is=""></component>-->
      </el-container>


    </div>

  </div>
</template>



<script>
  import ESList from "../ElasticSearch/ESList"
  export default {
    name: 'FirstPage',
    data(){
      return{
      }
    },
    components:{
      ESList
    },
    methods:{

      open_ElasticSearch(){
        const h = this.$createElement;

        this.$notify({
          title: 'ElasticSearch',
          message: h('i', { style: 'color: teal'}, 'ElasticSearch是一个基于Lucene的搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口。Elasticsearch是用Java开发的，并作为Apache许可条款下的开放源码发布，是当前流行的企业级搜索引擎。设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。')
        });
      },
      open_Domain(){
        const m=this.$createElement;
        this.$notify({
          title: '领域分类',
          message: m('i', { style: 'color: teal'},'支持向量机（Support Vector Machine, SVM）是一类按监督学习（supervised learning）方式对数据进行二元分类（binary classification）的广义线性分类器（generalized linear classifier），其决策边界是对学习样本求解的最大边距超平面（maximum-margin hyperplane）。')
        });

      },
      open_Subject(){
        const t=this.$createElement;
        this.$notify({
          title: '主题分类',
          message: t('i', { style: 'color: teal'},'LDA（Latent Dirichlet Allocation）是一种文档主题生成模型，也称为一个三层贝叶斯概率模型，包含词、主题和文档三层结构。')
        });

      },
      open_Digest(){
        const d=this.$createElement;
        this.$notify({
          title: '摘要提取',
          message: d('i', { style: 'color: teal'},'就是利用计算机自动地从原始文献中提取文摘，文摘是全面准确地反映某一文献中心内容地简单连贯的短文。常用方法是自动摘要将文本作为句子的线性序列，将句子视为词的线性序列。')
        });

      },
      open_Entity(){
        const d=this.$createElement;
        this.$notify({
          title: '实体抽取',
          message: d('i', { style: 'color: teal'},'开发中ing，敬请期待！！！')
        });

      },

      activeIndex2(){}


    }

  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }


  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  body > .el-container {
    margin-bottom: 1000px;
  }



</style>
