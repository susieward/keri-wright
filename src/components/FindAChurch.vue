<template>
  <div class="page">
    <div class="page-container">

      <div class="page-title">

        <span class="page-title-text">find a church</span>
        <span class="page-text">
          Find A Church, as the name implies, is a web application that helps people find churches that meet their criteria. Users start by entering a location and filtering options (size of congregation, languages spoken, etc.) and are presented with a list of churches that meet their criteria. It has existed in some form for over a decade, in various iterations.
        </span>

      </div>

      <div class="page-main" id="church-main">
        <div class="page-main-container">

          <div class="content-top-text">
            <p>
              Find A Church is the most popular web service offered by United Methodist Communications, with over 1,000 views per day. Being given this project was a big responsibility and a rewarding opportunity.

            </p>
          </div>
          <div class="page-content-container">


              <div class="content-section">

                <div class="content-title">
                  getting started
                </div>

              <div class="content-subsections">


                <div class="content-subsection">
                  <div class="content-subheader">

                    The requirements

                </div>

                  <div class="section-paragraph-container">


                <div class="section-paragraph">
                  <p>

                  My first step was to take an audit of the outgoing site’s user experience. While I would be discussing requirements and pain points with stakeholders soon, I had never previously interacted with FAC and wanted to take that opportunity to provide a fresh perspective.
                  </p>
                </div>


                <div class="section-paragraph">
                  <p>


                  I took notes on my experience — the outgoing design was respectable given its age, but saw definite room for improvement, particularly on the home and results pages.  </p>

                </div>


                <div class="section-paragraph">
                  <p>


                  After my personal audit, I spoke to our UX lead and marketing director to gather their input and requirements. From these discussions I noted the following:</p>

                </div>

                </div>

                <div class="content-list-container">

                  <div class="content-list-row">
                    <div class="list-circle">
                      <span class="circle">	&#x2B24;</span>
                    </div>

                    <div class="list-text">


                      The overall look and feel needed to closely match the new UMC.org site currently under development.
                        </div>
                      </div>


                      <div class="content-list-row">
                        <div class="list-circle">
                          <span class="circle">	&#x2B24;</span>
                        </div>

                        <div class="list-text">


                          A prominent map was needed on the search results page, and possibly others as well.

                            </div>
                          </div>

                <div class="content-list-row">
                    <div class="list-circle">
                    <span class="circle">	&#x2B24;</span>
                    </div>

                    <div class="list-text">
                      Advanced filtering needed to include: distance from current location, size of congregation, languages spoken, ethnicity, and ministries offered.

                    </div>
                    </div>

                    <div class="content-list-row">
                      <div class="list-circle">
                          <span class="circle">	&#x2B24;</span>
                      </div>

                      <div class="list-text">
                        Churches needed to have their own profile page that could function as their web presence if they didn’t otherwise have one.

                        </div>
                  </div>

                  </div>

                </div>

                <div class="content-subsection">

                  <div class="content-subheader">

                    Research
                  </div>

                  <div class="section-paragraph-container">
                    <div class="section-paragraph">

                      <p>Find A Church is used primarily by the Seekers and Leaders groups.</p>
                      </div>

                      <div class="section-paragraph">
                      <p>

                      Some are seekers who are interested in attending a church near them and want to find a good fit in terms of size, demographic, times offered, etc. </p>
                    </div>

                    <div class="section-paragraph">
                      <p>

                    Many are existing members who have recently moved, and want to find a new "church home." Others may be visiting a new city, and want to find a United Methodist church to visit while they are away. </p>
                    </div>

                    <div class="section-paragraph">
                      <p>

                      Some are already attending a United Methodist church, but for one reason or another may be looking for one that is a better fit. </p>
                    </div>

                    <div class="section-paragraph">

                    <p>


                    My instinct told me that the existing FAC home page was too sparse in only offering a location search — it should attempt to auto-search our location and provide church images and filtering right away. Most users simply looking for the nearest church would do so in Google Maps. </p></div>

                    <div class="section-paragraph">

                    <p>


                    To explore this, I requested a summary of searches performed daily on FAC. A substantial portion of searches performed were with some filtering criteria beyond simply location. Since these filters can’t be reached on the existing page without first doing a simple location search, we determined that the majority of users wanted to search with some sort of filtering right away — they were looking for a community at least as much as they were looking for a location.</p></div>

                    <div class="section-paragraph">

                    <p>

                    From there, the marketing department conducted some one-on-one user testing on the existing FAC. This revealed the need for a new search criteria: worship style. Some churches offer formal or traditional Sunday-Best style services, while others are more casual or musical. Some offer both at different time slots or, in large churches, even simultaneously in different wings of a building.</p></div>


                    <div class="section-paragraph">

                    <p>

                    From this research, I gathered that the redesign should be overall more search-driven and granular than the existing FAC, while still ensuring that the locations of the churches presented were still relevant and clear.</p></div>


                  </div>
                </div>
          </div>



              </div>

              <div class="content-section">
                  <div class="content-title">
                    vision
                  </div>

                  <div class="vision">
                      <div class="vision-container" id="vision-top">

                        <div class="vision-img-container" id="sketchimg">
                          <img class="vision-img" src="./images/vision_sketch.png" />
                        </div>

                        <div class="vision-text-container" id="sketchtext">

                            <div class="vision-title">
                              the initial sketch
                            </div>

                              <div class="vision-text">
                            <p>
                              With the research gathered, I began sketching the home page of the new site. I incorporated the desire for more immediate filtering options by providing them near the top of the page, while keeping the search bar and map prominent.

                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="vision-container" id="vision-bottom">

                        <div class="vision-text-container" id="wiretext">

                            <div class="vision-title">
                              the wireframe
                            </div>

                              <div class="vision-text">
                            <p>
                              The wireframe further fleshed out the placement of the filtering options. Since the Worship Style filter was requested frequently in our research, I elected to add it to the home page. I added a Recommended Churches slider to the bottom of the page, to help give a sense of the abundance and variety of United Methodist churches on the very first interaction. These could be driven by a geolocation search, or potentially through more advanced marketing automation and profiling software.


                            </p>
                          </div>
                        </div>


                      <div class="vision-img-container" id="wireimg">
                        <img class="vision-img" src="./images/vision_wireframe.jpg" />
                      </div>

                      </div>


                  </div>

              </div>

              <div class="content-section">
                <div class="mockup">

                <div class="mockup-title">
                  the mockup
                </div>

                <div class="mockup-items">

                  <div class="mockup-item">

                    <div class="mockup-text">
                      The home page
                    </div>

                    <div class="mockup-img-container">
                      <img class="mockup-img" src="./images/mockuphome.png" />
                    </div>
                  </div>

                  <div class="mockup-item">

                    <div class="mockup-text">
                      The results page
                      <p>
                        The previous FAC site featured a static mini-map icon for each church. This map did not provide any meaningful functionality — it wasn’t detailed enough to show the church location, and according to the development team was an expense due to multiple API calls to Google Maps. Since the UMC has photos of almost all US and many international churches, my mockup uses image icons for the listings. This does more than just provide an image filler - a photo of the church gives an immediate visual cue for things like congregation size and worship style. A church can be like a second home for many, and “curb appeal” an important factor.

                      </p>
                    </div>

                    <div class="mockup-img-container">
                      <img class="mockup-img" src="./images/mapmockup.jpeg" />
                    </div>
                  </div>

                  <div class="mockup-item">

                    <div class="mockup-text">
                      The results page (list view)
                      <p>While the map and church icons are valuable to most, there are a number of cases where users may prefer a list view. Browsing a large number of churches, as more seasoned UMC members may do, is more convenient with a list. Others may have slower internet connections and want to forgo some of the more resource-intensive elements. To facilitate this, I added a list view option to the map page.</p>
                    </div>

                    <div class="mockup-img-container">
                      <img class="mockup-img" src="./images/listpage.jpeg" />
                    </div>
                  </div>

                  <div class="mockup-item">
                    <div class="mockup-text">
                      The church profile page
                      <p>Every church-goer interacts with their pastor in some way when they attend church — it is an important role as the most prominent and visible member of the church community. I reflected this in my mockup by adding the pastor name to the church listing above the fold, rather than hidden in the miscellaneous details. The major filter information is available at a glance below the map, with more details in a tabbed view below the fold. I liked the functionality of this tabbed view on the previous site, so I kept many elements of it on my redesign.</p>
                    </div>

                    <div class="mockup-img-container">
                      <img class="mockup-img" src="./images/churchpage.jpeg" />
                    </div>
                  </div>

                  <div class="mockup-mobile">

                      <div class="mockup-title">
                        the mobile version
                      </div>

                      <div class="mobile-columns">


                    <div class="mobile-column">
                      <div class="mobile-row">
                        <div class="mobile-text">
                          The home page
                        </div>

                        <div class="mobile-img-container">
                        <img class="mobile-img" src="./images/mobile1.png" />
                        </div>

                      </div>

                      <div class="mobile-row">
                        <div class="mobile-text">
                          The filters page
                        </div>

                        <div class="mobile-img-container">
                        <img class="mobile-img" src="./images/mobile3.png" />
                          </div>
                      </div>
                      </div>

                      <div class="mobile-column">
                        <div class="mobile-row">
                          <div class="mobile-text">
                            The results page
                          </div>
                          <div class="mobile-img-container">
                          <img class="mobile-img" src="./images/mobile2.png" />
                        </div>
                        </div>

                        <div class="mobile-row">
                          <div class="mobile-text">
                            The church profile page
                          </div>

                          <div class="mobile-img-container">
                          <img class="mobile-img" src="./images/mobile4.png" />
                        </div>

                        </div>
                        </div>


                    </div>


                      </div>
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

                      <p>With FAC, knowing the demographic played an important role. The importance of understanding the user’s journey through the existing site lead to some important changes for the redesign, such as more prominent filtering with a somewhat lesser emphasis on maps.
                        </p>
                      </div>


                      <div class="section-paragraph">

                        <p>Presenting a design with a color pallette and controls that would feel familiar to visitors of our other sites was important. The FAC redesign is a crucial component in a broader overhaul of the UMC web presence. As designers, we often gravitate towards the cutting edge and forward thinking. Business requirements can feel restrictive or onerous - a barrier to our creativity. But knowing when to deliver runway fashion, and when to deliver a stylish but practical coat, is key to the successful reception of our designs.

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

