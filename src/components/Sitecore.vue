<template>
  <div class="page">
    <div class="page-container">

      <div class="page-title">

        <span class="page-title-text">Sitecore Training</span>
        <span class="page-text">
          This page is an internal training and reference site for our new CMS, Sitecore. Sitecore can be a daunting CMS with a steep learning curve, so I opted to keep the training site design simple. Many elements of the site originated in a training packet that was distributed to editors, so design synergy with this packet was key.
        </span>

      </div>

      <div class="page-main">
        <div class="page-main-container">
          <div class="sitecore-container">


          <div class="sitecore-top-text">
            <p>The volume of information on each page can be quite overwhelming, so to reduce the sense of information overload, I placed the individual sections in an accordion that is collapsed by default.</p>

<p>This site was developed in WordPress, allowing users to easily update the training information without the aid of a developer.</p>

          </div>
            <div class="sitecore-images-container">
              <img class="sitecore-img" src="./images/sitecore1.png" />

              <img class="sitecore-img" src="./images/sitecore2.png" />
            </div>

        </div>

          </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: 'Sitecore'
}

</script>
<style>

.sitecore-container {
  display: grid;
  grid-gap: 30px;
}
.sitecore-top-text {
  font-size: 18px;
  line-height: 26px;

}


.sitecore-top-text-p {

}

.sitecore-images-container {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 70px;
}

.sitecore-img {
  max-width: 100%;
  margin: auto;
}

@media screen and (max-width: 600px){

  .sitecore-img {
    max-width: 100%;
    margin: auto;
  }

}

</style>
