<template>
  <div class="red-token" ref="test">
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

    <back-to-top bottom="30px" right="40px">
      <div class="icon-container">

        <svg  class="icon icon-chevron-top" viewBox="0 0 32 32" aria-hidden="true"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></svg>

          </div>
    </back-to-top>

  </div>

</template>
<script>
import BackToTop from 'vue-backtotop'
export default {
  name: 'RedToken',

    components: {
      BackToTop
    }
}

</script>
<style>


.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.red-token {
display: grid;
width: 100vw;
align-content: flex-start;
background-color:#fff;
position: relative;
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


.scroll-top {
position: fixed;
right: 0;
bottom: 0;
margin-right: 3%;
border: 1px solid #222;
}




@media screen and (max-width: 600px){

  .red-img {
    max-width: 100%;
    margin: auto;
  }

}


</style>
