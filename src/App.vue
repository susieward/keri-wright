<template>
  <div id="app">
    <div class="header" :class="{ 'white-bg' : showWhite} ">
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
<script>
export default {
data() {
  return {

  }
},

computed: {
  showWhite(){
    return this.$route.name !== 'Home' && this.$route.name !== 'UMCom'
  }


},
  name: 'App',
}

</script>

<style>

#app {
  display: grid;
  min-height: 100vh;
  width: 100vw;
  font-family: 'Montserrat Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  color: #fff;
  background-color: #000;
  align-content: flex-start;
}

.header {
display: grid;
width: 100vw;
grid-template-columns: auto auto;
padding: 30px 35px 30px 35px;
background-color: #000;
align-content: center;
}

.white-bg {
  background-color: #fff;
  color: #000;
}

.white-bg .links a  {
  color: #000;
}

.header-text {
font-family: 'Montserrat Black';
font-size: 20px;
text-transform: uppercase;
}

.links {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 40px;
  justify-content: flex-end;
  padding-right: 50px;
}

.links a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
}

.main {

}
</style>
