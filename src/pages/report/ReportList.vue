<template>
  <f7-page name="reportlist">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      
      <f7-nav-title>
        {{ title }}
      </f7-nav-title>
    </f7-navbar>
    
  <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      <report v-for="report in reports" :report=report :key=report.pk></report>
    </f7-block>
    
  <!-- TOOLBAR -->
    <f7-toolbar bottom-md>
      <f7-link href="/">

        <f7-icon f7="home"></f7-icon>
      </f7-link>
      <f7-link href="/services/">
        <f7-icon f7="search"></f7-icon>
      </f7-link>
      <f7-link href="/report/list/">
        <f7-icon f7="calendar"></f7-icon>
      </f7-link>
      <f7-link>
        <f7-icon f7="camera"></f7-icon>
      </f7-link>
    </f7-toolbar>

    <f7-fab color="blue" href='/report/add/'>
      <f7-icon f7="camera"></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script>
import Report from './components/Report'

export default {
  data() {
    return {
      title: '개선 사항 목록',
      reports: []
    }
  },
  methods: {
    data_call(){
      let key = localStorage.getItem('token')
      console.log(key)

      const baseURI = 'http://localhost:8000/api/reports/';
      
      this.$http.get(`${baseURI}`, {
              headers : {
                  'Authorization': `Token ${key}`
              }
          })
          .then(response => {
            console.log(response.data.results)
            this.reports = response.data.results
          })
          .catch(error => console.log(error))
    },
  },
  created() {
    this.data_call()
  },
  components: {
    Report,
  }
}
</script>
