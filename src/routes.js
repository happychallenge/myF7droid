import Home from './pages/Home';
import ReportList from './pages/report/ReportList';
import ReportAdd from './pages/report/ReportAdd';
import ReportDetail from './pages/report/ReportDetail';
import Services from './pages/Services';
import Calendar from './pages/Calendar';
import FullCalendar from './pages/calendar/FullCalendar';
import AddCalendar from './pages/calendar/AddCalendar';
import Test from './pages/Test';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/report/list/',
    component: ReportList
  },
  {
    path: '/report/add/',
    component: ReportAdd
  },
  {
    path: '/report/:id/',
    component: ReportDetail
  },
  {
    path: '/full-calendar/list/',
    component: FullCalendar
  },
  {
    path: '/full-calendar/add/',
    component: AddCalendar
  },
  {
    path: '/services/',
    component: Services
  },
  {
    path: '/calendar/',
    component: Calendar
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];
