<template>
  <div class="home">
      <div class="hero">
        <div class="hero-text" v-if="isAbout === false">
        I combine creativity with technology, and help humans be less frustrated along the way.</div>

        <div class="about-hero" v-if="isAbout === true">
          <div class="about-hero-container">
          <div class="about-photo">
            <div class="profile-img-container">


            <img class="profile-img" src="./images/profile.jpg" />
            </div>
          </div>

          <div class="about-bio">
            <p>
              I’m a UX designer currently working for United Methodist Communications in Nashville, Tennessee.  My passions lie in bringing visions to life and creating a more positive environment for users online.
            </p>
          </div>
              </div>
        </div>
      </div>

        <div class="line">
          <div class="line-item1">

          </div>

          <div class="line-item2">

          </div>

        </div>
      <div class="home-content-section">
        <Projects v-if="isAbout === false"></Projects>
        <About v-if="isAbout === true"></About>
      </div>

  </div>
</template>

<script>
import About from './About.vue'
import Projects from './Projects.vue'
export default {
data(){
  return {

  }
},
  name: 'Home',

  props: ['isAbout'],

  components: {
    Projects,
    About
  },

  methods: {
    goToRed: function(){
      this.$router.push('/redtoken');
    },

    goToUMC: function(){
      this.$router.push('/umcom');
    }
  }

}
</script>

<style>

.home {
padding: 0;
display: grid;
grid-template-areas: 'hero hero'
                      'line line'
                      'projects projects';
padding-bottom: 100px;
max-width: 1200px;
position: relative;



}

.about-hero {
  display: grid;

justify-content: center;

padding-bottom: 30px;
}


.about-hero-container {
  display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 100px;
    padding: 0 90px;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
}

.about-photo {
  width: 100%;
display: grid;
    justify-content: flex-start;
    align-content: center;
}

.about-bio {
  display: grid;
  align-content: center;


}

.about-bio p {
  font-size: 20px;
  line-height: 30px;
}

.profile-img-container {
  max-height: 275px;
  max-width: 275px;

}


.profile-img {
  width: 100%;
  height: auto;
    border-radius: 50%;
}




.hero {
  grid-area: hero;
  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 80vh;
  position: relative;
  padding-bottom: 40px;


}

.hero-text {
  font-family: 'Montserrat Regular';
  color: #fff;
  font-size: 45px;
  line-height: 65px;

  text-transform: uppercase;
  padding-right: 200px;
  padding-left: 50px;


}

.line {
  grid-area: line;
display: grid;
grid-template-columns: auto auto;
  justify-content: center;
  align-content: flex-start;
margin-top: 10px;


}

.line-item1 {
height: 140px;
  border-right: 2px solid #fff;
  width: 50px;

}

.line-item2 {
  height: 140px;
  width: 50px;
}





.home-content-section {
  grid-area: projects;
  display: grid;
  margin-top: 60px;


}


.proj-top {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-gap: 50px;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding-left: 10px;
  padding-right: 10px;
}




.proj-top p {
  text-align: left;
  margin: auto;
  color: #959595;
    max-width:600px;
    min-width: auto;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Overpass Mono Bold';

}



.proj-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
padding-left: 20px;
padding-right: 20px;
}

.proj-col1 {
  display: grid;
  justify-content: flex-start;
    align-content: flex-start;
}

.proj-col2 {
  display: grid;
  justify-content: flex-end;
    align-content: flex-start;
}

.proj-title1 {
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 27px;
  height: auto;
}

.proj-title1:hover {
  cursor: pointer;
}

.proj-title2:hover {
  cursor: pointer;
}

.proj-title1:after {
  content: "";
  display: block;

  width: 40%;
  padding-top: 15px;
  border-bottom: 4px solid #fff;
  transition: .5s;
}


.proj-title1:hover:after {
  width: 90%;
}

.proj-title2 {
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 27px;
    height: auto;
}

.proj-title2:after {
  content: "";
  display: block;
  margin: 0;
  margin-left: auto;
  width: 50%;
  padding-top: 15px;
  border-bottom: 4px solid #fff;
  transition: .5s;
}


.proj-title2:hover:after {
  content: "";
  display: block;
  margin: 0;
  margin-left: auto;
  width: 90%;
  padding-top: 15px;
  border-bottom: 4px solid #fff;
}

@media screen and (max-width: 1200px){

  .about-hero {
    display: grid;

  justify-content: center;

  padding-bottom: 0px;
  }

  .about-hero-container {
    display: grid;

      grid-gap: 50px;
      padding: 0 90px;
      justify-content: center;
      margin: 0 auto;
  }

  .profile-img-container {
    max-height: 200px;
    max-width: 200px;

  }


}


