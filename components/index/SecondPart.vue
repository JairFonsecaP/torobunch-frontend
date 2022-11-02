<template>
  <div>
    <b-card-group deck>
      <b-card border-variant="info">
        <b-card-text class="paragraph text-secondary">
          {{ $t('SecondPartFirstText') }}
        </b-card-text>
      </b-card>

      <b-card
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        overlay
      >
      </b-card>

      <b-card border-variant="info">
        <b-card-text class="paragraph text-secondary">
          {{ $t('SecondPartSecondText') }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
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
.paragraph {
  text-align: justify;
  font-weight: 100;
  /* background-color: #abd3f5; */
}
</style>
