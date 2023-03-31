import WorkPortfolios from "../pages/WorkPortfolios";
import Home from "../pages/Home";
import Login from "../pages/Login";


export const PRIVATE_ROUTES = [

 {
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    path: '/workportfolios/:type',
    component: WorkPortfolios,
    title: 'Projects Workportfolios',
  },
  {
    path: '/login',
    component: Login,
    title: 'Home',
  },
  {
    path: '/home',
    component: Home,
    title: 'Home',
  },
  
  // {
  //   path: '/dashboard',
  //   component: Dashboard,
  //   title: 'Dashboard',
  // },

  // dummy url created for the design help

  // {
  //   path: '/projects/workportfolios',
  //   component: WorkPortfolios,
  //   title: 'Work Portfolios',
  // },
  
]
