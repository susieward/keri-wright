<template>
  <div class="umcom">
      <div class="umc">
        <span class="umc-text">PROJECTS I’VE DESIGNED IN MY TIME AT UNITED METHODIST COMMUNICATIONS</span>
      </div>

      <div class="umc-line">
        <div class="umc-line-item1">

        </div>

        <div class="umc-line-item2">

        </div>

      </div>

      <div class="work">
          <div class="work-container">



  <div class="work-item">
            <router-link to="/find-a-church">
            <div class="work-img-container">
              <img class="work-img" src="./images/umcom.jpg" />

              <div class="work-desc">
                <p>
                A search engine project in development that helps people find a United Methodist Church near them.</p>
              </div>
            </div></router-link>

            <div class="work-title">
              <router-link to="/find-a-church">Find A Church</router-link>
            </div>

            <div class="work-desc-mobile">
              A search engine project in development that helps people find a United Methodist Church near them.
            </div>

          </div>

          <div class="work-item">
            <router-link to="/sitecore">
            <div class="work-img-container">
              <img class="work-img" src="./images/resource.jpg" />

              <div class="work-desc">
                <p>A Wordpress site in development created for training the employees at United Methodist Communications on our CMS Platform.</p>
              </div>
            </div></router-link>

            <div class="work-title">
                <router-link to="/sitecore">Sitecore Training</router-link>
            </div>

            <div class="work-desc-mobile">
                    A Wordpress site in production created for training the employees at United Methodist Communications on our CMS Platform.
                    </div>

          </div>


    <div class="work-item">
      <router-link to="/what-we-do">
          <div class="work-img-container">
                <img class="work-img" src="./images/whatwedo.jpeg" />

                <div class="work-desc">
                        <p>A Landing Page made for United Methodist Communications</p>
                        </div>
          </div></router-link>

            <div class="work-title">
                  <router-link to="/what-we-do">What We Do</router-link>
              </div>

              <div class="work-desc-mobile">
                      A Landing Page made for United Methodist Communications
                      </div>

                    </div>

          <div class="work-item">
            <router-link to="/source">
            <div class="work-img-container">
              <img class="work-img" src="./images/sourcegrey.jpeg" />
              <div class="work-desc">
                <p>A Subscription Landing Page made for United Methodist Communications </p>
              </div>

            </div></router-link>

            <div class="work-title">
              <router-link to="/source">The Source</router-link>
            </div>

            <div class="work-desc-mobile">
              A Subscription Landing Page made for United Methodist Communications
            </div>

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

.work-desc-mobile {

  font-family: 'Montserrat Regular';
  color: #fff;
  font-size: 18px;
  line-height: 26px;
  display: none;
}

.umcom {
padding: 0;
display: grid;
grid-template-areas: 'umc umc'
                      'line line'
                      'work work';

justify-content: center;
padding-bottom: 200px;
max-width: 1200px;
position: relative;
}



.umc-line {
  grid-area: line;
display: grid;
grid-template-columns: auto auto;
  justify-content: center;
}

.umc-line-item1 {
height: 80px;
  border-right: 2px solid #fff;
  margin: auto;
  width: 50px;
}

.umc-line-item2 {
  height: 50px;

    width: 50px;
}


.umc {
  grid-area: umc;
  display: grid;
  align-content: flex-start;
  justify-content: center;
  min-height: 80vh;
  padding-top: 15%;
  padding-left: 25px;
  position: relative;
}

.umc-text {
  font-family: 'Montserrat Regular';
  color: #fff;
  font-size: 40px;
  line-height: 55px;
  text-transform: uppercase;
  padding-right: 400px;
  padding-left: 30px;
  position: relative;
}

.work {
  grid-area: work;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  max-width: 700px;
  margin: auto;
  position: relative;
}

.work-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  width: 100%;
  grid-gap: 150px;
  margin-top: 50px;
  position: relative;

}

#redtoken {
  background-color: #FDAFA4;
}


.work-item {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
  position: relative;
}


.work-img {

}

