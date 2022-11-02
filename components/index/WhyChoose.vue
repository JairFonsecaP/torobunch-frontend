<template>
  <b-card
    img-src="https://placekitten.com/300/300"
    img-alt="Card image"
    img-right
    :title="messages.WhyChooseUsTitle"
  >
    <b-card-text>
      {{ messages.WhyChooseUsText }}
    </b-card-text>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => {
    return {};
  },
  computed: { ...mapGetters({ messages: 'getMessages' }) },
};
</script>

<style>
</style>
