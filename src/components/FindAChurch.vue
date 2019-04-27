<template>
  <div class="page">
    <div class="page-container">

      <div class="page-title">

        <span class="page-title-text">find a church</span>
        <span class="page-text">
          This is the redesigned mockup of a preexisting website at United Methodist Communications. The goal was to make it more user-friendly and aesthetically appealing, while also fitting the current theme of our upcoming site.
        </span>

      </div>

      <div class="page-main">
        <div class="page-main-container" id="church-main-container">

          <div class="find-a-church-container">

            <div class="find-old">
              <div class="find-title">
                the old version</div>

                <img class="find-img" src="./images/find-old.png" />

            </div>

            <div class="find-new">
              <div class="find-title">
                the rework</div>

              <div class="find-items">

                <div class="find-item">
                  <div class="text">home page</div>
                  <img class="find-img" src="./images/find-home.png" />

                </div>

                <div class="find-item">
                  <div class="text">results page with map</div>
                  <img class="find-img" src="./images/find-map.png" />

                </div>


                <div class="find-item">
                  <div class="text">results page without map</div>
                  <img class="find-img" src="./images/find-no-map.png" />

                </div>

                <div class="find-item">
                  <div class="text">church profile</div>
                  <img class="find-img" src="./images/find-profile.png" />

                </div>
              </div>
            </div>

            <div class="find-mobile">
              <div class="find-title">the mobile version</div>

              <div class="mobile-items">

                <div class="mobile-item">
                  <div class="text">home page</div>
                  <img class="mobile-img" src="./images/mobile1.png" />
                </div>

                <div class="mobile-item">
                  <div class="text">results page</div>
                  <img class="mobile-img" src="./images/mobile2.png" />
                </div>

                <div class="mobile-item">
                  <div class="text">filters</div>
                  <img class="mobile-img" src="./images/mobile3.png" />
                </div>

                <div class="mobile-item">
                  <div class="text">church profile</div>
                  <img class="mobile-img" src="./images/mobile4.png" />
                </div>


              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
    <back-to-top bottom="40px" right="40px">
      <div class="icon-container">
        <svg class="icon icon-chevron-top" viewBox="0 0 32 32" aria-hidden="true"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></svg>
        </div>
</back-to-top>
  </div>

</template>
<script>
import BackToTop from 'vue-backtotop'
export default {
  name: 'FindAChurch',

  components: {
    BackToTop
  }
}

</script>
<style>


.back {
  bottom: 50px;
  right: 50px;
}


.icon {
  display:inline-block;
  fill: #707070;
margin-top: 3px;

  width: 68px;
  height: 60px;
  vertical-align: middle;
  overflow: hidden;


}



.icon-container {
  height: 70px;
  width:70px;
  background-color: #fff;
  opacity: 0.6;
  border: 1px solid #fff;
  border-radius: 50%;
}

.btn-to-top {
  position: absolute;
  width: 30px;
  height: 30px;
  padding: 10px 16px;
  border: 1px solid blue;
}

#church-main-container {
    display: grid;
  padding: 30px;
  justify-content: center;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

}

.top-container {

}

.find-a-church-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
grid-gap: 150px;
max-width: 800px;
position: relative;

}

.find-title {
  font-family: 'Montserrat Regular';
  color: #000;
  text-transform: uppercase;
  font-size: 34px;
  line-height: normal;
  text-align: center;
}

.find-old {
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  grid-gap: 40px;
}

.find-new {
  display: grid;
  grid-auto-rows: auto;

  grid-gap: 20px;
  justify-content: center;


}

.find-items {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 70px;
  justify-content: center;
  max-width: 800px;
}

.find-item {
display: grid;
grid-template-rows: auto auto;
grid-gap: 20px;



}

.text {
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 18px;
  line-height: 26px;
  color: #000;
}

.find-mobile {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  justify-content: center;
    width: 50%;
    margin: auto;
    grid-gap: 50px;
}

.mobile-items {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 70px;
  justify-content: center;

}

.mobile-item {
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  margin-right: auto;
  margin-left: auto;
}

.find-img {
  width: 100%;

}

.mobile-img {
  width: 100%;

}


@media screen and (max-width: 1000px){


  #church-main-container {
      display: grid;
    padding-right: 40px;
    justify-content: center;
    grid-template-columns: 1fr auto;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;

  }


}


@media screen and (max-width: 800px){


}


@media screen and (max-width: 600px){


  .icon-container {
width: 50px;
height: 50px;
  }


  .icon {
    display:inline-block;
    fill: #444;
    margin-top: -0.2em;
    width: 48px;
    height: 50px;
    vertical-align: middle;
    overflow: hidden;

  }

  .find-title {

        font-size: 28px;

  }


  .find-mobile {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    justify-content: center;
      width: 75%;
      margin: auto;
      grid-gap: 50px;
  }

}

</style>
