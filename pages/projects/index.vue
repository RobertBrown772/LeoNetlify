<template>
  <section class="pagePadding">
    <div class="container">
      <div class="services-top">
        <h1 class="text-light">Projects</h1>
        <h5 class="my-3 text-light"></h5>
        <p class="lead text-light">View all my projects below</p>
        <hr />
      </div>

      <div class="services-middle">
        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
          <div class="col" v-for="item in items" :key="item.slug">
            <div class="blog-card mb-4">
              <div class="card">
                <div class="card-body">
                  <!-- set a div with the background image as item.image -->
                  <div class="blog-card--image" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
                  <h5 class="card-title mt-3">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <Btn type="internal" :link="'/projects/' + item.slug" extraClass="w-100 mt-3" text="Read More"></Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsIndex",

  async asyncData({ $content, params }) {
    const items = await $content("projects").fetch();
    return { items };
  },
};
</script>

<style>
.blog-card--image{
  height: 400px;
  object-fit: cover;
  background-size: cover;
}
</style>