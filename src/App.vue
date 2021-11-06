<template>
  <v-app>
    <v-app-bar
      app
      style="background-color:#fff !important;"
      outlined
      flat>
      <v-btn outlined elevation="0" color="#0180a0" class="mr-2" fab small @click="goHome">
        <v-icon x-large color="#E54B00">mdi-web</v-icon>
      </v-btn>
      <span id="title" @click="goHome">QWeb</span>
      <v-card-subtitle style="color:#596275;margin-bottom:-15px;">{{ this.$store.state.latest_version }}</v-card-subtitle>

      <v-spacer></v-spacer>
      <!--
      <v-btn outlined color="#596275" class="mr-4" to="/" >
        <v-icon left>
          mdi-home
        </v-icon>
        Home
      </v-btn>
      -->
      <div>

      </div>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp" outlined color="#0180a0" class="mr-4" to="/get-started">
        <v-icon color="#E54B00" left>
          mdi-rocket
        </v-icon>
        Get Started
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp" outlined color="#0180a0" class="mr-4" to="/examples">
        <v-icon color="#E54B00" left>
          mdi-pen
        </v-icon>
        Examples
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp" outlined color="#0180a0" class="mr-4" href="https://qentinelqi.github.io/qweb/QWeb.html" target="_blank">
        <v-icon color="#E54B00" left>
          mdi-book
        </v-icon>
        Library
      </v-btn>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp" outlined color="#0180a0" class="mr-4" to="/about">
        <v-icon color="#E54B00" left>
          mdi-account
        </v-icon>
        About
      </v-btn>
      <v-btn outlined color="#0180a0" v-if="$vuetify.breakpoint.mdAndUp" elevation="0" href="https://robotframework.slack.com/archives/C029L0N3N81" target="_blank" class="mr-2" fab small>
        <v-icon color="#E54B00">mdi-slack</v-icon>
      </v-btn>
      <v-btn outlined color="#0180a0" v-if="$vuetify.breakpoint.mdAndUp" elevation="0" href="https://github.com/qentinelqi/qweb/" target="_blank" class="mr-2" fab small>
        <v-icon color="#E54B00">mdi-github</v-icon>
      </v-btn>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp" @click="drawer=true;" style="color:#596275;background-color:#f5f5f5 !important;"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
        absolute
        temporary>
      <v-list nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon color="#E54B00">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-item">Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/get-started">
          <v-list-item-icon>
            <v-icon color="#E54B00">mdi-rocket</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-item">Get Started</v-list-item-title>
        </v-list-item>

        <v-list-item to="/examples">
          <v-list-item-icon>
            <v-icon color="#E54B00">mdi-pen</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-item">Examples</v-list-item-title>
        </v-list-item>

        <v-list-item href="https://qentinelqi.github.io/qweb/QWeb.html" target="_blank">
          <v-list-item-icon>
            <v-icon color="#E54B00">mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-item">Library</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon color="#E54B00">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="nav-item">About</v-list-item-title>
        </v-list-item>

        <v-btn outlined color="#0180a0" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp" elevation="0" href="https://robotframework.slack.com/archives/C029L0N3N81" target="_blank" class="mr-2" fab>
          <v-icon x-large color="#E54B00">mdi-slack</v-icon>
        </v-btn>

        <v-btn outlined color="#0180a0" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp" elevation="0" href="https://github.com/qentinelqi/qweb/" target="_blank" class="mr-2" fab>
          <v-icon x-large color="#E54B00">mdi-github</v-icon>
        </v-btn>
    </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
const https = require('https');

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),

  methods: {
    goHome() {
      if (this.$route.name !== 'Home') {
        console.log(this.$route.name)
        this.$router.push('/');
      }
    },
  },

  created () {
    // Get latest QWeb release info
    https.get('https://api.github.com/repos/qentinelqi/qweb/releases/latest', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        this.$store.state.latest_version = JSON.parse(data).tag_name
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }
};
</script>

<style lang="scss">

#title {
  font-family:'Roboto', sans-serif;
  font-weight: 900;
  font-size:2.5em;
  color:#0180a0;
}

#title:hover {
  cursor: pointer;
}

.nav-item {
  font-family:'Roboto', sans-serif;
  font-weight: 900;
  color:#0180a0;
}

</style>