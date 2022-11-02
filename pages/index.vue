<template>
  <b-container>
    <carousel-index class="mb-5" />
    <hr />
    <second-part class="mt-5 mb-5" />
    <hr />
    <why-choose class="mt-5 mb-5" />
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CarouselIndex from '~/components/index/CarouselIndex.vue';
import SecondPart from '~/components/index/SecondPart.vue';
import WhyChoose from '~/components/index/WhyChoose.vue';
export default {
  components: { CarouselIndex, SecondPart, WhyChoose },
  name: 'IndexPage',

  data: () => {
    return {
      titlePage: 'Home',
      descriptionPage: 'Company of cleaners',
    };
  },
  head() {
    return {
      title: this.titlePage,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.descriptionPage,
        },
      ],
    };
  },
  beforeCreate() {
    this.titlePage = this.$store.state.messages.NavBarOptions[0].title;
    this.descriptionPage =
      this.$store.state.messages.NavBarOptions[0].description;
  },
  beforeUpdate() {
    this.titlePage = this.$store.state.messages.NavBarOptions[0].title;
  },
  computed: {
    ...mapGetters({ messages: 'getMessages' }),
    // ...mapState(['messages']),
  },
};
</script>
