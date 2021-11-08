<template>
  <div id="#top" class="bg2">
    <v-fab-transition>
      <v-btn href="#top"
          color="primary"
          dark
          fixed
          bottom
          right
          fab>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-navigation-drawer fixed left :expand-on-hover="this.$vuetify.breakpoint.mdAndUp" clipped mini-variant permanent>
      <v-list dense nav style="padding-top:5rem;">
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
        <v-list-item href="#getters">
          <v-list-item-icon>
            <v-icon>mdi-application-import</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Getters</v-list-item-title>
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
            This page is for quick at-a-glance examples and not meant to replace any QWeb keyword documentation. For the full documentation, see the <a href="https://qentinelqi.github.io/qweb/QWeb.html" target="_blank">latest generated library page</a>. Eventually, a playground will be established for learning how to use QWeb keywords. Currently, you can follow the <a href="https://github.com/qentinelqi/qweb_workshop" target="_blank">QWeb workshop tutorials</a>.
          </span>
        </v-col>
      </v-row>
      <v-row id="browser">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Browser</span>
          <br />
          <span class="body-text">
            These keywords allow you to interact with the browser given you have the web driver(s) installed.
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Open Browser&nbsp;&nbsp;http://example.com&nbsp;&nbsp;chrome<br />
                Open Browser&nbsp;&nbsp;http://example.com&nbsp;&nbsp;firefox<br />
                Close Browser<br />
                Close All Browsers<br />
                Switch Window&nbsp;&nbsp;NEW<br />
                Switch Window&nbsp;&nbsp;2<br />
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Browser" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Browser Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="clicking">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Clicking</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Interaction" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Interaction Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="typing">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Typing</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Input" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Input Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="drop-downs">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Drop Downs</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Dropdown" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Drop Down Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="checkboxes">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Checkboxes</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Checkbox" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Checkbox Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="tables">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Tables</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Tables" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Table Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="getters">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Getters</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Getters" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Getter Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="files">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Files</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=File" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All File Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="frames">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Frames</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html#Use%20Frame" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Frame Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="verification">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Verification</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Verification" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Verification Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="miscellaneous">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Miscellaneous</span>
          <br />
          <span class="body-text">
            Coming soon
          </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Miscellaneous Keywords
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="configuration">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Configuration</span>
          <br />
          <span class="body-text">
          Coming soon
        </span>
          <v-card outlined class="feature-card mt-4">
            <v-card rounded flat>
              <v-card-text class="code-lg">
                Coming soon
              </v-card-text>
            </v-card>
          </v-card>
          <v-btn small outlined color="#0180a0" style="margin-top:1rem;" href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Config" target="_blank">
            <v-icon color="#0180a0" left>
              mdi-chevron-right
            </v-icon>
            See All Configuration Keywords
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