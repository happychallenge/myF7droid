<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel / View -->
    <left-panel-view />

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-item>
              <f7-label>Username</f7-label>
              <f7-input name="username" :value="username" @input="username = $event.target.value" 
                      placeholder="Username" type="text"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Password</f7-label>
              <f7-input name="password"  :value="password" @input="password = $event.target.value" 
                      type="password" placeholder="Password"></f7-input>
            </f7-list-item>
          </f7-list>
          <f7-list>
            <f7-col width="50">
              <f7-button @click="signIn" outline round raised login-screen-open="#login-screen">Login Screen</f7-button>
              <f7-block-footer>
                <p> 사용자 계정은 본인 Email ID와 동일합니다. </p>
                <p> 초기화된 비밀번호는 본인의 사번입니다. </p>
                <p> 로그인 후 반드시 패스워드를 변경하셔야 합니다. </p>
              </f7-block-footer>
            </f7-col>
          </f7-list>

          <f7-list>
            <f7-list-item link="/" title="Home" link-view="#main">
              
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
    
  </div>


</template>

<script>
// import axios from 'axios'
import LeftPanel from './components/LeftPanel';

export default {
  name: 'App',
  components: {
    'left-panel-view': LeftPanel
  },
  data(){
    return {
      username : 'xmlyoon',
      password : 'Wjdgml00', 
    }
  },
  methods: {
    handleBackButton() {
      // NOTE: The back button will behave differently depending on circumstance
      // If the side panel is open, close it
      if (document.querySelector('.panel-left.panel-active')) {
        // This will do nothing when the split-view is open
        return this.$f7.panel.close();
      }
      // Close modals
      // @TODO How to handle modals we shouldn't close like a login-screen?
      if (document.querySelector('.modal-in')) {
        return this.$f7.popover.close();
      }
      // If we have a back button, we want it to go back
      if (this.$f7.views.main.router.history.length > 1) {
        return this.$f7.views.main.router.back();
      }
      // Default to closing the app
      return window.navigator.app.exitApp();
    },
    onF7Ready(f7) {
      // do some f7 related logic
      // f7.dialog.alert('App initialized');
      console.log("onF7Ready");
    },
    signIn(){
      
     this.$http.post('http://localhost:8000/api/authenticate/', {
        username: this.username,
        password: this.password
     }).then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('team', response.data.team)
        localStorage.setItem('picture', response.data.picture)
        console.log(this.$f7)
        console.log(this.$f7.router)
        this.$f7.loginScreen.close()
        this.$f7.router.navigate('/report/list/')
        // this.$f7.views.main.router.back();
     }, error => console.log(error))
    }
  },
  computed: {
    isiOS() {
      return this.$theme.ios;
    }
  },
  created() {
    document.addEventListener('backbutton', this.handleBackButton);
  }
};
</script>

<style>

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-300px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-300px);
        opacity: 0;
    }
}
/* style is not `scoped` so navbars in Pages are modified as well */
@media (min-width: 960px) {
  /* Let's hide panel-opener button when left panel is visible */
  .view-main .navbar .panel-open {
    display: none;
  }
}
</style>
