<template>
  <div class="bg1">
    <v-container class="body-container">
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="0" class="text-center">
          <span class="splash-lg-bold">Keyword </span><span class="splash-lg">based test automation for the web.</span>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">
        <v-col cols="0" class="text-center">
          <span class="splash-sm-bold">Keyword </span><span class="splash-sm">based test automation for the web.</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" style="margin:1rem;">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" class="text-center">
          <v-card rounded flat :loading="copying" outlined style="width:inherit;max-width:400px !important;margin-left:auto;margin-right:auto;">
            <v-card-text class="code"><v-icon left @click="copy()">mdi-content-copy</v-icon>pip install QWeb</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" class="text-center">
          <v-btn large outlined color="#E54B00" style="width:inherit;max-width:400px !important;" to="/get-started">
            <v-icon color="#E54B00" left>
              mdi-rocket
            </v-icon>
            Get Started
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" style="margin:1rem;">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" class="text-center">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">Built for <span style="color:#E54B00;">Robot</span>. Made for <span style="color:#0180a0;">Humans</span>.</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">Built for <span style="color:#E54B00;">Robot</span>.<br />Made for <span style="color:#0180a0;">Humans</span>.</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0">
          <blockquote class="quote-orange">Designed by the test automation experts behind <a href="https://robotframework.org" target="_blank">Robot Framework</a>, QWeb was crafted around central themes of low maintenance and highly-readable web automation.</blockquote>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" style="margin:1rem;">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" class="text-center">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">Features</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">Features</span>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-xml</v-icon>Avoid XPaths</v-card-title>
            <v-card-text class="feature-details">Dynamically locate elements using the plain text you provide it. Easily interact with what you see on the screen.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-lg"><u>Keyword</u>&nbsp;&nbsp;&nbsp;&nbsp;<u>Locator</u>&nbsp;&nbsp;&nbsp;<u>Value</u><br />
                Type Text&nbsp;&nbsp;Username&nbsp;&nbsp;admin<br />
                Click Text&nbsp;&nbsp;Settings<br />
                Click Checkbox&nbsp;&nbsp;Notifications&nbsp;&nbsp;on<br />
                Drop Down&nbsp;&nbsp;User Role&nbsp;&nbsp;Member<br />
                Verify Text&nbsp;&nbsp;Updated successfully
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-anchor</v-icon>Anchor & Index</v-card-title>
            <v-card-text class="feature-details">Anchor to nearby text, use an index, or use attributes to locate the element you want.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-lg"><u>Keyword</u>&nbsp;&nbsp;&nbsp;&nbsp;<u>Locator</u>&nbsp;&nbsp;&nbsp;<u>Value</u><br />
                Type Text&nbsp;&nbsp;Username&nbsp;&nbsp;admin&nbsp;&nbsp;anchor=Password<br />
                Click Text&nbsp;&nbsp;Next&nbsp;&nbsp;anchor=Close<br />
                Drop Down&nbsp;&nbsp;Shipping&nbsp;&nbsp;Fast&nbsp;&nbsp;anchor=Checkout<br />
                Click Text&nbsp;&nbsp;Checkout&nbsp;&nbsp;anchor=2<br />
                Verify Text&nbsp;&nbsp;1234&nbsp;&nbsp;anchor=Order Number
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-timer-sand-empty</v-icon>Intelligent Sleeping</v-card-title>
            <v-card-text class="feature-details">Built-in mechanism to handle latency automatically.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-lg">
                For example, the latency of pages loading and elements being enabled/disabled are handled by keywords. Timeouts are typically 10-20 seconds and can be adjusted at any time.
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-file-cog-outline</v-icon>Low Test Maintenance</v-card-title>
            <v-card-text class="feature-details">Superior location strategies make your tests immune to UI changes.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-lg">
                For example, if the application is updated and a button moves, QWeb's keywords will dynamically find the button and not break the test.
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">
        <v-col cols="auto" class="feature-card">
          <v-card outlined>
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-xml</v-icon>Avoid XPaths</v-card-title>
            <v-card-text class="feature-details">Dynamically locate elements using the plain text you provide it. Easily interact with what you see on the screen.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-sm"><u>Keyword</u>&nbsp;&nbsp;&nbsp;&nbsp;<u>Locator</u>&nbsp;&nbsp;&nbsp;<u>Value</u><br />
                                        Type Text&nbsp;&nbsp;Username&nbsp;&nbsp;admin<br />
                                        Click Text&nbsp;&nbsp;Settings<br />
                                        Click Checkbox&nbsp;&nbsp;Notifications&nbsp;&nbsp;on<br />
                                        Drop Down&nbsp;&nbsp;User Role&nbsp;&nbsp;Member<br />
                                        Verify Text&nbsp;&nbsp;Updated successfully
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="auto" class="feature-card">
          <v-card outlined>
            <v-card-title class="feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-anchor</v-icon>Anchor & Index</v-card-title>
            <v-card-text class="feature-details">Anchor to nearby text, use an index, or use attributes to locate the element you want.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-sm"><u>Keyword</u>&nbsp;&nbsp;&nbsp;&nbsp;<u>Locator</u>&nbsp;&nbsp;&nbsp;<u>Value</u><br />
                Type Text&nbsp;&nbsp;Username&nbsp;&nbsp;admin&nbsp;&nbsp;anchor=Password<br />
                Click Text&nbsp;&nbsp;Next&nbsp;&nbsp;anchor=Close<br />
                Drop Down&nbsp;&nbsp;Shipping&nbsp;&nbsp;Fast&nbsp;&nbsp;anchor=Checkout<br />
                Click Text&nbsp;&nbsp;Checkout&nbsp;&nbsp;anchor=2<br />
                Verify Text&nbsp;&nbsp;1234&nbsp;&nbsp;anchor=Order Number
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-timer-sand-empty</v-icon>Intelligent Sleeping</v-card-title>
            <v-card-text class="feature-details">Built-in mechanism to handle latency automatically.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-sm">
                For example, the latency of pages loading and elements being enabled/disabled are handled by keywords. Timeouts are typically 10-20 seconds and can be adjusted at any time.
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-file-cog-outline</v-icon>Low Test Maintenance</v-card-title>
            <v-card-text class="feature-details">Superior location strategies make your tests immune to UI changes.</v-card-text>
            <v-card rounded flat>
              <v-card-text class="code-sm">
                For example, if the application is updated and a button moves, QWeb's keywords will dynamically find the button and not break the test.
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" style="margin:1rem;">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0">
          <blockquote class="quote-blue">QWeb frees automation engineers from struggling with managing XPaths and unreliable sleeps. Most of all, QWeb provides immunity to user interface changes, dramatically reducing time spent on test maintenance.</blockquote>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" style="margin:1rem;">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" class="text-center">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">Why use QWeb?</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">Why use QWeb?</span>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-github</v-icon>Open Source</v-card-title>
            <v-card-text class="feature-details">Developed by passionate test automation experts around the world. Get involved and share our love of open-source.</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" href="https://github.com/qentinelqi/qweb" target="_blank">
              <v-icon color="#0180a0" left>
                mdi-code-tags
              </v-icon>
              Contribute
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-robot</v-icon>Robot Framework</v-card-title>
            <v-card-text class="feature-details">QWeb is an independent library built for Robot, one of the largest open-source tools and community for test automation.</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" href="https://robotframework.org" target="_blank">
              <v-icon color="#0180a0" left>
                mdi-tools
              </v-icon>
              Try Robot
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-check-circle</v-icon>Companies Trust QWeb</v-card-title>
            <v-card-text class="feature-details">According to <a href="https://www.copado.com/platform/test" target="_blank">Copado Robotics</a> (formerly Qentinel Pace), there are more than <span style="color:#0180a0;">1,000,000</span> tests using the QWeb library.</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" href="https://qentinel.com/qweb-open-source-automation-library" target="_blank">
              <v-icon color="#0180a0" left>
                mdi-newspaper
              </v-icon>
              Read Stories
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-clock-fast</v-icon>Easy to Learn</v-card-title>
            <v-card-text class="feature-details">While QWeb has a 150+ keywords, only a handful are necessary for most testing. Check out the examples below!</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" to="/examples">
              <v-icon color="#0180a0" left>
                mdi-file-code
              </v-icon>
              See Examples
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">
        <v-col cols="auto">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-github</v-icon>Open Source</v-card-title>
            <v-card-text class="feature-details">Developed by passionate test automation experts around the world. Get involved and share our love of open-source.</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" href="https://github.com/qentinelqi/qweb" target="_blank">
              <v-icon color="#0180a0" left>
                mdi-code-tags
              </v-icon>
              Contribute
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-robot</v-icon>Robot Framework</v-card-title>
            <v-card-text class="feature-details">QWeb is an independent library built for Robot, one of the largest open-source tools and community for test automation.</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" href="https://robotframework.org" target="_blank">
              <v-icon color="#0180a0" left>
                mdi-tools
              </v-icon>
              Try Robot
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-check-circle</v-icon>Companies Trust QWeb</v-card-title>
            <v-card-text class="feature-details">According to <a href="https://www.copado.com/platform/test" target="_blank">Copado Robotics</a> (formerly Qentinel Pace), there are more than <span style="color:#0180a0;">1,000,000</span> tests using the QWeb library.</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" href="https://qentinel.com/qweb-open-source-automation-library" target="_blank">
              <v-icon color="#0180a0" left>
                mdi-newspaper
              </v-icon>
              Read Stories
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card outlined class="feature-card">
            <v-card-title class="feature-icon feature-title"><v-icon x-large class="feature-icon" color="primary" left>mdi-clock-fast</v-icon>Easy to Learn</v-card-title>
            <v-card-text class="feature-details">While QWeb has a 150+ keywords, only a handful are necessary for most testing. Check out the examples below!</v-card-text>
            <v-btn large outlined color="#0180a0" style="max-width:200px;margin-left:auto;margin-right:auto;display:flex;margin-bottom:10px;" to="/examples">
              <v-icon color="#0180a0" left>
                mdi-file-code
              </v-icon>
              See Examples
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" class="text-center">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">FAQ</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">FAQ</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="0">
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">What is QWeb?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                QWeb is an open-source Robot Framework web test automation library. It is free for you to use in your projects to create the most efficient and maintainable test automation.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">Do I have to pay for using QWeb?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                No, it is open-source and you do not need to pay anything for it.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">Where was QWeb created and why?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                QWeb was created at Qentinel by Qentinelians. And Qentinel is committed to supporting the development of QWeb. Qentinelians were not satisifed with the detection capabilities and stability of the Robot framework’s Selenium2Library. Also, we strongly believe in keyword-driven testing. Thus QWeb was created as a part of PaceWords philiosphy, an extremely robust and stable keyword-driven test automation library for web application automation.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">Do companies use QWeb?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                Yes, a lot companies have built their test automation using QWeb: <a href="https://qentinel.com/customers/metso/" target="_blank">Metso Outotect</a>, <a href="https://qentinel.com/customers/finnish-tax-administration/" target="_blank">Finnish Tax Administration (Vero)</a>, <a href="https://qentinel.com/customers/ponsse-information-systems-guarantee-customer-satisfaction/" target="_blank">Ponsse</a>, <a href="https://qentinel.com/customers/elisa/" target="_blank">Elisa</a> to name a few.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">Can I contribute to QWeb’s development and how?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                Yes, you are most welcome to contribute to QWeb development and <a href="https://github.com/qentinelqi/qweb/blob/master/CONTRIBUTING.md" target="_blank">become part of the ever-growing community</a>.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">I found a bug in QWeb what should I do?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                Excellent, let’s improve QWeb. You could raise a bug report or make a fix and create a pull request. Here are more instructions on <a href="https://github.com/qentinelqi/qweb/blob/master/CONTRIBUTING.md" target="_blank">joining the QWeb community</a>.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">Who is Qentinel and Copado?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                Qentinel is the company that originally founded Robot Framework and QWeb, Copado acquired Qentinel in 2021.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header class="question">Does QWeb have a community?</v-expansion-panel-header>
              <v-expansion-panel-content class="answer">
                Yes! Feel free to <a href="https://robotframework.slack.com/archives/C029L0N3N81" target="_blank">join our Slack community</a> and participate in the conversation around QWeb.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
  name: 'Home',
  data: () => {
    return {
      copying: false,
    }
  },
  components: {

  },
  methods: {
    copy() {
      this.copying = true;
      setTimeout(() => {
        navigator.clipboard.writeText("pip install QWeb")
        console.log("Text copied successfully!")
        this.copying = false;
      }, 1000)
    }
  }
}
</script>

