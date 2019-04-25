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
            <div class="proj-title1">
              a personal project
            </div>
          </div>

          <div class="proj-col2">
            <div class="proj-title2">
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
justify-content: center;
}


.hero {
  grid-area: hero;
  display: grid;
  align-content: center;
  justify-content: center;
  min-height: 500px;

max-width: 1000px;



}

.hero-text {
  font-family: 'Montserrat';
  color: #fff;
  font-size: 40px;
  line-height: normal;
  text-transform: uppercase;
  margin: auto;
  padding-right: 200px;
  padding-left: 30px;


}

.line {
  grid-area: line;
display: grid;
grid-template-columns: auto auto;
  justify-content: center;
}

.line-item1 {
height: 80px;
  border-right: 2px solid #fff;
  margin: auto;
  width: 50px;
}

.line-item2 {
  height: 50px;

    width: 50px;
}





.projects {
  grid-area: projects;
  display: grid;
  grid-template-rows: 1fr 1fr;
  max-width: 1000px;
  min-height: 400px;

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
    font-size: 18px;
    line-height: 24px;
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
  font-family: 'Montserrat';
  font-size: 27px;
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
  font-family: 'Montserrat';
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

.project {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
}

.img-container {
display: grid;
max-height: 500px;
overflow: hidden;
}

#redtoken {
  background-color: #FDAFA4;
}

.proj-img {
width: 100%;
height: auto;
object-fit: cover;

}


.proj-desc {
  font-family: 'Montserrat Regular';
  color: #fff;

  font-size: 18px;
  line-height: 22px;
  line-height: normal;
}

</style>
