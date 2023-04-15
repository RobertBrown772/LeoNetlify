<template>
  <header class="koda-header">
    <div class="koda-navigation">
      <div class="koda-navigation__inner container px-2 px-md-0">
        <!-- Brand Logo -->
        <div class="koda-navigation__brand mx-auto mx-md-0">
          <NuxtLink
            to="/"
            class="d-flex justify-content-center align-items-center"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
              />
              <path
                d="M8 3a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5zm0 8.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
              />
            </svg>
            <div class="ps-1 d-flex align-items-center justify-content-center">
              {{ siteDetails.siteName }}
            </div>
          </NuxtLink>
        </div>
  
        <!-- Desktop Navigation -->
        <ul class="koda-navigation__desktop d-none d-md-flex">
          <li v-for="item in siteNav.items" :key="item.title">
            <NuxtLink class="koda-nav__link" :to="item.url">{{
              item.title
            }}</NuxtLink>
          </li>
        </ul>
  
        <!-- Hamburger for Mobile Navigation -->
        <div
          class="koda-navigation__hamburger d-flex d-md-none"
          @click="toggleMobileNav()"
        >
          <svg v-if="!mobileNavOpen" width="20" height="20" viewBox="0 0 50 50">
            <path
              d="M 0 0 L 50 0 L 50 10 L 0 10 Z M 0 20 L 50 20 L 50 30 L 0 30 Z M 0 40 L 50 40 L 50 50 L 0 50 Z"
            />
          </svg>
          <!-- SVG for close icon -->
          <svg v-else width="40" height="40" viewBox="0 0 24 24">
            <path
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
            />
          </svg>
        </div>
  
        <!-- Navigation for Mobile -->
        <div class="koda-navigation__mobile d-md-none" v-show="mobileNavOpen">
          <div class="koda-navigation__mobile-inner">
            <div class="koda-navigation__mobile-toggle"></div>
            <ul>
              <li v-for="item in siteNav.items" :key="item.title">
                <NuxtLink class="koda-nav__link" :to="item.url">{{
                  item.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
      siteDetails: [],
      siteNav: [],
    };
  },

  beforeMount() {
    this.getSiteDetails();
  },

  methods: {
    getSiteDetails() {
      // get site details from nuxt content
      this.$content("website")
        .where({ title: "Details" })
        .fetch()
        .then(
          (siteDetails) => {
            this.siteDetails = siteDetails[0];
          },
          this.$content("website")
            .where({ title: "Navigation" })
            .fetch()
            .then((siteNav) => {
              this.siteNav = siteNav[0];
            })
        );
    },
    toggleMobileNav() {
      this.mobileNavOpen = !this.mobileNavOpen;
    },
  },
  // close the mobilenav when a link is clicked
  watch: {
    $route() {
      this.mobileNavOpen = false;
    },
  },
};
</script>

<style>
</style>