<template>
  <div id="app">
    <div class="header">

      <div class="title">
        <h1>Spend A Billion Dollars</h1>
      </div>
      <router-link to="/">
        <div class="logo">
          <p><strong>${{$root.wallet}}</strong></p>
        </div>
      </router-link>

    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <router-link to="/admin">Admin</router-link>
      <br>
      <hr>
      <a href="https://github.com/Epic-Doughnut/creative-project-4">GitHub</a>
    </div>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #111D13;
  color: #A1CCA5;
  padding: 0px;
  margin: 0px;
}

.logo{
  font-size: 24px;
  color: #111D13;
  background-color: #DE9151;
  text-align: right;
  float: right;
  width: 20vw;
  margin: 10px;
  /*display: flex;*/
}
/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #415D43;
  color: #A1CCA5;
  justify-content: space-evenly;
  position: sticky;
  top:0;
  /*width: 100vw;*/
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  /*margin-top: 100px;*/
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>