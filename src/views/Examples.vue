<template>
  <div>
    <v-container class="body-container">
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">Examples</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">Examples</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="body-text">
            Examples coming soon...<br /><br />
          </span>
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
  name: 'Examples',
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