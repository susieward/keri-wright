<template>
  <div id="app" :class="{ 'app-hide' : hideSides}">

      <div v-show="isContactOpen === true" ref="contactBar" class="contact" :class="{ 'contact-dark' : hideSides}">
        <div class="contact-left">
          <p>
            EMAIL: <span><a href="mailto:keriannwright@gmail.com">keriannwright@gmail.com</a></span>
          </p>

          <p>
            PHONE: (931) 209-4422
          </p>
        </div>

        <div class="contact-right">
          <p>
            I’m always on the lookout for new projects and people to collaborate with. If you have a
cool project you need designed please get in touch!
          </p>
        </div>

        <div class="contact-close" :class="{ 'contact-close-dark' : hideSides }">
          <p @click="closeContact">
            &#215;
          </p>
        </div>
      </div>


    <div class="header" ref="header" :class="{ 'white-bg' : showWhite} ">
      <span class="header-text">pleased to meet you</span>
      <div class="links">
        <span v-show="workPages"><router-link to="/umcom">work projects</router-link></span>
        <span @click="showContact">contact</span>
        <span><router-link to="/">home</router-link></span>
      </div>
    </div>

    <div class="left" v-show="sidesVisible">
      <span class="left-text"><p>ux design</p></span>
    </div>

<div class="main">
  <div class="content">


    <router-view></router-view>
      </div>
    </div>

    <div class="right" v-show="sidesVisible">
      <span class="right-text">keri wright</span>
    </div>

    <div class="footer" :class="{ 'footer-dark' : hideSides }">
      <div class="footer-top">


      <div class="footer-left">
        <p>
          EMAIL: <span><a href="mailto:keriannwright@gmail.com">keriannwright@gmail.com</a></span>
        </p>

        <p>
          PHONE: (931) 209-4422
        </p>
      </div>

      <div class="footer-right">
        <p>
          I’m always on the lookout for new projects and people to collaborate with. If you have a
cool project you need designed please get in touch!
        </p>
      </div>
      </div>

      <div class="footer-bottom">
        <p>
          This site was designed by Keri Wright and developed by <a href="https://susieward.dev">Susie Ward</a>.
        </p>
      </div>
    </div>
  </div>



</template>
<script>

export default {
data() {
  return {
    isContactOpen: false
  }

},

computed: {

  workPages(){

    return this.$route.name !== 'RedToken' && this.$route.name !== 'Home' && this.$route.name !== 'UMCom'

  },

  sidesVisible(){
    return this.$route.name === 'Home' || this.$route.name === 'UMCom';

  },

  hideSides(){
      return this.$route.name === 'RedToken' || this.$route.name === 'FindAChurch' || this.$route.name === 'Source' || this.$route.name === 'Sitecore' || this.$route.name === 'WhatWeDo'

  },

  showWhite(){
    return this.$route.name !== 'Home' && this.$route.name !== 'UMCom'
  },

  showScroll(){
    return this.$route.name === 'RedToken' || this.$route.name === 'FindAChurch'
  }
},

methods: {

  showContact() {
    this.isContactOpen = true;
    this.$nextTick(function(){
      this.$refs.contactBar.style.height = "200px";
    })
  },

  closeContact() {
    this.isContactOpen = false;
    this.$refs.contactBar.style.height = "0px";
  },

},

  name: 'App',
}

</script>

<style>

.contact {
  grid-area: contact;
  background-color: #FFFCF2;
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 0px;
  color: #000;
  font-family: 'Montserrat Regular';
}

.contact-dark {
  background-color: #000;
  color: #fff;
}

.contact-close {
  width: 50px;
  font-size: 30px;
  color: #444;
}

.contact-close-dark {
  color: #fff;
}

.contact-close p:hover {
  color: #D86969;
    cursor: pointer;
}

.contact-left {
  display: grid;
  grid-template-rows: auto auto auto;
  align-content: flex-start;
  padding: 30px 50px;
  justify-content: flex-start;

}

