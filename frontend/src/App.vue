<template>
  <div id="app">
    <div class="card">
      <el-row type="flex" justify="center">
        <el-col :span="14" style="text-align:left">
          <h1>Hello Jean</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="14" style="text-align:left">
          <p>Feel free to ask us anything!</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="Topic">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Content">
              <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Send</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          content: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.axios.post('/user', {
            sender: this.name,
            message: this.content
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style>

  body{
    background-color:#222429;
  }

  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }

  .card {
    width:600px;
    background-color:#222429;
    color:white;
    border:1px solid gray
  }

  .el-form-item__label{
    color:gray !important;
  }

  .el-input__inner{
    background-color:#222429 !important;
    color:white !important;
  }

  .el-textarea__inner{
    background-color:#222429 !important;
    height: 200px;
    color:white !important;
  }
</style>
