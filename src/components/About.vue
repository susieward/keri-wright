<template>
  <div class="about">
    <div class="about-section">
      <div class="about-title">
        <p>falling in love with ux</p>
      </div>

      <div class="about-text">
        <p>
          Growing up I knew I never wanted to settle for something boring when it came to my career. I thought I wanted to be an artist, a psychologist, or a programmer. While going to college for computer science (and taking art and psychology on the side) I remembered the day I learned about UX. It was like a lightbulb went off in my head; it’s what I had been searching for all along. Since starting my UX career I’ve gotten to work on some amazing projects and meet some amazing people. I’ve found the saying to be true that if you love what you do you will never work a day in your life.
        </p>
      </div>
    </div>

    <div class="about-section">
      <div class="about-title">
        <p>digital illustrations</p>
      </div>

      <div class="about-images">
        <div class="about-image" v-for="image in art">
          <img class="art-img" :src="image.src" />
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'About',

  computed: {
    art(){
      return this.$store.state.art
    }
  }
}

</script>
<style>
.about {
display: grid;
min-width: 100%;
grid-template-rows: auto auto;
grid-gap: 100px;

margin-top: 50px;
}


.about-section {
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 15px;


}

.about-title {
  display: grid;

}

.about-title p {
  text-transform: uppercase;
  font-size: 36px;
  line-height: 55px;
  margin: 0;
}

.about-text {

}

.about-text p {
  font-size: 18px;
  line-height: 30px;
  margin: 0;
}

.about-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.about-image {
  display: grid;
min-width: auto;
max-width: 400px;

padding: 15px;

}

.art-img {
max-width: 100%;
height: auto;
margin: auto;

}


@media screen and (max-width: 1000px){

  .about-image {
    display: grid;
  min-width: auto;
  max-width: 300px;
  padding: 15px;
  }

}

@media screen and (max-width: 800px){

  .about-section {
    padding: 0 40px;
  }

  .about-title p {
    text-transform: uppercase;
    font-size: 32px;
    line-height: 50px;
    margin: 0;
  }


  .about-text p {
    font-size: 16px;
    line-height: 26px;
    margin: 0;
  }

  .about-image {
    display: grid;
  min-width: auto;
  max-width: 500px;
  padding: 15px;
  }

}

@media screen and (max-width: 600px){

  .about-section {
    padding: 0 30px;
  }

  .about-title p {
    text-transform: uppercase;
    font-size: 28px;
    line-height: 40px;
    margin: 0;
  }


  .about-text p {
    font-size: 16px;
    line-height: 26px;
    margin: 0;
  }

}


</style>
