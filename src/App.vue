<template>
  <div id="app" :class="{ 'app-hide' : hideSides}">

      <div v-if="isContactOpen === true" ref="contactBar" class="contact" :class="{ 'contact-dark' : hideSides}">
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


      <div class="links" :class="{ 'stacked-links' : workPages}">

        <span><router-link to="" @click.native="showContact">contact</router-link></span>
        <span><router-link to="/">home</router-link></span>
        <span id="work" v-show="workPages"><router-link to="/umcom">work projects</router-link></span>
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
    isContactOpen: false,
    menuClicked: false
  }

},

computed: {

  menuOpen(){
    return this.menuClicked = true;
  },


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


  showMenu(){
     this.menuClicked = true;
   },

  showContact() {
    this.isContactOpen = true;

  },

  closeContact() {
    this.isContactOpen = false;

  }

},

  name: 'App',
}

</script>

<style>

.menu {
  display: none;
}

.menu span {
  width: 35px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
}

.nav {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  color: #000;
  opacity: 0.5;
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 30px;
  z-index: 3;
}


input + label {
   position: fixed;
   top: 40px;
   right: 40px;
   height: 20px;
   width: 15px;
   z-index: 5;
   span {
     position: absolute;
     width: 100%;
     height: 2px;
     top: 50%;
     margin-top: -1px;
     left: 0;
     display: block;
     background: #fff;;
     transition: .5s;
   }
   span:first-child {
     top: 3px;
   }
   span:last-child {
     top: 16px;
   }
 }
 label:hover {
   cursor: pointer;
 }
 input:checked + label {
   span {
     opacity: 0;
     top: 50%;
   }
   span:first-child {
     opacity: 1;
     transform: rotate(405deg);
   }
   span:last-child {
     opacity: 1;
     transform: rotate(-405deg);
   }
 }


 input ~ nav {
     background: white;
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100px;
     z-index: 3;
     transition: .5s;
     transition-delay: .5s;
     overflow: hidden;
     > ul {
       text-align: center;
       position: absolute;
       top: 35%;
       left: 20%;
       right: 20%;
       > li {
         opacity: 0;
         transition: .5s;
         transition-delay: 0s;
         > a {
           text-decoration: none;
           text-transform: uppercase;
           color: $blackColor;
           font-weight: 700;
           font-family: sans-serif;
           display: block;
           padding: 30px;
         }
       }
     }
   }
   input:checked ~ nav {
     height: 100%;
     transition-delay: 0s;
     > ul {
       > li {
         opacity: 1;
         transition-delay: .5s;
       }
     }
   }

.contact {
  grid-area: contact;
  background-color: #FFFCF2;
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: auto;
  color: #000;
  font-family: 'Montserrat Regular';
  position: relative;
}

.contact-dark {
  background-color: #000;
  color: #fff;
}

.contact-close {
  width: 50px;
  font-size: 30px;
  color: #444;
  position: absolute;
  right: 2px;
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
  grid-template-rows: auto auto;
  align-content: flex-start;
  padding: 30px 50px;
  justify-content: flex-start;

}


.contact-left p {
  padding-bottom: 0;
  margin-bottom: 0;
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
  z-index: 0;
  opacity: 1;


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

.fullscreen {
opacity: 0;
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
z-index: 0;
}

.white-bg {
  background-color: #fff;
  color: #000;
}


.white-bg .links a {
  display: block;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
}


.white-bg .links a:after {
  display:block;
  content: '';
  padding-top: 5px;
  border-bottom: solid 2px #000;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}


.white-bg .links a:hover:after {
  cursor: pointer;
  transform: scaleX(1);
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
  display: block;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
}


.links a:after {
  display:block;
  content: '';
  padding-top: 5px;
  border-bottom: solid 2px #fff;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}


.links a:hover:after {
  cursor: pointer;
  transform: scaleX(1);
}


.links span a {
  display: block;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
}


.links span a:after {
  display:block;
  content: '';
  padding-top: 5px;
  border-bottom: solid 2px #fff;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}


.links span a:hover:after {
  cursor: pointer;
  transform: scaleX(1);
}





.main {
grid-area: main;
display: grid;

position: relative;
  z-index: 0;
}

.content {

  display: grid;
justify-content: center;
  z-index: 0;
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
  grid-template-rows: auto auto;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 30px 50px;

}

.footer-left p {

  padding-bottom: 0;
  margin-bottom: 0;
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

.links {
    grid-gap: 20px;

}

}

@media screen and (max-width: 600px){



  .stacked-links {
    grid-template-rows: auto auto auto;
justify-content: flex-end;
text-align: right;
  grid-template-columns: 1fr;

  }



  .links a {
    display: block;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Montserrat Regular';
  }

  .links a:after {
    display:block;
    border: none;
  }


  .links a:hover:after {
    cursor: pointer;

  }

  .links span a {
    display: block;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Montserrat Regular';
  }


  .links span a:after {
    display:block;
    border: none;
  }


  .links span a:hover:after {
    cursor: pointer;

  }


  .white-bg .links a {
    display: block;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Montserrat Regular';
  }


  .white-bg .links a:after {
    display:block;
    border: none;

  }


  .white-bg .links a:hover:after {
    cursor: pointer;

  }

  .header {
    padding: 40px 30px 30px 35px;
    grid-gap: 10px;
  }


  .header-text {

  }

    .footer {
        grid-template-rows: auto 1fr;
        min-height: auto;

    }


    .footer-top {

      grid-template-rows: auto auto;
      grid-gap: 0;
      align-content: flex-start;
      grid-template-columns: 1fr;
    }


    .footer-right {
        padding: 20px 50px 0px 50px;

    }


    .footer-left {
      padding: 30px 50px 0px 50px;

    }


    .contact {
      grid-template-rows: auto auto;
      grid-template-columns: 1fr;
      align-content: flex-start;
    }

    .contact-right {
      display: grid;
      justify-content: flex-end;
      padding: 0 40px 20px 40px;
        font-size: 16px;
        line-height: 22px;
    }

    .contact-left {
padding: 20px 40px;

    }


}

</style>
