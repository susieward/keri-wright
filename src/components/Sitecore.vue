<template>
  <div class="page">
    <div class="page-container">

      <div class="page-title">

        <span class="page-title-text">Sitecore Training</span>
        <span class="page-text">
          A page designed for the employees at United Methodist to train them on our CMS platform.
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

</style>
