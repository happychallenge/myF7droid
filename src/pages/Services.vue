<template>
  <f7-page name="services">
    
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Services
      </f7-nav-title>
    </f7-navbar>
    
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
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
  </f7-page>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      title: 'Services Page'
    };
  }
};
</script>
