<template>
  <div>
    <b-card-group deck>
      <b-card border-variant="info">
        <b-card-text class="paragraph text-secondary">
          {{ messages.SecondPartFirstText }}
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
          {{ messages.SecondPartSecondText }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters({ messages: 'getMessages' }),
  },
};
</script>

<style>
.paragraph {
  text-align: justify;
  font-weight: 100;
  /* background-color: #abd3f5; */
}
</style>
