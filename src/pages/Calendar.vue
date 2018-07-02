<template>
  <f7-page :page-content="false">
    
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        Calendar
      </f7-nav-title>
    </f7-navbar>

    <div class="page-content">
      <div class="block block-strong no-padding">
        <div id="event-calendar"></div>
      </div>
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
    
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page } from 'framework7-vue';
  export default {
    components: {
      f7Navbar,
      f7Page,
    },
    on: {
      pageInit(e) {
        const self = this;
        const app = self.$f7;
        const $ = self.$$;
        // Default
        
        // Inline with custom toolbar
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        self.calendarInline = app.calendar.create({
          containerEl: '#event-calendar',
          value: [new Date(), ],
          events: [
              new Date(2018, 6, 1),
              new Date(2018, 6, 10),
              new Date(2018, 6, 11),
              new Date(2018, 6, 12),
              new Date(2018, 6, 14),
              new Date(2018, 6, 15),
          ],
          renderToolbar() {
            return `${'<div class="toolbar calendar-custom-toolbar no-shadow">' +
        '<div class="toolbar-inner">' +
          '<div class="left">' +
            '<a href="#" class="link icon-only"><i class="icon icon-back '}${self.$theme.md ? 'color-black' : ''}"></i></a>` +
          '</div>' +
          '<div class="center"></div>' +
          '<div class="right">' +
            `<a href="#" class="link icon-only"><i class="icon icon-forward ${self.$theme.md ? 'color-black' : ''}"></i></a>` +
          '</div>' +
        '</div>' +
      '</div>';
          },
          on: {
            init(c) {
              $('.calendar-custom-toolbar .center').text(`${monthNames[c.currentMonth]}, ${c.currentYear}`);
              $('.calendar-custom-toolbar .left .link').on('click', () => {
                self.calendarInline.prevMonth();
              });
              $('.calendar-custom-toolbar .right .link').on('click', () => {
                self.calendarInline.nextMonth();
              });
            },
            monthYearChangeStart(c) {
              $('.calendar-custom-toolbar .center').text(`${monthNames[c.currentMonth]}, ${c.currentYear}`);
            },
          },
        });
      },
      pageBeforeRemove() {
        const self = this;
        self.calendarDefault.destroy();
        self.calendarDateFormat.destroy();
        self.calendarMultiple.destroy();
        self.calendarRange.destroy();
        self.calendarModal.destroy();
        self.calendarInline.destroy();
      },
    },
  };
</script>
