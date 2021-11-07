<template>
  <div class="bg1">
    <v-container class="body-container">
      <v-row>
        <v-col cols="0" class="text-center">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">404 - Page Not Found</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">404 - Page Not Found</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" class="text-center">
          <span class="body-text">
            Sorry for the inconvenience, please return to the home page using the button below!
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0">
          <v-btn block outlined color="#0180a0" style="margin-top:1rem;margin-left:auto;margin-right:auto;" to="/">
            <v-icon color="#0180a0" left>
              mdi-home
            </v-icon>
            Go Back
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" style="margin:2rem;">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data: () => {
    return {

    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style lang="scss">



</style>