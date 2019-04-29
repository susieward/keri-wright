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

            <div class="sitecore-images-container">
              <img class="sitecore-img" src="./images/sitecore1.png" />

              <img class="sitecore-img" src="./images/sitecore2.png" />
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

.sitecore-images-container {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 70px;
}

.sitecore-img {
  max-width: 75%;
  margin: auto;
}

@media screen and (max-width: 600px){

  .sitecore-img {
    max-width: 100%;
    margin: auto;
  }

}

</style>
