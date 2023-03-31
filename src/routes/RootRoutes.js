import React, { useEffect } from 'react';
// import { useSelector } from "react-redux";
import {
  BrowserRouter,
  useNavigate,
} from 'react-router-dom';

import { AUTH_ROUTES } from './AuthRoutes';
import { PRIVATE_ROUTES } from './PrivateRoutes';

import RenderRoutes from './RenderRoutes';
import { useSelector } from 'react-redux';
import { getCookie } from '../Services/cookies';
import { useDispatch } from 'react-redux';
// import Loader from '../components/Loader';

const GuestRoutes = () => {
  const { isLogin, loginSuccess } = useSelector(({ authReducer }) => authReducer);
  const navigate = useNavigate();
  useEffect(()=>{
    if(loginSuccess){
      if(!isLogin){
        //debugger
        navigate('/');
      }
    } else if(!getCookie('hype')?.token){
      navigate('/');
    }
    
  },[isLogin])
  return <RenderRoutes routes={AUTH_ROUTES} />;
};

const AuthenticatedRoutes = () => {
  const { isLogin, loginSuccess } = useSelector(({ authReducer }) => authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
    else if(loginSuccess) {
      if (isLogin) {
        navigate('/Home');
      }
    }
  }, [isLogin]);
  return <RenderRoutes routes={PRIVATE_ROUTES} />;
};

const RootRouter = () => {
  const { isLogin } = useSelector(({ authReducer }) => authReducer);
	// const { isLoader } = useSelector(({ loaderReducer }) => loaderReducer);
  return (
    <BrowserRouter>
    {/* <Loader /> */}
      {/* {isLoader && <Loader />} */}
      {isLogin ? <AuthenticatedRoutes /> : <GuestRoutes />}
    </BrowserRouter>
  );
};

export default RootRouter;
