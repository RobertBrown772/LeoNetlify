<!-- A vue accordion component -->
<template>
  <div class="koda-accordion">
    <div
      class="koda-accordion__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="koda-accordion__item__header" @click="toggle(index)">
        <div class="koda-accordion__item__title">
          {{ item.title }}
        </div>
        <div class="koda-accordion__item__icon">
          <i
            class="fa"
            :class="{
              'fa-chevron-down': !item.open,
              'fa-chevron-up': item.open,
            }"
          ></i>
        </div>
      </div>
      <div class="koda-accordion__item__body" v-show="item.open">
        <div class="koda-accordion__item__content">
          <slot :name="index + 1"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggle(index) {
      this.items[index].open = !this.items[index].open;
    },
  },
};
</script>