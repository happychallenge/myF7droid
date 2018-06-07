<template>
  <f7-page>
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Home
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
    </f7-block>

    <f7-toolbar bottom-md>
      <f7-link>
        <f7-icon f7="home"></f7-icon>
      </f7-link>
      <f7-link>
        <f7-icon f7="search"></f7-icon>
      </f7-link>
      <f7-link>
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
      title: 'Hello World'
    };
  }
};
</script>
