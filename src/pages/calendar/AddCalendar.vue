<template>
    <f7-page name="addCalendar">
        <f7-navbar sliding>
            <f7-nav-left>
                <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>
                일정 공유
            </f7-nav-title>
        </f7-navbar>
        
        <f7-block-title>일정을 공유 하여 생산성을 높이자.</f7-block-title>
        
        <f7-list form>
            <f7-list-item>
                <f7-label>
                    이벤트 이름
                </f7-label>
                <f7-input type="text" placeholder="이벤트 이름" 
                        :value="title" 
                        @input="title = $event.target.value">
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>
                    설명
                </f7-label>
                <f7-input type="textarea" placeholder="이벤트 설명" 
                        :value="content" 
                        @input="content = $event.target.value">
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>
                    이벤트 일자 
                </f7-label>
                <f7-input type="datetime" placeholder="이벤트 일자"
                        :value="start | formatDate" id="calendar-event"
                        @input="start = $event.target.value">
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>
                    이벤트 종류
                </f7-label>
                <f7-input type="select" :value="etype" 
                        @input="etype = $event.target.value">
                    <option
                        v-for="event in events" :value="event"
                            >{{ event }}</option>
                </f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-button @click="submit" block outline round raised> 입력 </f7-button>
            </f7-list-item>
        </f7-list>

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
    data() {
        return {
            title: null,
            content: null,
            start: new Date(),
            etype: 'PERSONAL',
            events: ['PERSONAL', 'TEAM', 'COMPANY'],
        }
    },
    methods: {
        submit(){
            let formData = new FormData()
            let start = new Date(this.start)
            console.log(start)
            formData.append('title', this.title)
            formData.append('content', this.content)
            formData.append('start', start)
            formData.append('etype', this.etype)

            let key = localStorage.getItem('token')

            const baseUrl = 'http://localhost:8000/api/events/users/'
            this.$http.post(baseUrl, formData, {
                headers : {
                    'Authorization': `Token ${key}`
                }
            })
            .then(response => {
                console.log(response)
                this.$f7.views.main.router.back();
            }, error => console.log(error))
        },
    },
    mounted(){
        console.log("Calendar Add Mounted", this.$f7.calendar)
        let calendarDefault = this.$f7.calendar({
            input: '#calendar-event'
        })
    }
};
</script>

<style scoped>

   
</style>