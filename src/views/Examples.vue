<template>
  <div id="#top" class="bg2">
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
            This page is for quick searching examples by tag in the QWeb documentation. Eventually, a playground will be established for learning how to use QWeb keywords. Currently, you can follow the <a href="https://github.com/qentinelqi/qweb_workshop" target="_blank">QWeb workshop tutorials</a>.
          </span>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Alert" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-alert-circle-outline
            </v-icon>
            <v-card-title style="display:block;">Alert</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for browser alerts</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Browser" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-web
            </v-icon>
            <v-card-title style="display:block;">Browser</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for browser instances</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Checkbox" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-checkbox-marked-outline
            </v-icon>
            <v-card-title style="display:block;">Checkbox</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for checkboxes</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Config" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-cog-outline
            </v-icon>
            <v-card-title style="display:block;">Config</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for QWeb configuration</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Debug" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-bug-outline
            </v-icon>
            <v-card-title style="display:block;">Debug</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for debugging</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Dropdown" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-view-list-outline
            </v-icon>
            <v-card-title style="display:block;">Dropdown</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for drop downs</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Error%20handling" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-sign-caution
            </v-icon>
            <v-card-title style="display:block;">Error Handling</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for error handling</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=File" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-file-multiple-outline
            </v-icon>
            <v-card-title style="display:block;">File</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for file handling</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Getters" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-application-import
            </v-icon>
            <v-card-title style="display:block;">Getters</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for getting values</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Icon" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-image-multiple-outline
            </v-icon>
            <v-card-title style="display:block;">Icon</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for using icons</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Input" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-keyboard-outline
            </v-icon>
            <v-card-title style="display:block;">Input</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for browser input</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Interaction" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-cursor-default-click-outline
            </v-icon>
            <v-card-title style="display:block;">Interaction</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for browser interaction</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Item" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-checkbook
            </v-icon>
            <v-card-title style="display:block;">Item</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for tooltip interaction</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Javascript" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-code-json
            </v-icon>
            <v-card-title style="display:block;">JavaScript</v-card-title>
            <v-card-subtitle class="pb-8">Keyword for executing Javascript</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Lists" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-format-list-bulleted
            </v-icon>
            <v-card-title style="display:block;">Lists</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for list interaction</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Logging" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-database-search-outline
            </v-icon>
            <v-card-title style="display:block;">Logging</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for logging</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Remote" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-remote-desktop
            </v-icon>
            <v-card-title style="display:block;">Remote</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for remote browser</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Tables" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-table
            </v-icon>
            <v-card-title style="display:block;">Tables</v-card-title>
            <v-card-subtitle class="pb-8">Keyword for table interaction</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Text" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-text
            </v-icon>
            <v-card-title style="display:block;">Text</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for text interaction</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Verification" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-check-all
            </v-icon>
            <v-card-title style="display:block;">Verification</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for verifying elements</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Window" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-monitor
            </v-icon>
            <v-card-title style="display:block;">Window</v-card-title>
            <v-card-subtitle class="pb-8">Keywords for window interaction</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="3" class="text-center">
          <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html" target="_blank">
            <v-icon large class="mt-8" color="primary">
              mdi-arrow-right
            </v-icon>
            <v-card-title style="display:block;">All Keywords</v-card-title>
            <v-card-subtitle class="pb-8">See the full documentation</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <div v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Alert" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-alert-circle-outline
                </v-icon>
                <v-card-title style="display:block;">Alert</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for browser alerts</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Browser" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-web
                </v-icon>
                <v-card-title style="display:block;">Browser</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for browser instances</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Checkbox" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-checkbox-marked-outline
                </v-icon>
                <v-card-title style="display:block;">Checkbox</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for checkboxes</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Config" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-cog-outline
                </v-icon>
                <v-card-title style="display:block;">Config</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for QWeb configuration</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Debug" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-bug-outline
                </v-icon>
                <v-card-title style="display:block;">Debug</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for debugging</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Dropdown" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-view-list-outline
                </v-icon>
                <v-card-title style="display:block;">Dropdown</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for drop downs</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Error%20handling" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-sign-caution
                </v-icon>
                <v-card-title style="display:block;">Error Handling</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for error handling</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=File" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-file-multiple-outline
                </v-icon>
                <v-card-title style="display:block;">File</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for file handling</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Getters" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-application-import
                </v-icon>
                <v-card-title style="display:block;">Getters</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for getting values</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Icon" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-image-multiple-outline
                </v-icon>
                <v-card-title style="display:block;">Icon</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for using icons</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Input" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-keyboard-outline
                </v-icon>
                <v-card-title style="display:block;">Input</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for browser input</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Interaction" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-cursor-default-click-outline
                </v-icon>
                <v-card-title style="display:block;">Interaction</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for browser interaction</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Item" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-checkbook
                </v-icon>
                <v-card-title style="display:block;">Item</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for tooltip interaction</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Javascript" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-code-json
                </v-icon>
                <v-card-title style="display:block;">JavaScript</v-card-title>
                <v-card-subtitle class="pb-8">Keyword for executing Javascript</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Lists" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-format-list-bulleted
                </v-icon>
                <v-card-title style="display:block;">Lists</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for list interaction</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Logging" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-database-search-outline
                </v-icon>
                <v-card-title style="display:block;">Logging</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for logging</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Remote" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-remote-desktop
                </v-icon>
                <v-card-title style="display:block;">Remote</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for remote browser</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Tables" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-table
                </v-icon>
                <v-card-title style="display:block;">Tables</v-card-title>
                <v-card-subtitle class="pb-8">Keyword for table interaction</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Text" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-text
                </v-icon>
                <v-card-title style="display:block;">Text</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for text interaction</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Verification" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-check-all
                </v-icon>
                <v-card-title style="display:block;">Verification</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for verifying elements</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html?tag=Window" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-monitor
                </v-icon>
                <v-card-title style="display:block;">Window</v-card-title>
                <v-card-subtitle class="pb-8">Keywords for window interaction</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="0" class="text-center">
              <v-card class="tag-card" outlined href="https://qentinelqi.github.io/qweb/QWeb.html" target="_blank">
                <v-icon large class="mt-8" color="primary">
                  mdi-arrow-right
                </v-icon>
                <v-card-title style="display:block;">All Keywords</v-card-title>
                <v-card-subtitle class="pb-8">See the full documentation</v-card-subtitle>
              </v-card>
            </v-col>
        </v-row>
      </div>
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

.tag-card:hover {
  background: #d0e7ed;
  transition: ease-in-out 250ms;
}

</style>