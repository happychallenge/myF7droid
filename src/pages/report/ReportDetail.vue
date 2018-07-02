<template>
  <f7-page name="another">

  <!-- NAVI -->
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
    <f7-block>
        <f7-card>
            <f7-card-header>
                {{ player.name }}
            </f7-card-header>
            <f7-card-content>
                <img :src="player.picture" alt="" width="250px">
            </f7-card-content>
        </f7-card>
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
    data(){
        return {
            title: 'Player Detail',
            id : null,
            player : null,
        }
    },
    methods: {
      data_call(){
        const baseURI = 'http://localhost:8000/players/' + this.id + '/';
        
        this.$http.get(`${baseURI}` )
            .then(response => {
              console.log(response.data)
              this.player = response.data
            })
            .catch(error => console.log(error))
      }
    },
    created(){
        this.id = this.$f7route.params.id
        this.data_call()
    },
    
}
</script>
