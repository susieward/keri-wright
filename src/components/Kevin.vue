<template>
  <div class="page">
    <div class="page-container">

      <div class="page-title" id="kevin">
        <span class="page-title-text">kevin williams attorney</span>
        <span class="page-text">
          I was approached by Kevin Williams to create a new design for his law practice’s web presence. The previous iteration had been around for well over a decade, and was in dire need of a refresh to be usable on modern browsers and up to date visually. Beyond retaining the information from the existing site, Mr. Williams gave me great latitude to interpret the new design as I saw fit. Of course, with great creative freedom comes great responsibility.
        </span>
      </div>

      <div class="page-main">
        <div class="page-main-container">
          <div class="page-content-container" id="kevin-container">


              <div class="content-section">

                <div class="content-title">
                  getting started
                </div>

                <div class="section-paragraph-container">

              <div class="section-paragraph">
                <p>
I began by discussing with the client, in a broad sense, what a success metric for his web presence would be. Sometimes clients, especially those for whom the web is a secondary concern, don’t have a ready answer to this question. Developing this answer then becomes a collaborative process. What value should the site provide to the business, as well as to the user? As an attorney working primarily for individuals, the purpose of the site is to instill confidence in his expertise and ultimately drive to potential client to contact him for services.
                </p>
              </div>


              </div>

            </div>

              <div class="content-section">
                  <div class="content-title">
                    vision
                  </div>

                  <div class="kevin-vision">

                      <div class="kevin-vision-imgs">
                        <img class="kevin-img" src="./images/projects/kevin.png" />

                        <img class="kevin-mobile" src="./images/projects/kevinmobile.png" />

                      </div>

                      <div class="kevin-vision-content">
                        <p>
                          Mr. Williams’ practice has three focus areas: bankruptcy and debt relief law, elder law, and electric utility law. I chose to make these very prominent, as large navigation items overlaying a hero image. These provide a clear and concise way to get to the relevant part of the site. A smaller top navigation provides a secondary way to reach these three areas, as well as links to contact and for other news and resources.
                        </p>

                        <p>
                          Below the hero, Mr. Williams’ headshot and bio puts a face to the name and adds some more detailed information on his experience. A prominent call to action below the headshot contains succinct phone contact information, his primary avenue for communicating with potential clients. Finally, the footer prominently lists the physical address and provides miscellaneous disclaimer info.
                        </p>

                        <p>
                           I chose a primarily dark color scheme with bold accents. Research shows that these schemes can convey confidence and expertise, which are two key messaging points for an attorney’s web presence. Since Williams’ headshot would feature prominently on the homepage, I chose orange and white accents to coordinate with the color palette of this photo.
                        </p>
                      </div>


                  </div>

              </div>



                <div class="content-section">
                  <div class="content-title">
                    things I learned along the way
                  </div>

                  <div class="content-subsections">

                    <div class="content-subsection">


                  <div class="section-paragraph-container">
                    <div class="section-paragraph">

                      <p>Not all sites will be visited and used by millions. However, a solid, inspiring web presence can make a difference when it comes to a potential customer’s perception. Our own industry jargon may be second nature to us, but often our clients haven’t thought much about what they want their UX to be, and it can be our job to guide that discussion in terms that are relevant to them and their experiences.

                        </p>
                      </div>

                    </div>
                      </div>
                      </div>
                </div>

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
  name: 'Kevin',

    components: {
      BackToTop
    }
}

</script>
<style>

#kevin {


  padding: 50px 80px 70px 80px;
}

#kevin-container {
  grid-gap: 100px;
}


.kevin-vision {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 50px;

}

.kevin-vision-imgs {
  display: grid;
  grid-template-columns: 1fr auto;
grid-gap: 0px;

}

.kevin-img {
  max-width: 100%;
  height: auto;

    padding-bottom: 20px;
}

.kevin-mobile {
max-height: 70%;
width:auto;
margin-top: auto;

}

.kevin-vision-content {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 40px;

}

.kevin-vision-content p {
  margin: 0;
  font-size: 18px;
  line-height: 28px;
}


.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
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


  #kevin {
    width: auto;
    height: auto;
    padding: 50px 40px;
  }

}


@media screen and (max-width: 500px){


  .kevin-vision {
    grid-gap: 30px;
  }

  .kevin-vision-imgs {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  grid-gap: 20px;

  }


  .kevin-img {



      padding-bottom: 0px;

  }

  .kevin-mobile {

max-width: 100%;
max-height: 100%;
height: auto;
margin: 0 auto;

  }


}


</style>
