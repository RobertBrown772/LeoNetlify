<template>
  <section class="pagePadding">
    <div class="container">
      <div class="blog-top">
        <h1>Blog</h1>
        <h5 class="my-3">Blog Subtitle</h5>
        <hr />
        <p class="lead">Random Blog Intro Section</p>
        <hr />
      </div>

      <div class="blog-middle">
        <div class="row row-cols-md-2 row-cols-lg-3">
          <div class="col" v-for="article in articles" :key="article.slug">
            <div class="blog-card card">
              <div class="card-body">
                <h5 class="card-title">{{ article.title }}</h5>
                <p class="card-text">{{ article.description }}</p>
                <Date :date="article.date"></Date>
                <Btn
                  type="internal"
                  :link="'/blog/' + article.slug"
                  extraClass="w-100 mt-3"
                  text="Read More"
                ></Btn>
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
  name: "BlogIndex",

  async asyncData({ $content, params }) {
    const articles = await $content("blog").fetch();
    return { articles };
  },
};
</script>