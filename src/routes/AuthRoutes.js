import Login from "../pages/Login";

export const AUTH_ROUTES = [
  {
    path: '/',
    component: Login,
    title: 'Login',
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
  },
  
  // {
  //   path: '/terms-conditions',
  //   component: TermsConditions,
  //   title: 'Terms & Conditions',
  // },
  // {
  //   path: '/reset-password/:token',
  //   component: ResetPassword,
  //   title: 'Reset Password',
  // },
];