.contact a {
  color: #D86969;
  text-decoration: none;
}

.contact-right {
  display: grid;
  justify-content: flex-end;
  padding: 30px 50px;
    font-size: 16px;
    line-height: 22px;
}


#app {
  display: grid;
  min-height: 100vh;
  min-width: 100vw;
  font-family: 'Montserrat Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  color: #fff;
  background-color: #000;


  grid-template-areas:
                        'contact contact contact'
                        'header header header'
                      'left main right'
                      'left main right'
                      'footer footer footer';
}

.app-hide {

  grid-template-areas:
                        'contact contact contact'
                        'header header header'
                      'main main main'
                      'footer footer footer';
}

.header {
grid-area: header;
display: grid;
width: 100vw;
grid-template-columns: auto auto;
padding: 40px 80px 30px 95px;
background-color: #000;
align-content: center;
position: relative;
}

.white-bg {
  background-color: #fff;
  color: #000;
}

.white-bg .links a  {
  color: #000;
}

.header-text {
font-family: 'Montserrat Semi-Bold';
font-size: 16px;
text-transform: uppercase;
}

.links {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;
  justify-content: flex-end;
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 16px;

}

.links span {
}

.links span:hover {
  cursor: pointer;
}


.links a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-family: 'Montserrat Regular';
}

.main {
grid-area: main;
display: grid;

position: relative;
}

.content {

  display: grid;
justify-content: center;

}

.hide {
  display: none;
}

.left {
grid-area: left;
height: 100vh;

display: grid;
justify-content: center;
align-content: flex-start;
margin-top: 35vh;
max-width: 85px;
position: relative;

}

.left-text {
  font-size: 16px;
  text-transform: uppercase;
font-family: 'Overpass Mono Bold';
margin-left: -6px;

}

.left-text p {
transform: rotate(-90deg);
padding: 0;
margin: 0;

}

.right {
grid-area: right;
height: 100vh;
display: grid;
justify-content: center;
align-content: center;
align-content: flex-start;
margin-top: 29.7vh;
width: 80px;
margin-left: auto;
margin-right: 0;

}

.right-text {
  font-size: 16px;
  text-transform: uppercase;
  writing-mode: vertical-rl;
text-orientation: mixed;
font-family: 'Overpass Mono Bold';
}

.footer {
  grid-area: footer;
  display: grid;
  min-height: 200px;
  background-color: #FFFCF2;
  grid-template-rows: 1fr auto;
  color: #000;
  font-family: 'Montserrat Regular';
  font-size: 16px;
  line-height: 24px;
  width: 100vw;
  bottom: 0;
}

.footer-dark {
  background-color: #000;
  color: #fff;
}

.footer-top {
  display: grid;
  grid-template-columns: auto auto;
}

.footer-left {
  display: grid;
  grid-template-rows: auto auto auto;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 30px 50px;

}

.footer-right {
  display: grid;
  padding: 30px 50px;

    justify-content: flex-end;

}

.footer a {
  color: #D86969;
  text-decoration: none;
}

.footer-bottom {
  display: grid;
justify-content: flex-end;
padding: 0px 50px 30px 50px;
}

@media screen and (max-width: 1200px){

  .header {
    padding: 40px 50px 30px 65px;
  }

}


@media screen and (max-width: 800px){

#app {
  grid-template-areas:
                        'contact contact contact'
                        'header header header'
                      'main main main'
                      'main main main'
                      'footer footer footer';
}

.header {
  padding: 40px 50px 30px 65px;
}

.left {
  display: none;
}

.right {
  display: none;
}

}

@media screen and (max-width: 600px){


  .header {
    padding: 40px 30px 30px 35px;
    grid-gap: 10px;
  }

  .links {
      grid-gap: 20px;
  }

    .footer {
        grid-template-rows: auto 1fr;

    }


    .footer-top {

      grid-template-rows: auto auto;
      grid-template-columns: 1fr;
    }


}

</style>
