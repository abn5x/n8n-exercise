<template>
  <div class="page-wrap">
    <h1>Make This Responsive</h1>

    <p>While maintaining the hierarchy of importance.</p>

    <article class="main-story">
      <img src="/she-ra.jpg" alt="Sha Ra Rocking" />

      <div class="story-intro">
        <h1>Most Important Story</h1>
        <p>
          This article has the most visual weight.
          <a href="http://nebezial.deviantart.com/art/she-ra-115867096"
            >image source.</a
          >
        </p>
      </div>
    </article>

    <section class="sub-stories">
      <article class="sub-story">
        <img src="/kitten.jpg" />
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>

      <article class="sub-story">
        <img src="/nick-cage.jpg" />
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>

      <article class="sub-story">
        <img src="/bears.jpg" />
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.page-wrap {
  --size: 20px;
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: var(--size);
}

.main-story {
  position: relative;
  margin: 0 0 var(--size) 0;
}

img {
  display: block;
  object-fit: cover;
  width: 100%;
}

a {
  color: lightblue;
}

.story-intro {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  padding: var(--size);
  color: white;
}

h1 {
  font-size: 4em;
}
h1,
h2 {
  margin: 0 0 var(--size) 0;
}

.story-intro h1 {
  font-size: 2.5em;
}
.story-intro p {
  margin: 0;
}

.sub-stories {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size);
}

.sub-story {
  position: relative;
  /* We make the display: flex so that we can center the image inside */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  flex: 1 0 0px;
  min-width: 150px;
  /* We roughly make the height of the sub-stories equal to the height of the
   * main story, and then make it 2/3 to respect the Importance Hierarchy */
  max-height: calc(((100vw - var(--size) * 2) * 9 / 16) * 2 / 3);
  overflow: hidden;
}

/* Change the font size for smaller screens */
@media screen and (max-width: 450px) {
  .page-wrap {
    font-size: 14px;
    --size: 10px;
  }
}
</style>
