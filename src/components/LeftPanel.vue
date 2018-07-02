<template>
  <f7-panel left :reveal="isiOS" :effect="panelEffect">
    <f7-navbar title="Menu"></f7-navbar>
    <f7-page :style="pageStyle">
      <f7-card>
        <f7-card-content>
          <img :src="this.picture" alt="" style="border-radius: 50%; width:200px"><br>
          <strong> {{name}} </strong> (<small> {{team}} </small>)
        </f7-card-content>
      </f7-card>

      <f7-list>
        <f7-list-item
          link="/"
          title="Home"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          link="/about/"
          title="About"
          link-view="#main-view"
          panel-close
          reload-all
        />
        <f7-list-item
          link="/services/"
          title="Services"
          link-view="#main-view"
          panel-close
          reload-all
        />

        <f7-list-item
          link="/calendar/"
          title="Calendar"
          link-view="#main-view"
          panel-close
          reload-all
        />
        
        <f7-list-item
          link="/full-calendar/list/"
          title="FullCalendar"
          link-view="#main-view"
          panel-close
          reload-all
        />

        <f7-list-item
          title="Login"
          link-view="#main-view"
          @click="this.$f7.loginScreen.open()"
          panel-close
          reload-all
        />

        <f7-list-item>
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-list-item>
        
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script>
export default {
  name: 'LeftPanel',
  data() {
    return {
      isMaterial: window.isMaterial,
      isiOS: window.isiOS,
      key: null,
      name: null,
      team: null,
      picture: null,
    };
  },
  computed: {
    isAuthenticated(){

    },
    pageStyle() {
      return this.isiOS ? 'background-color: white;' : '';
    },
    panelEffect() {
      return this.isiOS ? 'reveal' : 'cover';
    }
  },
  mounted(){
    const baseUrl = "http://localhost:8000"
    this.key = localStorage.getItem('token')
    this.name = localStorage.getItem('name')
    this.team = localStorage.getItem('team')
    this.picture = baseUrl + localStorage.getItem('picture')
    console.log(key)
    
  }
};
</script>

<style scoped>
.panel-left .page {
  margin-top: 44px;
  padding-bottom: 44px;
}
@media (min-width: 960px) {
  .panel.panel-left {
    border-right: 1px solid #b2b2b2;
  }
}
</style>