<style lang="scss">

.bg1 {
  background-size: 100vmax;
  background-position-x: center;
  background-position-y: 4.1rem;
  background: url("../assets/bg.png") no-repeat center 4.1rem;
  overflow-x: hidden;
}

.body-container {
  margin:0;
  padding-top:5%;
  max-width:100% !important;
  padding-left:10%;
  padding-right:10%;
}

.code-lg {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #596275 !important;
}

.code-sm {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #596275 !important;
}

.splash-lg {
  font-family: 'Roboto', sans-serif;
  font-weight:200;
  font-size:5rem;
  color:#0180a0;
  line-height:normal;
}

.splash-lg-bold {
  font-family: 'Roboto', sans-serif;
  font-weight:400;
  font-size:5rem;
  color:#E54B00;
  line-height:normal;
}

.splash-sm {
  font-family: 'Roboto', sans-serif;
  font-weight:200;
  font-size:4rem;
  color:#0180a0;
  line-height: normal;
}

.splash-sm-bold {
  font-family: 'Roboto', sans-serif;
  font-weight:400;
  font-size:4rem;
  color:#E54B00;
  line-height: normal;
}

.quote-orange {
  font-family: 'Roboto', sans-serif;
  font-weight:300;
  font-size:2rem;
  display:block;
  width:100%;
  float:left;
  clear: left;
  color:#596275;
  line-height:normal;
  text-align:left;
  border-left:5px solid #E54B00;
  background:rgba(229,75,0,0.1);
  padding: 10px 20px;
}

.quote-blue {
  font-family: 'Roboto', sans-serif;
  font-weight:300;
  font-size:2rem;
  display:block;
  width:100%;
  float:right;
  clear: right;
  color:#596275;
  line-height:normal;
  text-align:right;
  border-right:5px solid #0180a0;
  background:rgba(1,128,160,0.1);
  padding: 10px 20px;
}

.hook-lg {
  font-family: 'Roboto', sans-serif;
  font-weight:600;
  font-size:3rem;
  color:#596275;
}

.hook-sm {
  font-family: 'Roboto', sans-serif;
  font-weight:600;
  font-size:2rem;
  color:#596275;
}

.mini-divider {
  background: #596275;
  height:3px;
  width:100px;
  margin: 2rem auto;
}

.feature-card {
  width: inherit;
}

.feature-icon {
  color: #0180a0;
}

.feature-title {
  font-family: 'Roboto', sans-serif;
  font-size:1.5rem;
  font-weight:400;
  color:#0180a0;
}

.feature-details {
  font-family: 'Roboto', sans-serif;
  font-size:1rem;
  font-weight:300;
  line-height:2rem;
}

.question {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #0180a0;
}

.answer {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #596275;
}

</style>