<template>
  <div class="bg2">
    <v-container class="body-container">
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-lg" v-if="$vuetify.breakpoint.mdAndUp">About</span>
          <span class="hook-sm" v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">About</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="body-text">
            QWeb is a keyword library for <a href="https://robotframework.org" target="_blank">Robot Framework</a>, that makes web testing extremely simple, yet robust and fun. It has been developed by test automation experts for test automation engineers around the central themes of low maintenance and highly readable automation. For many large organizations, QWeb has been the key to their successful automation.
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-sm">Contact</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="body-text">
            The best way to get in touch with QWeb developers is through our channel in the official Robot Framework Slack. <a href="https://robotframework.slack.com/archives/C029L0N3N81" target="_blank">Join now</a>.
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-sm">Stories</span>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mdAndUp">
        <v-col cols="0" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Building open source automation library</span>
          <br />
          <span class="body-text">
            Antti Heimola has been involved in QWeb library development since the beginning. Heimola shares his insights about open source software, QWeb, and how he sees the future of software testing.
          </span>
          <br />
          <v-btn outlined color="#E54B00" style="margin-top:1rem;" href="https://info.qentinel.com/blog/building-open-source-automation-library" target="_blank">
            <v-icon color="#E54B00" left>
              mdi-chevron-right
            </v-icon>
            Read more
          </v-btn>
        </v-col>
        <v-col cols="0" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Solving problems with QWeb</span>
          <br />
          <span class="body-text">
            Tuomas Koukkari is an expert in test automation. Here he explains how he was first introduced to software testing and open source software. Koukkari shares his thoughts on QWeb and its benefits.
          </span>
          <br />
          <v-btn outlined color="#E54B00" style="margin-top:1rem;" href="https://info.qentinel.com/blog/solving-problems-with-qweb" target="_blank">
            <v-icon color="#E54B00" left>
              mdi-chevron-right
            </v-icon>
            Read more
          </v-btn>
        </v-col>
        <v-col cols="0" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Finnish Tax Administration project</span>
          <br />
          <span class="body-text">QWeb was originally created during a project for Finnish Tax Administration. Read the story about open source fuelling taxation.</span>
          <br />
          <v-btn outlined color="#E54B00" style="margin-top:1rem;" href="http://qentinel.com/customers/finnish-tax-administration-open-source-test-automation-library/" target="_blank">
            <v-icon color="#E54B00" left>
              mdi-chevron-right
            </v-icon>
            Read more
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.mobile && !$vuetify.breakpoint.mdAndUp">
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Building open source automation library</span>
          <br />
          <span class="body-text">
            Antti Heimola has been involved in QWeb library development since the beginning. Heimola shares his insights about open source software, QWeb, and how he sees the future of software testing.
          </span>
          <br />
          <v-btn outlined color="#E54B00" style="margin-top:1rem;" href="https://info.qentinel.com/blog/building-open-source-automation-library" target="_blank">
            <v-icon color="#E54B00" left>
              mdi-chevron-right
            </v-icon>
            Read more
          </v-btn>
        </v-col>
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Solving problems with QWeb</span>
          <br />
          <span class="body-text">
            Tuomas Koukkari is an expert in test automation. Here he explains how he was first introduced to software testing and open source software. Koukkari shares his thoughts on QWeb and its benefits.
          </span>
          <br />
          <v-btn outlined color="#E54B00" style="margin-top:1rem;" href="https://info.qentinel.com/blog/solving-problems-with-qweb" target="_blank">
            <v-icon color="#E54B00" left>
              mdi-chevron-right
            </v-icon>
            Read more
          </v-btn>
        </v-col>
        <v-col cols="auto" class="text-left">
          <span class="hook-mini" style="color: #0180a0 !important;">Finnish Tax Administration project</span>
          <br />
          <span class="body-text">QWeb was originally created during a project for Finnish Tax Administration. Read the story about open source fuelling taxation.</span>
          <br />
          <v-btn outlined color="#E54B00" style="margin-top:1rem;" href="http://qentinel.com/customers/finnish-tax-administration-open-source-test-automation-library/" target="_blank">
            <v-icon color="#E54B00" left>
              mdi-chevron-right
            </v-icon>
            Read more
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="text-left">
          <span class="hook-sm">History</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0">
          <v-timeline>
            <v-timeline-item color="#0180a0" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold primary--text">2002</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Qentinel founded
                </h2>
                <div>
                  Qentinel is founded and delivers the first automation projects.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#E54B00" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold" style="color:#E54B00;">2003</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  New teammates
                </h2>
                <div>
                  Pekka Klärck (then Pekka Laukkanen) joins Qentinel as a test automation trainee.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#0180a0" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold primary--text">2004</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Exploring keyword based testing
                </h2>
                <div>
                  Despite the success of its test automation efforts, Qentinel team is not happy with the productivity of the existing test automation technologies. <a href="https://www.logigear.com/magazine/test-methods-and-metrics/key-success-factors-for-keyword-driven-testing/" target="_blank">Keyword-based test automation</a> by Hans Buwalda is tried as a new and different approach.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#E54B00" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold" style="color:#E54B00;">2005</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Robot Framework is started
                </h2>
                <div>
                  The basic ideas for Robot Framework were tried in a couple of Qentinel’s customer projects and further shaped in <a href="http://eliga.fi/writings.html" target="_blank">Pekka's master's thesis</a>. Pekka wanted to build a generic test automation framework so that any test automation project could be built on top of that framework without having to build everything from the scratch.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#0180a0" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold primary--text">2006</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Nokia adopts Robot Framework
                </h2>
                <div>
                  Nokia has become an active user of Robot Framework and the technology is being further developed in Nokia under Pekka’s architectural leadership. Pekka and Harri Töhönen of Qentinel, together with Petri Haapio of Nokia, come up with a proposal to publish Robot Framework under an open source license. <a href="https://info.qentinel.com/blog/how-i-first-met-robot-framework?hsLang=en" target="_blank">Esko Hannula's blog</a>.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#E54B00" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold" style="color:#E54B00;">2007</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Research is done
                </h2>
                <div>
                  Preparations for open-sourcing Robot Framework begin. It is seen that the value of the technology grows best if its user community grows, too. This makes sense because the Robot Framework architecture kind of mandates having an active contribution from the community for the framework to prosper. More research is done about the applicability of keyword-based test automation and supports the development of the technology, among them <a href="https://www.yumpu.com/en/document/read/35854834/acceptance-test-driven-development-with-keyword-niksula" target="_blank">Juha Rantanen's master thesis</a> about the use of Robot Framework for test-driven development (TDD). Pekka leaves Qentinel to pursue an independent career as the master-mind behind Robot Framework.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#0180a0" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold primary--text">2008</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Robot Framework 2.0 is released
                </h2>
                <div>
                  Version 2.0 of Robot Framework is released as open-source software on June 24, 2008.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#E54B00" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold" style="color:#E54B00;">2009-14</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Robot Framework grows
                </h2>
                <div>
                  The use of Robot Framework grows. It becomes the most popular test automation tool in its homeland Finland and gains popularity all over the world.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#0180a0" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold primary--text">2008</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Robot Framework foundation
                </h2>
                <div>
                  Companies actively using Robot Framework, Qentinel among them, establish Robot Framework foundation to promote Robot Framework and accelerate its adoption and development.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#E54B00" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold" style="color:#E54B00;">2016-17</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Enhancing the framework
                </h2>
                <div>
                  Working with some of its advanced customers, Qentinel recognizes growing complexity, volume, and dependability requirements for test automation solutions. Qentinel experiments with technologies and solutions to complement Robot Framework with test infrastructure management, test collaboration, and quality metrics.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#0180a0" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold primary--text">2018</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Qentinel Pace is launched
                </h2>
                <div>
                  Qentinel launches Qentinel Pace a cloud-based test platform Qentinel Pace. Robot Framework plays a key role in the core executor of Qentinel Pace.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#E54B00" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold" style="color:#E54B00;">March 2021</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  QWeb is released
                </h2>
                <div>
                  Qentinel releases QWeb, the web automation library of Qentinel Pace, as open source.
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#0180a0" small>
              <template v-slot:opposite>
                <span class="headline font-weight-bold primary--text">June 2021</span>
              </template>
              <div class="py-4">
                <h2 class="headline font-weight-light mb-4">
                  Copado acquires Qentinel
                </h2>
                <div>
                  Copado, a developer operations (DevOps) company initially built for the Salesforce ecosystem, has announced plans to acquire AI-powered software testing platform Qentinel. <a href="https://venturebeat.com/2021/06/29/copado-acquires-qentinel-to-bring-multicloud-software-testing-to-devops/" target="_blank">Paul Sawers' article</a>.
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
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
  name: 'About',
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

.hook-mini {
  font-family: 'Roboto', sans-serif;
  font-weight:600;
  font-size:1.5rem;
  color:#596275;
}

</style>