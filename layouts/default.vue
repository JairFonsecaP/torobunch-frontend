<template class="header">
  <div>
    <main-header />
    <nuxt class="mt-6" />
    <!-- <main-footer /> -->
  </div>
</template>
<script>
import Header from '../components/MainHeader.vue';
import Footer from '../components/MainFooter';

export default {
  components: { Header, Footer },
  nuxtI18n: {
    locales: ['fr', 'es', 'en'],
  },
  data: () => {
    return {};
  },
  computed: {},
};
</script>

<style >
.header {
  background-color: #e6e8e8;
}

.mt-6 {
  margin-top: 100px !important;
}
* {
  font-family: 'Roboto', sans-serif;
}
</style>

