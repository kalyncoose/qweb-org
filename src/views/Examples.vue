<template>
  <div>
    <v-navigation-drawer fixed left expand-on-hover clipped mini-variant permanent>
      <v-list dense nav style="padding-top:5rem;">
        <v-list-item href="#home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#browser">
          <v-list-item-icon>
            <v-icon>mdi-web</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Browser</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#clicking">
          <v-list-item-icon>
            <v-icon>mdi-cursor-default-click</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Clicking</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#typing">
          <v-list-item-icon>
            <v-icon>mdi-format-size</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Typing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#drop-downs">
          <v-list-item-icon>
            <v-icon>mdi-view-list</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Drop Downs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#checkboxes">
          <v-list-item-icon>
            <v-icon>mdi-checkbox-marked</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Checkboxes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#tables">
          <v-list-item-icon>
            <v-icon>mdi-table</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Tables</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#get-data">
          <v-list-item-icon>
            <v-icon>mdi-application-import</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Get Data</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#files">
          <v-list-item-icon>
            <v-icon>mdi-file-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Files</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#frames">
          <v-list-item-icon>
            <v-icon>mdi-image-filter-frames</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Frames</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#verification">
          <v-list-item-icon>
            <v-icon>mdi-eye</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Verification</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#miscellaneous">
          <v-list-item-icon>
            <v-icon>mdi-toolbox</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Miscellaneous</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#configuration">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Configuration</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container class="body-container" style="padding-left:5rem;">
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">Examples</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">Examples</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="body-text">
            Examples are coming soon...
          </span>
        </v-col>
      </v-row>
      <v-row id="home">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Home</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="browser">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Browser</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="clicking">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Clicking</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="typing">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Typing</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="drop-downs">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Drop Downs</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="checkboxes">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Checkboxes</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="tables">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Tables</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="get-data">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Get Data</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="files">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Files</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="frames">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Frames</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="verification">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Verification</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="miscellaneous">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Miscellaneous</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
        </v-col>
      </v-row>
      <v-row id="configuration">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Configuration</span>
          <br />
          <span class="body-text">
          Coming soon
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