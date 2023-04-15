<template>
  <footer class="koda-footer pt-4">
    <div class="container">
      <div class="row">
        <div class="col-12" :class="alignment">
          <slot name="top" />
        </div>
      </div>
      <div :class="['row', 'row-cols-2', 'row-cols-sm-2', 'row-cols-md-' + colCount, 'g-4 py-5']">
        <div class="col" :class="alignment">
          <slot name="col-1" />
        </div>
        <div class="col" :class="alignment">
          <slot name="col-2" />
        </div>
        <div class="col" :class="alignment">
          <slot name="col-3" />
        </div>
        <div class="col" :class="alignment">
          <slot name="col-4" />
        </div>
      </div>
      <div class="row">
        <div class="col-12" :class="alignment">
          <slot name="bottom" />
        </div>
      </div>
    </div>
    <div class="koda-footer__copyright">
      <div class="col-12 text-center">
        <p>
          &copy; {{ getCurrentYear() }} {{ siteDetails.name }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    alignment: {
      type: String,
      default: "text-center",
      validator: (value) => {
        return ["text-center", "text-start", "text-end"].indexOf(value) !== -1;
      },
    },
    colCount: {
      type: Number,
      default: 3,
      validator: (value) => {
        return [2, 3, 4].indexOf(value) !== -1;
      },
    },
    siteDetails: {
      type: Object,
      default: () => ({}),
    },
    siteNav: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.getSiteDetails();
  },
  methods: {
    getSiteDetails() {
      // get site details from nuxt content
      this.$content("website")
        .where({ title: "Details" })
        .fetch()
        .then((siteDetails) => {
          this.siteDetails = siteDetails[0];
        })
        .then(() => {
          return this.$content("website")
            .where({ title: "Navigation" })
            .fetch();
        })
        .then((siteNav) => {
          this.siteNav = siteNav[0];
        });
    },
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
