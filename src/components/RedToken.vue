<template>
  <div class="red-token">
    <div class="red-token-container">

      <div class="red-token-title">
        <span class="page-title-text">red token project</span>
        <span class="page-text">
          The Red Token Project is a concept for a charity that will provide tampons to homeless women in the Nashville area. The goal was to have a website that explains what the organization does as well as display event dates and an option to donate to the cause.
        </span>
      </div>

      <div class="page-main">
        <div class="page-main-container">
            <div class="red-images-container">
                <img class="red-img" src="./images/red1.png" />

                <img class="red-img" src="./images/red2.png" />

                <img class="red-img" src="./images/red3.png" />

                <img class="red-img" src="./images/red4.png" />
            </div>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: 'RedToken'
}

</script>
<style>

.red-token {
display: grid;
width: 100vw;
align-content: flex-start;
background-color:#fff;
}

.red-token-container {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto auto;

}

.red-token-title {
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 30px;
background-color: #fff;
min-height: 100px;
padding: 70px 80px 70px 60px;
max-width: 1200px;
margin-right: auto;
margin-left: auto;
}

.red-token-main {
background-color: #EDEDED;
min-height: 700px;
}

.main-container {
display: grid;
max-width: 1200px;
margin-right: auto;
margin-left: auto;

}


.red-images-container {
display: grid;
grid-auto-rows: auto;
grid-template-columns: 1fr;
grid-gap: 50px;
}

.red-img {
  max-width: 75%;
  margin: auto;
}


</style>