/* SCROLL TO TOP BUTTON */

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

}



/* CONTAINERS */

#church-main {
  padding: 0px 0px 30px 0px;
  color: #000;
}

#church-main-container {
  padding: 100px;
justify-content: normal;

}

.top-container {

}



.list-circle {
  color:#D86969;
}

.list-text {
  font-size: 18px;
  line-height: 26px;

}

.find-list li {
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 20px;
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


/* VISION */

.vision {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: 50px;

}

.vision-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 55px;

}

.vision-img-container {
max-width: 1fr;
}

.vision-img {
width: 100%;
}


#vision-top{
  display: grid;
    grid-template-columns: 1fr 1fr;
  grid-template-areas: 'sketchimg sketchtext';

}

#vision-bottom {
  display: grid;
    grid-template-columns: 1fr 1fr;
  grid-template-areas: 'wiretext wireimg';
}

#sketchimg {
  grid-area: sketchimg;
}

#sketchtext {
  grid-area: sketchtext;
}

#wireimg {
  grid-area: wireimg;
}

#wiretext {
  grid-area: wiretext;
}

.vision-text-container {
display: grid;
grid-template-rows: auto auto;
justify-content: center;
align-content: center;
grid-gap: 20px;


}

.vision-title {
  text-transform: uppercase;
  color: #D86969;
  font-size: 32px;
  text-align: center;

}

