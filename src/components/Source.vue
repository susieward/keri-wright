<template>
  <div class="page">
    <div class="page-container">

      <div class="page-title">

        <span class="page-title-text">The Source</span>
        <span class="page-text">
          The Source is a e-newsletter tied to another marketing initiative called Neighborly UMC. With the subscription form and the Neighborly UMC page living on two different platforms (Marketo and Sitecore) I was tasked with creating a form that could match the look and feel of the Sitecore page seamlessly.
        </span>

      </div>

      <div class="page-main">
        <div class="page-main-container">
          <img class="page-img" id="source-img" src="./images/thesource.png" />
        </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: 'Source'
}

</script>
<style>

@media screen and (max-width: 600px){

  #source-img {
    max-width: 100%;
    margin: auto;
      border: 5px solid #fff;
  }

}

</style>
