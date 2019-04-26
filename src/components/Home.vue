<template>
  <div class="home">
      <div class="hero">
        <div class="hero-text">Hi, I'm Keri.<br />
        I combine creativity with technology, and help humans be less frustrated along the way.</div>
      </div>

        <div class="line">
          <div class="line-item1">

          </div>

          <div class="line-item2">

          </div>

        </div>
      <div class="projects">
        <div class="proj-top">
          <p>
            I’m a UX designer currently working for United Methodist Communications in Nashville, Tennessee. My passions lie in bringing visions to life and creating a more positive environment for users online.
          </p>
        </div>

        <div class="proj-bottom">

          <div class="proj-col1">
            <div class="proj-title1" @click="goToRed">
              a personal project
            </div>
          </div>

          <div class="proj-col2">
            <div class="proj-title2" @click="goToUMC">
              work projects
            </div>
          </div>

        </div>

      </div>

  </div>
</template>

<script>
export default {
  name: 'Home',

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


.hero {
  grid-area: hero;
  display: grid;
  align-content: center;
  justify-content: center;

  min-height: 80vh;
  position: relative;




}

.hero-text {
  font-family: 'Montserrat Regular';
  color: #fff;
  font-size: 40px;
  line-height: 55px;

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
height: 100px;
  border-right: 2px solid #fff;
  width: 50px;
}

.line-item2 {
  height: 80px;

    width: 50px;
}





.projects {
  grid-area: projects;
  display: grid;
  grid-template-rows: 1fr 1fr;

  min-height: 400px;
  position: relative;



}

.proj-top {
  display: grid;
  justify-content: center;
  text-align: center;
}

.proj-top p {
  text-align: center;
  margin: auto;
  color: #959595;
    max-width: 700px;
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
}

.proj-col2 {
  display: grid;
  justify-content: flex-end;
}

.proj-title1 {
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 27px;
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
}

.proj-title2 {
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 27px;
}

.proj-title2:after {
  content: "";
  display: block;
  margin: 0;
  margin-left: auto;
  width: 50%;
  padding-top: 15px;
  border-bottom: 4px solid #fff;
}

@media screen and (max-width: 800px){


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

  .projects {
    padding-right: 20px;
    padding-left: 20px;
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
}


@media screen and (max-width: 600px){
  .home {
    max-width: 550px;

  }

  .hero-text {
    font-size: 24px;
    line-height: 34px;
    padding-right: 100px;
  }

  .proj-title1 {
    font-size: 20px;
  }

  .proj-title2 {
    font-size: 20px;
  }

}


@media screen and (max-width: 400px){

  .home {
    max-width: 390px;

  }

  .hero-text {
    font-size: 24px;
    line-height: 34px;
    padding-right: 100px;
  }

.line {

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



  .projects {
    padding-right: 0px;
    padding-left: 0px;
    min-width: auto;
    grid-gap: 40px;
  }


  .proj-top p {
    max-width: 300px;
    font-size: 16px;
    line-height: 26px;
  }


    .proj-title1 {
      font-size: 18px;
    }

    .proj-title1:after {
      content: "";
      display: block;

      width: 20%;
      padding-top: 10px;
      border-bottom: 3px solid #fff;
    }

    .proj-title2 {
      font-size: 18px;
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

      .proj-bottom {
        padding-left: 30px;
        padding-right: 30px;

      }



}


</style>
