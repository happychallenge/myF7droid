<template>
  <f7-page name="test">

    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Services
      </f7-nav-title>
    </f7-navbar>
    <!-- Searchbar -->
    <f7-searchbar
      disable-link-text="Cancel"
      search-container="#search-list"
      placeholder="Search in items"
      :clear-button="true"
      @searchbar:search="onSearch"
      @searchbar:enable="onEnable"
      @searchbar:disable="onDisable"
      @searchbar:clear="onClear"
    ></f7-searchbar>

    <!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>

    <f7-card title="Card Title" content="Card Content"></f7-card>

    <!-- Search through this list -->
    <f7-list class="searchbar-found" id="search-list">
      <f7-list-item v-for="item in items" :title="'Item ' + item"></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
  export default {
    data: function () {
      return {
        items: (function () {
          var it = [];
          for (var i = 0; i < 100; i++) it.push(i+1);
          return it;
        })()
      }
    },
    methods: {
      onSearch: function (searchbar, query, previousQuery) {
        console.log('search', query);
      },
      onClear: function (event) {
        console.log('clear');
      },
      onEnable: function (event) {
        console.log('enable');
      },
      onDisable: function (event) {
        console.log('disable');
      },
    }
  }
</script>