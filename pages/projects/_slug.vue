<template>
  <section class="pagePadding">
    <div class="container">
      <div class="blog-top">
        <div class="row">
          <div class="col-md-6">
            <img :src="article.image" class="img-fluid" :alt="article.title">
          </div>
          <div class="col-md-6 text-dark koda-card p-5 d-flex align-items-center justify-content-center">
            <div class="">
              <h1>{{article.title}}</h1>
              <h5 class="my-3">{{article.subtitle}}</h5>
              <hr />
              <article>
                <nuxt-content :document="article" />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogIndex",

  async asyncData({ $content, params }) {
    const article = await $content("projects", params.slug).fetch();
    return { article };
  },
};
</script>