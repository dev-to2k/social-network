/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import { Redirect, Route } from 'react-router-dom';

function PrivateRouter(props) {
  const firstLogin = localStorage.getItem('firstLogin');
  return firstLogin ? <Route {...props} /> : <Redirect to="/" />;
}

export default PrivateRouter;
