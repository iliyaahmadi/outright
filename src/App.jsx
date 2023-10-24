import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
//components
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPassForm from './components/ForgotPassForm';
import VerifyCodeForm from './components/VerifyCodeForm';
import NewPassForm from './components/NewPassForm';
import SuccessPass from './components/SuccessPass';
//pages
import Home from './pages/home';
import Auth from './pages/auth';
//layout
import RootLayout from './layout/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: '/discover', element: <Cat /> },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      { index: true, element: <SignupForm /> },
      { path: '/auth/login', element: <LoginForm /> },
      { path: '/auth/forgotpassword', element: <ForgotPassForm /> },
      { path: '/auth/verify', element: <VerifyCodeForm /> },
      { path: '/auth/newpassword', element: <NewPassForm /> },
      { path: '/auth/success', element: <SuccessPass /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
