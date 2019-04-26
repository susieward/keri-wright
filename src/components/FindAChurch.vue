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
        <div class="page-main-container">

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
    <back-to-top bottom="30px" right="40px">
        <svg  class="icon icon-chevron-top" viewBox="0 0 32 32" aria-hidden="true"><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></svg>
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


.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.find-a-church-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
grid-gap: 150px;
max-width: 800px;
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


@media screen and (max-width: 600px){

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
