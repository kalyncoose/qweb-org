<template>
  <div id="#top" class="bg2">
    <v-container class="body-container">
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">Workshop</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">Workshop</span>
        </v-col>
      </v-row>
      <v-card outlined>
        <v-card-title class="primary--text">Learning QWeb open source automation library</v-card-title>
        <v-card-subtitle>April 13, 2021</v-card-subtitle>
        <iframe v-if="this.$vuetify.breakpoint.mdAndUp" class="video" width="720" height="480" src="https://www.youtube.com/embed/Uv1s0uvW3rk" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe v-if="this.$vuetify.breakpoint.mobile && !this.$vuetify.breakpoint.mdAndUp" class="video" width="320" height="240" src="https://www.youtube.com/embed/Uv1s0uvW3rk" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <v-card-actions>
          <v-btn color="#E54B00" outlined block href="https://github.com/qentinelqi/qweb_workshop" target="_blank">
            <v-icon color="#E54B00" left>
              mdi-github
            </v-icon>
            Workshop Repository
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-row>
        <v-col cols="0" style="margin:2rem;">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Workshop',
  data: () => {
    return {
      fab: false,
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style lang="scss">

.video {
  display:block;
  margin-left:auto;
  margin-right:auto;
}

</style>