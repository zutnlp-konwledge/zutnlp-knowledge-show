<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" size="small">
      <el-form-item label="查询内容">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="不要查询内容">
        <el-input v-model="form.noContent"></el-input>
      </el-form-item>
      <el-form-item label="查询条件">
        <el-select v-model="form.condition" placeholder="请选择查询条件">
          <el-option label="内容" value="content"></el-option>
          <el-option label="标题" value="title"></el-option>
          <el-option label="作者" value="author"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="查询时间">
        <el-select v-model="form.time" placeholder="请选择查询时间" @change="select_time">
          <el-option label="一天内" value="day"></el-option>
          <el-option label="一周内" value="week"></el-option>
          <el-option label="一月内" value="month"></el-option>
          <el-option label="一年内" value="year"></el-option>
          <el-option label="直到现在" value="now"></el-option>
        </el-select>
        <br/>
        <el-button type="primary" @click="onSearch">立即查询</el-button>
      </el-form-item>
      <el-form-item label="关键词选取">
      <el-radio-group v-model="radioNumber" @change="select_number">
        <el-radio :label="1">查询任一关键词</el-radio>
        <el-radio :label="2">查询全部关键词</el-radio>
      </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "ESList",
      data() {
        return {
          form: {
            content: '',  //输入的查询内容
            noContent:'',   //不要查询的内容
            condition:'',  //选择查询条件
            time: '',      //选择查询时间
          },
          sendTime:'',
          tableData:'',     //返回的数据
          total:'',          //返回数据的总数
          radioNumber:'',   //关键词选取
          number:''
        }
      },
      methods: {
        onSearch() {
          this.$http.get("http://127.0.0.1:8083/bool?field=" + this.form.condition + "&value=" + this.form.content + "&value_not=" + this.form.noContent + "&time_filter=" + this.sendTime + "&number=" + this.number).then(response => {
            // this.tableData = response.data;
            // this.total = this.tableData.length;
            console.log(response.data)
          })
        },
        getDate(day) {
          var t = new Date();
          t.setDate(t.getDate() + day);//获取Day天后的日期
          var y = t.getFullYear();
          var m = t.getMonth() + 1;//获取当前月份的日期
          var d = t.getDate();
          return y + "-" + m + "-" + d;
        },
        select_time(i) {
          var d = new Date();
          if (i == 'day') {
            this.sendTime = this.getDate(-1);
            this.sendTime=Date.parse(this.sendTime) //把时间格式更改为毫秒
          } else if (i == 'week') {
            this.sendTime = this.getDate(-7);
            this.sendTime=Date.parse(this.sendTime) //把时间格式更改为毫秒
          } else if (i=='month') {
            this.sendTime = this.getDate(-30);
            this.sendTime=Date.parse(this.sendTime) //把时间格式更改为毫秒
          } else if (i=='year') {
            this.sendTime = this.getDate(-365);
            this.sendTime=Date.parse(this.sendTime) //把时间格式更改为毫秒
          }else {
            this.sendTime = this.getDate(-365);
            // this.sendTime=Date.parse(this.sendTime) //把时间格式更改为毫秒
          }
        },
        select_number(i) {
        if (i == 1)
          this.number = true;//一个关键词
        else
          this.number = false;//多个关键词
        }
      }
    }
</script>

<style scoped>

</style>
