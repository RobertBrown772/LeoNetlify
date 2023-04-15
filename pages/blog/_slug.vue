<template>
  <section class="pagePadding">
    <div class="container">
      <div class="blog-top">
        <h1>{{article.title}}</h1>
        <h5 class="my-3">{{article.subtitle}}</h5>
        <hr />
        <article>
          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogIndex",

  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return { article };
  },
};
</script>