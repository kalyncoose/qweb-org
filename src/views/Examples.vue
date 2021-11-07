<template>
  <div>
    <v-container class="body-container">
      <v-speed-dial
          v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp"
          v-model="fab"
          bottom
          right
          fixed
          direction="top"
          style="margin-right:1rem;margin-bottom:22rem;"
          transition="slide-y-reverse-transition">
        <template v-slot:activator>
        <v-btn v-model="fab" color="#E54B00" dark fab>
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-menu
          </v-icon>
        </v-btn>
        </template>
        <v-btn fab outlined small color="#596275" to="#home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#browser">
          <v-icon>mdi-web</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#clicking">
          <v-icon>mdi-cursor-default-click</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#typing">
          <v-icon>mdi-format-size</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#drop-downs">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#checkboxes">
          <v-icon>mdi-checkbox-marked</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#tables">
          <v-icon>mdi-table</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#get-data">
        <v-icon>mdi-application-import</v-icon>
      </v-btn>
        <v-btn fab outlined small color="#596275" to="#files">
          <v-icon>mdi-file-multiple</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#frames">
          <v-icon>mdi-image-filter-frames</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#verification">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#miscellaneous">
          <v-icon>mdi-toolbox</v-icon>
        </v-btn>
        <v-btn fab outlined small color="#596275" to="#configuration">
          <v-icon>mdi-cog</v-icon>
        </v-btn>

      </v-speed-dial>
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="auto" style="display:flex;position:fixed;">
          <v-card outlined>
            <v-navigation-drawer floating>
              <v-list dense nav>
                <v-list-item to="#home">
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#browser">
                  <v-list-item-icon>
                    <v-icon>mdi-web</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Browser</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#clicking">
                  <v-list-item-icon>
                    <v-icon>mdi-cursor-default-click</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Clicking</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#typing">
                  <v-list-item-icon>
                    <v-icon>mdi-format-size</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Typing</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#drop-downs">
                  <v-list-item-icon>
                    <v-icon>mdi-view-list</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Drop Downs</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#checkboxes">
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-marked</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Checkboxes</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#tables">
                  <v-list-item-icon>
                    <v-icon>mdi-table</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Tables</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#get-data">
                  <v-list-item-icon>
                    <v-icon>mdi-application-import</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Get Data</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#files">
                  <v-list-item-icon>
                    <v-icon>mdi-file-multiple</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Files</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#frames">
                  <v-list-item-icon>
                    <v-icon>mdi-image-filter-frames</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Frames</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#verification">
                  <v-list-item-icon>
                    <v-icon>mdi-eye</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Verification</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="#miscellaneous">
                  <v-list-item-icon>
                    <v-icon>mdi-toolbox</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Miscellaneous</v-list-item-title>
                  </v-list-item-content>
                </v-list-item><v-list-item to="#configuration">
                <v-list-item-icon>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Configuration</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ma-examples-lg" v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="auto" class="text-left">
          <span class="hook-lg">Examples</span>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">
        <v-col cols="auto" class="text-left">
          <span class="hook-sm" >Examples</span>
        </v-col>
      </v-row>
      <v-row class="ma-examples-lg" v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="auto" class="text-left">
          <span class="body-text">
            Examples coming soon...<br /><br />
          </span>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">
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

.ma-examples-lg {
  margin-left:18rem;
}

</style>