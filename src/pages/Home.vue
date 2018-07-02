<template>
  <f7-page>
    
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        DASHBOARD
      </f7-nav-title>
    </f7-navbar>
    
    <f7-block-title>{{ title }}</f7-block-title>
    
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
      <br><br>
      <f7-button big raised round fill>Big Round Button</f7-button>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br>
      
      
    </f7-block>

  <!-- TOOLBAR -->
    <f7-toolbar bottom-md>
      <f7-link href="/">
        <f7-icon if-ios="f7:home" if-md="material:home"></f7-icon>
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
  name: 'Home',
  data() {
    return {
      title: 'Dashboard'
    };
  }
};
</script>
