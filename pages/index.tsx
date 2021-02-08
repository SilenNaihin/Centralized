import React from "react"
// import ProtectedRoute from '../components/ProtectedRoute';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// ReactDOM.render((
//        <BrowserRouter>
//            <Switch>
//                <Route path="/login" component={Login} />
//                <ProtectedRoute exact={true} path="/" component={Dashboard} />
//                <ProtectedRoute path="/settings" component={Settings} />
//                <ProtectedRoute component={Dashboard} />
//            </Switch>
//        </BrowserRouter>
//    ), document.getElementById('root'));

export default function SplashPage(): JSX.Element {
  return <h1 className="text-center text-9xl font-bold">test</h1>
}
