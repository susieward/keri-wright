<template>
  <div class="home">
      <div class="hero">
        <span class="hero-text">I'm a UX designer based in Nashville, catchy tagline</span>
      </div>

      <div class="projects">

          <div class="project">
            <div class="img-container" id="redtoken">
              <img class="proj-img" src="./images/transptam.png" />
            </div>

            <div class="proj-title">
              Red Token Project
            </div>

            <div class="proj-desc">
              A personal project I'm currently working on for a non-profit that provides tampons to homeless women.
            </div>

          </div>

          <div class="project">
            <div class="img-container">
              <img class="proj-img" src="./images/umcom.jpg" />
            </div>

            <div class="proj-title">
              United Methodist Communications
            </div>

            <div class="proj-desc">

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
grid-template-areas: 'hero'
                      'projects';
grid-gap: 50px;
}


.hero {
  grid-area: hero;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  min-height: 500px;
max-width: 1000px;
  margin: auto;

}

.hero-text {
  font-family: 'Montserrat Black';
  color: #fff;
  font-size: 40px;
  line-height: 53px;
  text-transform: uppercase;
  margin: auto;
}

.projects {
  grid-area: projects;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  min-height: 700px;
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
  grid-gap: 150px;
}

.project {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
}

.img-container {
display: grid;
align-content: flex-end;
padding-bottom: 0;
padding-top: 10px;
margin-bottom: 10px;
max-height: 500px;
}

#redtoken {
  background-color: #FDAFA4;
}

.proj-img {
width: 100%;
object-fit: cover;

}

.proj-title {
  font-family: 'Montserrat Black';
  color: #fff;
  font-size: 32px;
  line-height: normal;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}

.proj-desc {
  font-family: 'Montserrat Regular';
  color: #fff;
  max-width: 600px;
  font-size: 18px;
  line-height: 22px;
  line-height: normal;
}

</style>
