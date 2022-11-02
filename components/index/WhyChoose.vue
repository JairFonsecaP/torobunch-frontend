<template>
  <b-card
    img-src="https://placekitten.com/300/300"
    img-alt="Card image"
    img-right
    :title="$t('WhyChooseUsTitle')"
  >
    <b-card-text>
      {{ $t('WhyChooseUsText') }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {},
};
</script>

<style>
</style>
