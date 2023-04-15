<template>
  <div class="koda-breadcrumbs">
    <div class="container">
      <!-- Breadcrumb List -->

      <!-- not equal to path or any anchorlinks -->
      <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"

      v-if="crumbs[0].path !== '/' 
      && crumbs[0].path !== '/#education'
      && crumbs[0].path !== '/#skills'
      && crumbs[0].path !== '/#employment'
      && crumbs[0].path !== '/#contact'
      && crumbs[0].path !== '/#bio'
      "

      >
        <!-- Home Link Item -->
        <li property="itemListElement" typeof="ListItem">
          <NLink property="item" typeof="WebPage" to="/">
            <span property="name">Home</span>
          </NLink>
        </li>

        <!-- Item for crumbs -->
        <li
        v-for="(crumb, index) in crumbs"
          :key="index"
          property="itemListElement"
          typeof="ListItem"
          >
          <!-- Nuxtlink to each crumb -->
          <NLink
          v-if="(index = 1)"
          property="item"
          typeof="WebPage"
          :to="crumb.path"
          >
          <span property="name">
              {{ crumb.title }}
            </span>
          </NLink>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    // Get the crumbs to print in the breadcrumbs
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            title: match.name,
            path: path,
          });

          // if crumbs length is 2 remove the second item from the crumbs
          if (crumbs.length === 2) {
            crumbs.splice(1, 1);
          }

          //  replace any dashes in the crumb title with spaces
          crumbs.forEach((crumb) => {
            crumb.title = crumb.title.replace(/-/g, " ");
          });

          // replace the first letter of eachword in crumb title to be capitalized
          crumbs.forEach((crumb) => {
            crumb.title = crumb.title.replace(/\w\S*/g, (txt) => {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
          });
        }
      });
      return crumbs;
    },
  },
};
</script>