@media screen and (max-width: 1000px){

  .about-hero {
    display: grid;

  justify-content: center;

  padding-bottom: 0px;
  }

  .about-hero-container {
    display: grid;

      grid-gap: 50px;
      padding: 0 50px;
      justify-content: center;
      margin: 0 auto;
  }





}


@media screen and (max-width: 800px){


  .about-hero {
    display: grid;

  justify-content: center;

padding-top: 30px;
  }


  .about-hero-container {
    display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      padding: 0 40px;
      justify-content: center;
      margin: 0 auto;
  }

  .about-photo {
    justify-content: center;

  }

  .about-bio {
    display: grid;
    align-content: center;
padding: 0 30px;

  }

  .about-bio p {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
  }

  .profile-img-container {


  }

.home {
  max-width: 700px;
}

.hero {
  min-height: 70vh;
}
  .hero-text {
    font-size: 35px;
    line-height: 45px;
  }

  .home-content-section {
    padding-right: 20px;
    padding-left: 20px;
    grid-gap: 50px;
    padding-top: 20px;
  }

  .proj-top p {
    max-width: 500px;
  }


  .proj-title1 {
    font-size: 22px;
  }

  .proj-title2 {
    font-size: 22px;
  }


  .line {
display: none;
  }
}


@media screen and (max-width: 600px){



    .about-hero {
      display: grid;

    justify-content: center;

  padding-top: 30px;
    }


    .about-hero-container {
      display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        padding: 0 40px;
        justify-content: center;
        margin: 0 auto;
    }



    .profile-img-container {
      max-height: 175px;
      max-width: 175px;

    }

    .about-bio {
      display: grid;
      align-content: center;
  padding: 0 30px;

    }

    .about-bio p {
      font-size: 18px;
      line-height: 30px;
      text-align: center;
    }

  .home {
    max-width: 550px;

  }

  .hero-text {
    font-size: 28px;
    line-height: 38px;
    padding-right: 50px;
  }


  .line-item1 {
  height: 80px;
    border-right: 2px solid #fff;

    width: 10px;
  }

  .line-item2 {
    height: 120px;

      width:10px;
  }


  .home-content-section {
    padding-right: 10px;
    padding-left: 10px;
    min-width: auto;
    grid-gap: 60px;
  }

  .proj-top {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    text-align: center;
    justify-content: center;
    align-content: center;
    align-items:  center;
    padding-left: 10px;
    padding-right: 10px;
  }

  .profile-img-container {
margin: auto;
  }

  .proj-top p {
    max-width: 300px;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }

  .proj-title1 {
    font-size: 16px;
  }


  .proj-title1:after {
    content: "";
    display: block;

    width: 20%;
    padding-top: 10px;
    border-bottom: 3px solid #fff;
  }

  .proj-title1:hover:after {
    width: 90%;
  }

  .proj-title2 {
    font-size: 16px;

  }

  .proj-title2:after {
    content: "";
    display: block;
    margin: 0;
    margin-left: auto;
    width: 50%;
    padding-top: 10px;
    border-bottom: 3px solid #fff;
  }

  .proj-title2:hover:after {
    content: "";
    display: block;
    margin: 0;
    margin-left: auto;
    width: 90%;
    padding-top: 10px;
    border-bottom: 3px solid #fff;
  }

}


@media screen and (max-width: 400px){

  .home {
    max-width: 390px;
padding-bottom: 0px;
  }

  .hero-text {
    font-size: 26px;
    line-height: 36px;
    padding-right: 50px;
  }



  .line-item1 {
  height: 80px;
    border-right: 2px solid #fff;

    width: 10px;
  }

  .line-item2 {
    height: 120px;

      width:10px;
  }



  .home-content-section {
    padding-right: 0px;
    padding-left: 0px;
    min-width: auto;

  }


  .proj-top p {
    max-width: 300px;
    font-size: 16px;
    line-height: 26px;
  }



    .proj-title1 {
      font-size: 16px;
    }

    .proj-title1:after {
      content: "";
      display: block;

      width: 50%;
      padding-top: 10px;
      border-bottom: 3px solid #fff;
    }



    .proj-title2 {
      font-size: 16px;
    }


    .proj-title2:after {
      content: "";
      display: block;
      margin: 0;
      margin-left: auto;
      width: 90%;
      padding-top: 10px;
      border-bottom: 3px solid #fff;
    }




      .proj-bottom {
        padding-left: 30px;
        padding-right: 30px;

      }

      .proj-title1:hover:after {
        width: 60%;
      }



          .about-bio {
            display: grid;
            align-content: center;
        padding: 0 0px;

          }

          .about-bio p {
            font-size: 16px;
            line-height: 30px;
            text-align: center;
          }



}


</style>
