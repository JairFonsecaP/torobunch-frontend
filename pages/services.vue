<template>
  <b-container>
    <pre>{{ messages }}</pre>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ServicesPage',

  data: () => {
    return {
      titlePage: '',
    };
  },
  head() {
    return {
      title: this.titlePage,
    };
  },
  created() {
    this.titlePage = this.$store.state.messages.NavBarOptions[1].title;
  },
  beforeUpdate() {
    this.titlePage = this.$store.state.messages.NavBarOptions[1].title;
  },
  computed: { ...mapGetters({ messages: 'getMessages' }) },
};
</script>

<style>
</style>
