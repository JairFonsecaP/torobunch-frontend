<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="shadow-lg position-fixed fixed-top"
    >
      <b-container>
        <NuxtLink to="/">
          <b-navbar-brand>
            <b-img
              v-bind="logoCss"
              src="/logo.png"
              fluid
              alt="torobunch logo"
            ></b-img>
          </b-navbar-brand>
        </NuxtLink>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              v-for="option in messages.NavBarOptions"
              :key="option.link"
              :to="option.link"
              >{{ option.title }}</b-nav-item
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown
              :text="messages.TitleLang + ' | ' + messages.Name"
              right
            >
              <b-dropdown-item
                v-for="lang in messages.Langs"
                @click="changeLanguage(lang.key)"
                :key="lang.key"
              >
                {{ lang.value }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'MainHeader',
  head() {
    return {
      htmlAttrs: {
        lang: this.lang,
      },
    };
  },
  data: () => {
    return {
      logoCss: {
        width: '210px',
      },
      lang: 'en',
    };
  },
  beforeCreate() {
    this.lang = this.$store.state.lang;
  },
  beforeUpdate() {
    this.lang = this.$store.state.lang;
  },
  methods: { ...mapMutations(['changeLanguage']) },
  computed: {
    ...mapGetters({ messages: 'getMessages' }),
  },
};
</script>

