<template>
  <div>
    <div v-if="link">
      <NuxtLink v-if="type == 'internal'" :to="link"  :class="btnClass">
        {{ text }}
      </NuxtLink>
    </div>
    <div :class="btnClass" v-if="type == 'internal' && !link">
      {{ text }}
    </div>
    <a v-if="type == 'external' && link" :class="btnClass" :href="link">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: ["type", "link", "text", "btnStyle", "extraClass"],
  // generate a class depending on style
  computed: {
    btnClass() {
      return `koda-btn koda-btn--${this.btnStyle} ${this.extraClass}`;
    },
  },
};
</script>

<!-------------------------------------------------------------->
<!-- give an example of how to use the btn in a vue component -->
<!-------------------------------------------------------------->
<!-- 
  <Btn type="internal" link="/about" text="About" btnStyle="primary" extraClass="my-extra-class" /> 
-->


<!-------------------------------------------------------------->
<!-- give an example of how to use the external button -->
<!-------------------------------------------------------------->
<!-- 
  <Btn type="external" link="https://google.com" text="Google" btnStyle="primary" extraClass="my-extra-class" /> 
-->