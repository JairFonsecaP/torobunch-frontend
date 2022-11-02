<template>
  <b-card class="mt-3 shadow-sm text-muted">
    <template #header
      ><b-container>
        <h5 class="mb-0">TOROBUNCH-PRO INC.</h5>
      </b-container></template
    >
    <b-container>
      <a href="mailto:info@torobunch.ca" title="send">info@torobunch.ca</a>
      <p>&copy;2022 | {{ messages.CopyRights }}</p>
    </b-container>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'MainFooter',
  computed: {
    ...mapGetters({ messages: 'getMessages' }),
  },
};
</script>

<style>
b-container {
  border-radius: 20%;
}
/* hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid #57756e;
} */
a {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  color: #4e6353;
}
a {
  transition: all 0.2s ease 0s;
}
</style>
