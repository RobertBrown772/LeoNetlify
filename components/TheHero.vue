<template>
  <section :style="cssVars" class="pagePadding--no-breadcrumb">
      <div class="koda-hero">
        <div class="koda-hero__overlay"></div>
        <img 
        :src="`/images/${image}`"
        alt="hero image" 
        class="koda-hero__image img-fluid" />

        <div class="koda-hero__content p-3 p-md-5">
          <h3>{{title}}</h3>
          <h6 class="my-3">{{subtitle}}</h6>
          <NuxtLink to="/projects" class="koda-btn koda-btn--primary">
            <span>{{btnText}}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: 'The World is online - Your Business Should be Too!'
    },
    subtitle: {
      type: String,
      default: 'Get online and start growing your business today.'
    },
    btnText: {
      type: String,
      default: 'Get Started'
    },
    image: {
      type: String,
      default: 'hero1.jpg'
    },
    colors: {
      type: Array,
      default: () => ['hotpink', 'blue', 'purple']
    },
    btnText: {
      type: String,
      default: 'Get Started'
    }
  },

  computed: {
      cssVars () {
        return{
          '--colors': this.colors[0] + ',' +   this.colors[1] + ',' +  this.colors[2],
        }
    }
  }
}
</script>

<style lang="scss" scoped>
.koda-hero {
  position: relative;
  height: 700px;
  .koda-hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    // create the background gradient but use the color prop to set the colors dynamically using the vue props not scss
    background-image: linear-gradient(-45deg, var(--colors));
    background-size: 300% 300%;
    animation: gradient-animation 5s ease infinite;
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%, 0% 0%, 100% 0%;
    }
    50% {
      background-position: 100% 50%, 200% 0%, 0% 0%;
    }
    100% {
      background-position: 0% 50%, 0% 0%, 100% 0%;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__content {
    position: absolute;
    inset: 0;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0;
    }
    h6 {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
}
</style>