.vision-text {
  padding-top: 10px;

}
.vision-text p {
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 18px;
  line-height: 24px;

}

/* MOCKUP */

.mockup-title {
  text-transform: uppercase;
  color: #D86969;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
}


.mockup-items {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 150px;
padding-right: 30px;
padding-left: 30px;
}


.mockup-item {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding-right: 30px;
  padding-left: 30px;
}


.mockup-text {
  font-size: 20px;
  line-height: 26px;
}


.mockup-text p {
  font-size: 18px;
  line-height: 24px;
}


.mockup-img-container {



}


.mockup-img {
max-width: 100%;
margin: auto;
}


.text {
  text-transform: uppercase;
  font-family: 'Montserrat Regular';
  font-size: 18px;
  line-height: 26px;
  color: #000;
}



/* MOBILE */

.mockup-mobile {
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 20px;

}

.mobile-columns {
  display: grid;
  grid-template-columns: auto auto;
}


.mobile-column {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-content: center;
  grid-gap: 50px;
}

.mobile-row {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto 1fr;
grid-gap: 10px;
}

.mobile-text {
  font-size: 20px;
  line-height: 26px;
  text-align: center;
}


.mobile-img-container {
display: grid;
justify-content: center;
padding-right: 60px;
padding-left: 60px;
}

.mobile-img {
  width: 100%;
}


.find-img {
  width: 100%;

}




@media screen and (max-width: 1000px){






}


@media screen and (max-width: 800px){




  .vision {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 50px;

  }

  .vision-container {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-gap: 55px;

  }


  #vision-top {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-template-areas: 'sketchtext'
                          'sketchimg';
  }


  #vision-bottom {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-template-areas: 'wiretext'
                          'wireimg';
  }


  .vision-title {

font-size: 26px;
  }

  .vision-text {
    padding-top: 10px;

  }
  .vision-text p {
    text-align: center;
    padding: 0;
    margin: 0;
    font-size: 18px;
    line-height: 26px;

  }


  .mockup-title {
    text-transform: uppercase;
    color: #D86969;
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
  }


  .mockup-items {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    grid-gap: 100px;
  padding-right: 0px;
  padding-left: 0px;
  }


  .mockup-item {

    padding-right: 30px;
    padding-left: 30px;

  }



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



  .vision-title {
      font-size: 24px;
  }



    .mockup-text {
      font-size: 18px;
      line-height: 24px;
    }


    .mockup-text p {

      line-height: 26px;
    }


    .mockup-item {

      padding-right: 0px;
      padding-left: 0px;

    }

}

</style>
