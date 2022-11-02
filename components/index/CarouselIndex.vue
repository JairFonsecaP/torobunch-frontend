<template>
  <b-container class="mb-3">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        :interval="4000"
        controls
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          v-for="picture in $t('CarouselElements')"
          :key="picture.src"
          :caption="picture.caption"
          :text="picture.text"
          ><template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              :src="picture.src"
              :alt="picture.alt"
            /> </template
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {},
  computed: {},
};
</script>
