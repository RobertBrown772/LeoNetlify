<!-- A vue accordion component -->
<template>
  <div class="koda-tabs">
    <div class="koda-tabs__bar">
      <div class="koda-tabs__item" v-for="(item, index) in items" :key="index">
        <!-- apply an active class if the tab is open -->
        <div
          class="koda-tabs__item__header"
          @click="toggle(index)"
          :class="{ 'tab-active': item.open }"
        >
          <div class="koda-tabs__item__title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="koda-tabs__content"
      v-for="(item, index) in items"
      :key="index"
      v-show="item.open"
    >
      <slot :name="index + 1"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggle(index) {
      this.items[index].open = !this.items[index].open;

      // close all other open tabs
      this.items.forEach((item, i) => {
        if (i !== index) {
          item.open = false;
        }
      });

      // dont close an item if it is the only one open
      if (this.items.filter((item) => item.open).length === 0) {
        this.items[index].open = true;
      }
    },
  },
};
</script>