.work-img-container {
display: grid;
max-height: 500px;
overflow: hidden;
position: relative;
cursor: pointer;
background: #fc8372;
}


.work-img-container img {
  object-fit: cover;
max-width: none;
width: -webkit-calc(100% + 60px);
 width: calc(100% + 60px);
height:auto;
opacity: 1;
position: relative;
display: block;
-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
transition: opacity 0.35s, transform 0.35s;
-webkit-transform: translate3d(-30px, 0, 0) scale(1.12);
transform: translate3d(-30px, 0, 0) scale(1.12);
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
}

.work-img-container:hover img {
  opacity: 0.5;
-webkit-transform: translate3d(0, 0, 0) scale(1);
transform: translate3d(0, 0, 0) scale(1);

}


.work-desc {
  padding: 2em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
backface-visibility: hidden;
}



.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.work-desc p {
  text-transform: uppercase;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-family: 'Montserrat Regular';
  color: #fff;
  font-size: 18px;
  line-height: 26px;
  width: 50%;
  padding: 0px 10px 0 0;
 border-right: 1px solid #fff;
 text-align: right;
 opacity: 0;
 -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
 transition: opacity 0.35s, transform 0.35s;
 -webkit-transform: translate3d(-40px, 0, 0);
 transform: translate3d(-40px, 0, 0);
}


.work-desc:hover p {
  opacity: 1;
 -webkit-transform: translate3d(0, 0, 0);
 transform: translate3d(0, 0, 0);
}

.work-title {
  font-family: 'Montserrat Regular';
  color: #fff;
  font-size: 32px;
  line-height: normal;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
}


.work-title a {
  text-decoration: none;
  color: #fff;
}



@media screen and (max-width: 900px){


  .umc-text {

      padding-right: 100px;
      padding-left: 20px;
  }
}


@media screen and (max-width: 800px){


.umcom {
  max-width: 700px;
}

.umc {
  min-height: 70vh;
}
  .umc-text {
    font-size: 35px;
      line-height: 45px;
      padding-right: 100px;
      padding-left: 20px;
  }

  .umc-line {
    display: none;
  }


  .work {
    max-width: 550px;
  }


  .work-container {
    grid-gap: 100px;
  }


  .work-title {
    font-size: 28px;
    line-height: normal;
  }


  .work-desc {
    font-size: 18px;
    line-height: 22px;
  }


}






@media screen and (max-width: 600px){
  .umcom {
    max-width: 550px;

  }


.umc {
  padding-top: 18%;
  padding-left: 30px;
    min-height: 50vh;
}

  .umc-text {
    font-size: 28px;
    line-height: 38px;
    padding-right: 80px;
  }


  .work {
    padding-right: 30px;
    padding-left: 30px;
  }


  .work-img-container {
  display: grid;
  max-height: 500px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  }


  .work-img-container img {
    object-fit: cover;
  width: 100%;
  height:auto;
  opacity: 1;
  position: relative;
  display: block;

  -webkit-transform: none;
  transform: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  }


  .work-img-container:hover img {
    opacity: 1;
  -webkit-transform: none;
  transform: none;
  }

  .work-img {

    width: 100%;
    height:auto;
    object-fit: cover;
  }



    .work-title {
      font-size: 26px;
      line-height: normal;
    }


    .work-desc-mobile {
      display: block;
      font-size: 16px;
      line-height: 22px;
    }


    .work-desc p {
      text-transform: uppercase;

      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      font-family: 'Montserrat Regular';
      color: #fff;
      font-size: 18px;
      line-height: 26px;
      width: 50%;
      padding: 0px 10px 0 0;
     border-right: 1px solid #fff;
     text-align: right;
     opacity: 0;
     -webkit-transform: none;
     transform: none;
    }


    .work-desc:hover p {
      opacity: 0;
     -webkit-transform: none;
     transform: none;
    }

}


@media screen and (max-width: 400px){

  .umc-text {
    font-size: 26px;
    line-height: 36px;
      padding-right: 60px;
  }
}


</style>
