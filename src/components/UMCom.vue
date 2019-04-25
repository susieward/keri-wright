<template>
  <div class="umcom">
      <div class="hero">
        <span class="hero-text">I'm a UX designer based in Nashville, catchy tagline</span>
      </div>

      <div class="projects">

          <div class="project">
            <div class="img-container">
              <router-link to="/find-a-church"><img class="proj-img" src="./images/umcom.jpg" /></router-link>
            </div>

            <div class="proj-title">
              Find A Church
            </div>

            <div class="proj-desc">
              A search engine project in development that helps people find a United Methodist Church near them.
            </div>

          </div>

          <div class="project">
            <div class="img-container">
              <router-link to="/source"><img class="proj-img" src="./images/source.png" /></router-link>
            </div>

            <div class="proj-title">
              The Source
            </div>

            <div class="proj-desc">
              A Subscription Landing Page made for United Methodist Communications
            </div>

          </div>

          <div class="project">
            <div class="img-container">
              <router-link to="/what-we-do"><img class="proj-img" src="./images/what.png" /></router-link>
            </div>

            <div class="proj-title">
              What We Do
            </div>

            <div class="proj-desc">
            A Landing Page made for United Methodist Communications
            </div>

          </div>

          <div class="project">
            <div class="img-container">
              <router-link to="/sitecore"><img class="proj-img" src="./images/resource.jpg" /></router-link>
            </div>

            <div class="proj-title">
              Sitecore Training
            </div>

            <div class="proj-desc">
              A Wordpress site in production created for training the employees at United Methodist Communications on our CMS Platform.
            </div>

          </div>

      </div>

  </div>
</template>

<script>
export default {
  name: 'UMCom',

}
</script>

<style>

.umcom {
padding: 0;
display: grid;
grid-template-areas: 'hero'
                      'projects';
grid-gap: 50px;
padding-bottom: 100px;
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
  margin-bottom: 50px;

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
  padding-bottom: 100px;
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
height:auto;
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

  font-size: 18px;
  line-height: 22px;
  line-height: normal;
}
