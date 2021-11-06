<template>
  <div>
    <v-sheet color="#eaeaea">
      <v-container fluid>
        <v-row>
          <v-col></v-col>
          <v-col md>
            <div class="mx-auto">
              <h4>Quick Start:</h4>
              <v-textarea
                  flat
                  color="black"
                  dense value="pip install QWeb"
                  readonly
                  no-resize
                  outlined
                  rounded
                  filled
                  rows="1"
                  row-height="10"
              ></v-textarea>
            </div>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>

export default {
  name: 'GetStarted',
  data: () => {
    return {

    }
  },
  components: {

  },
}
</script>

<style lang="scss">



</style>