<template>
  <div id="app">
    <div class="header">
      <span class="header-text">Hi I'm Keri, nice to meet you</span>
      <div class="links">
        <span><router-link to="/about">about</router-link></span>
        <span><router-link to="/">home</router-link></span>
      </div>
    </div>

<div class="main">
    <router-view></router-view>
    </div>

  </div>
</template>

<style>

#app {
  display: grid;
  min-height: 100vh;
  width: 100vw;
  font-family: 'Montserrat Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  background-color: #000;
  color: #fff;
  align-content: flex-start;
}

.header {
display: grid;
width: 100vw;
grid-template-columns: auto auto;
padding: 30px 35px 30px 35px;

align-content: center;
}

.header-text {
font-family: 'Montserrat Black';
font-size: 20px;
text-transform: uppercase;
}

.links {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  justify-content: flex-end;
  padding-right: 50px;
}

.links a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
}

.main {
  margin-right: 30px;
  margin-left: 30px;
margin-bottom: 100px;
}
</style>
