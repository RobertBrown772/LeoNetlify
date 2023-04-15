<template>
<div class="image-section">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center my-5">

        <h2 class="text-light" v-if="title">{{ title }}</h2>
        <p class="text-light lead display mt-3" v-if="subtitle">{{ subtitle }}</p>

      </div>
    </div>
    <div class="koda-card p-3">

        <!-- alternate the images in a left/right configuration - with image on the left/text on right, then another row with the opposite -->
        <div v-for="(image, index) in images" :key="index">
          <!-- if the index is even, then the image is on the left -->
          <div class="row p-3 p-md-2" v-if="index % 2 === 0">
            <div class="col-12 col-md-6">
              <img class="img-fluid" :src="image.src" :alt="image.alt" />
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center flex-column">
              <h3 class="mt-2 mt-md-0">{{ image.title }}</h3>
              <p>{{ image.subtitle }}</p>
              <a :href="image.link">Link</a>
            </div>
          </div>
  

          <!-- if the index is odd, then the image is on the right -->
          <div class="row p-3 p-md-2" v-if="index % 2 !== 0">
            <!-- reverse the order on mobile (bootstrap 5) -->
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center flex-column order-md-1 order-2">
              <h3 class="mt-2 mt-md-0">{{ image.title }}</h3>
              <p>{{ image.subtitle }}</p>
              <a :href="image.link">Link</a>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-1">
              <img class="img-fluid" :src="image.src" :alt="image.alt" />
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  name: "ImageSection",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>