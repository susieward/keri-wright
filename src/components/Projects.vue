<template>
  <div class="projects">

  <div class="project" v-for="project in projects">
    <div class="project-img-col">
      <img class="proj-img" :src="project.src" />
    </div>

    <div class="project-info-col">
      <div class="proj-text">
      <div class="proj-title">
        <p>
          {{ project.name }}
        </p>
      </div>

      <div class="proj-desc">
        <p>
          {{ project.desc }}
        </p>
      </div>
</div>
      <div class="proj-btn-container">
        <button class="proj-btn" @click="goToPage(project)">read more</button>
      </div>
    </div>
  </div>



  </div>

</template>
<script>
export default {
  name: 'Projects',

computed: {
  projects(){
    return this.$store.state.projects
  }
},

methods: {
  goToPage: function(project){
    let path = project.page;

    this.$router.push(path);

  }
}
}

</script>
<style>
.projects {
display: grid;
grid-auto-rows: auto;
grid-gap: 200px;

min-width: 100%;
margin-top: 40px;
}



.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;

}

.project-img-col {
display: grid;
max-width: 100%;

}

.proj-img {
width: 100%;
height:auto;


}

.project-info-col {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 50px;
  align-content: center;

    padding: 0 30px 0 0;
}


.proj-text {
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 20px;
}

.proj-title {
max-width: 90%;
}

.proj-title p {
  text-transform: uppercase;
  font-size: 38px;
  line-height: 55px;
  margin: 0;
}


.proj-desc {

}

.proj-desc p {
font-size: 20px;
line-height: 30px;
margin: 0;
}

.proj-btn-container {

}

.proj-btn {
  background-color: #D86969;
  border: none;
  font-family: 'Montserrat Regular';
  text-transform: uppercase;
  font-size: 18px;
  padding: 12px 16px;
  color: #fff;
  letter-spacing: 0.03em;
  cursor: pointer;
}




@media screen and (max-width: 1200px){

.project {
    grid-gap: 50px;
}

.project-info-col {
  display: grid;
  grid-auto-rows: auto;
grid-gap: 30px;
  align-content: center;

    padding: 0 0px 0 0;
}

.proj-title p {
  font-size: 32px;
  line-height: 48px;
}

.proj-desc p {
font-size: 18px;
line-height: 28px;
margin: 0;
}

.proj-btn {
  font-size: 16px;
  padding: 12px 16px;
}

}

@media screen and (max-width: 900px){

.project {
    grid-gap: 30px;
}

.project-info-col {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 30px;
  align-content: center;

}

.proj-title {
  max-width: 100%;
}

.proj-title p {
  font-size: 28px;
  line-height: 38px;
}

.proj-desc p {
font-size: 16px;
line-height: 26px;
margin: 0;
}

.proj-btn {
  font-size: 16px;
  padding: 10px 14px;
}

}


@media screen and (max-width: 700px){

.project {
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
}


.proj-title p {
  font-size: 24px;
  line-height: 34px;

}

.proj-desc p {
font-size: 16px;
line-height: 26px;
margin: 0;

}

.proj-btn-container {

}

}




</style>
