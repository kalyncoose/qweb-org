<template>
  <div>
    <v-container class="body-container">
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">Getting Started</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">Getting Started</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="body-text">
            In order to use QWeb, you will need to get a few things installed first.<br /><br />

            <ol class="install-steps" type="1">
              <li><v-icon left>mdi-language-python</v-icon>Install <a href="https://www.python.org/downloads/" target="_blank">Python</a> (QWeb currently supports versions 3.6 - 3.9)</li>
              <li><v-icon>mdi-google-chrome</v-icon><v-icon>mdi-firefox</v-icon><v-icon left>mdi-apple-safari</v-icon>Install any browser drivers you want with the variety of methods:</li>
              <ol type="a">
                <li><a href="https://www.selenium.dev/selenium/docs/api/py/index.html#drivers" target="_blank">Selenium Documentation</a></li>
                <li><a href="https://pypi.org/project/webdrivermanager/" target="_blank">WebDriverManager</a></li>
                <li><a href="https://community.chocolatey.org/packages/chromedriver" target="_blank">ChromeDriver</a> on Chocolatey (Windows)</li>
                <li><a href="https://formulae.brew.sh/cask/chromedriver" target="_blank">ChromeDriver</a> on Homebrew (Mac/Linux)</li>
              </ol>
              <li>(Recommended) Create a Python virtual environment:</li>
              <ol type="a">
                <li><v-icon left>mdi-microsoft-windows</v-icon>Windows:</li>
                <ol type="i">
                  <li>Create: <v-icon left @click="copy('win-venv')">mdi-content-copy</v-icon><span class="code-steps">python -m venv venv</span></li>
                <li>Activate: <v-icon left @click="copy('win-activate')">mdi-content-copy</v-icon><span class="code-steps">.\venv\Scripts\activate.bat</span></li>
                </ol>
                <li><v-icon left>mdi-apple</v-icon>Mac/Linux:</li>
                <ol type="i">
                  <li>Create: <v-icon left @click="copy('mac-venv')">mdi-content-copy</v-icon><span class="code-steps">python3 -m venv venv</span></li>
                  <li>Activate: <v-icon left @click="copy('mac-activate')">mdi-content-copy</v-icon><span class="code-steps">source ./venv/bin/activate</span></li>
                </ol>
                <li>Once your virtual environment is activated, you should see <span style="font-family: 'Roboto Mono', monospace">(venv)</span> in your prompt</li>
              </ol>
              <li><v-icon left>mdi-web</v-icon>Install QWeb: <v-icon left @click="copy('pip-install')">mdi-content-copy</v-icon><span class="code-steps">pip install QWeb</span></li>
              <li><v-icon left>mdi-flag-checkered</v-icon><span style="color: #0180a0;font-weight: 900;">Done!</span> You are now ready to begin writing Robot tests using QWeb.</li>
              <ol type="a">
                <li>Simply create a <span style="font-family: 'Roboto Mono', monospace">.robot</span> file and include <v-icon left @click="copy('library-qweb')">mdi-content-copy</v-icon><span class="code-steps">Library&nbsp;&nbsp;QWeb</span> in your <span style="font-family: 'Roboto Mono', monospace">*** Settings ***</span> section</li>
                <li>New to Robot Framework? Look through the detailed <a href="https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html" target="_blank">User Guide</a></li>
              </ol>
            </ol>
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
  name: 'GetStarted',
  data: () => {
    return {

    }
  },
  components: {

  },
  methods: {
    copy(type) {
      if (type === 'win-venv') {
        navigator.clipboard.writeText('python -m venv venv')
        console.log('Copied text')
      } else if (type === 'mac-venv') {
        navigator.clipboard.writeText('python3 -m venv venv')
      } else if (type === 'win-activate') {
        console.log('Copied text')
        navigator.clipboard.writeText('.\\venv\\Scripts\\activate.bat')
        console.log('Copied text')
      } else if (type === 'mac-activate') {
        navigator.clipboard.writeText('source ./venv/bin/activate')
        console.log('Copied text')
      } else if (type === 'pip-install') {
        navigator.clipboard.writeText('pip install QWeb')
        console.log('Copied text')
      } else if (type === 'library-qweb') {
        navigator.clipboard.writeText('Library  QWeb')
        console.log('Copied text')
      }
    }
  }
}
</script>

<style lang="scss">

.body-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #596275;
}

.install-steps {
  line-height: 2rem;
}

.code-steps {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 1rem;
  background: rgba(89, 98, 117, 0.1);
  padding-left:1rem;
  padding-right:1rem;
  border:1px solid #E54B00;
  border-radius: 10px;
  color: #E54B00 !important;
}

</style>