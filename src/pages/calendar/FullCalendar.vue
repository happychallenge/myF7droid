<template>
  <f7-page name="fullCalendar">
    
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Full Calendar
      </f7-nav-title>
    </f7-navbar>
    
    <!-- Scrollable page content-->
    <div class="block no-padding">
      <FullCalendar :events="events"
                    @eventClick="eventClick"
                    @dayClick="dayClick">
      </FullCalendar>
    </div>

    

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

    <f7-fab color="blue" href='/full-calendar/add/'>
      <f7-icon f7="calendar"></f7-icon>
    </f7-fab>

  </f7-page>
</template>

<script>

import FullCalendar from 'vue-fullcalendar'

export default {
    data(){
        return {
            events: [],
            event: null,
            dynamicPopup: null,
        }
    },
    methods : {
        'changeMonth'(start, end, current) {
          console.log('changeMonth', start.format(), end.format(), current.format())
        },
        'eventClick'(event, jsEvent, pos) {
           console.log('eventClick', event, jsEvent, pos)
           this.event = event
           dynamicPopup.open()
        },
        'dayClick' (day, jsEvent) {
            console.log('dayClick', day)
        },
        'moreClick' (day, events, jsEvent) {
            console.log('moreCLick', day, events, jsEvent)
        },
        data_call(){
            console.log("Event Data CAll")
            let key = localStorage.getItem('token')
            console.log(key)

            const baseURI = 'http://localhost:8000/api/events/users/';
            this.$http.get(`${baseURI}`, {
                  headers : {
                      'Authorization': `Token ${key}`
                  }
              })
              .then(response => {
                console.log(response)
                this.events = response.data
              })
              .catch(error => console.log(error))
        },
    },
    created(){
        this.data_call()
    },
    mounted(){
        this.dynamicPopup = app.popup.create({
            content: 
        `<f7-popup id='event-popup'>
            <f7-card>
                <f7-card-header>
                    ${event.title}
                </f7-card-header>
                <f7-card-content>
                    <f7-list>
                        <f7-list-item>
                            <f7-label>
                                설명
                            </f7-label>
                            <f7-input type="textarea">
                                ${event.content}
                            </f7-input>
                        </f7-list-item>
                        <f7-list-item>
                            <f7-label>
                                이벤트 날짜
                            </f7-label>
                            <f7-input type="text" value="${event.content}" disabled>
                            </f7-input>
                        </f7-list-item>
                        <f7-list-item>
                            <f7-label>
                                이벤트 종류
                            </f7-label>
                            <f7-input type="text" value="${event.etype}" disabled>
                            </f7-input>
                        </f7-list-item>
                        <f7-list-item>
                            <f7-label>
                                등록한 사람
                            </f7-label>
                            <f7-input type="text" value="${event.create_user}" disabled>
                            </f7-input>
                        </f7-list-item>
                    </f7-list>
                </f7-card-content>
            </f7-card>
        </f7-popup>`,
            on: {
                open: function(popup) {
                    console.log('Popup Open')
                },
                close: function(popup) {
                    console.log('Popup Close')
                },
            }
        })
    },
    components: {
        FullCalendar,
    }
}
</script>