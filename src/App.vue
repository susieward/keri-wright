<template>
  <div id="app">

      <div ref="contactBar" class="contact">
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

        <div class="contact-close">
          <p @click="closeContact">
            &#215;
          </p>
        </div>
      </div>


    <div class="header" ref="header" :class="{ 'white-bg' : showWhite} ">
      <span class="header-text">lovely to meet you</span>
      <div class="links">
        <span @click="showContact">contact</span>
        <span><router-link to="/">home</router-link></span>
      </div>
    </div>

    <div class="left">
      <span class="left-text">ux design</span>
    </div>

<div class="main">
    <router-view></router-view>
    </div>

    <div class="right">
      <span class="right-text">keri wright</span>
    </div>

    <div class="footer">
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
  font-family: 'Montserrat';
}

.contact-close {
  width: 50px;
  font-size: 30px;
  color: #444;
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

}

.contact a {
  color: #D86969;
  text-decoration: none;
}

.contact-right {
  display: grid;
  padding: 30px 50px;
    font-size: 16px;
    line-height: 22px;
}


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

  grid-template-areas:
                        'contact contact contact'
                        'header header header'
                      'left main right'
                      'left main right'
                      'footer footer footer';
}

.header {
grid-area: header;
display: grid;
width: 100vw;
grid-template-columns: auto auto;
padding: 30px 85px 30px 85px;
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
font-family: 'Montserrat Medium';
font-size: 20px;
text-transform: uppercase;
}

.links {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 40px;
  justify-content: flex-end;
  text-transform: uppercase;
  font-size: 16px;

}

.links span:hover {
  cursor: pointer;
}


.links a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
}

.main {
grid-area: main;


}

.left {
grid-area: left;
height: 100vh;

display: grid;
justify-content: center;
align-content: center;
}

.left-text {
  font-size: 16px;
  text-transform: uppercase;
  writing-mode: vertical-lr;
text-orientation: mixed;
}

.right {
grid-area: right;
height: 100vh;
display: grid;
justify-content: center;
align-content: center;

}

.right-text {
  font-size: 16px;
  text-transform: uppercase;
  writing-mode: vertical-rl;
text-orientation: mixed;
}

.footer {
  grid-area: footer;
  display: grid;
  min-height: 200px;
  background-color: #FFFCF2;
  grid-template-rows: 1fr auto;
  color: #000;
  font-family: 'Montserrat';
}

.footer-top {
  display: grid;
  grid-template-columns: auto 1fr;
}

.footer-left {
  display: grid;
  grid-template-rows: auto auto auto;
  align-content: flex-start;
  padding: 30px 50px;

}

.footer-right {
  display: grid;
  padding: 30px 50px;
    font-size: 16px;
    line-height: 22px;
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

</style>
