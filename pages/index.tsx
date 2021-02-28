import React from "react"
// import ProtectedRoute from '../components/ProtectedRoute';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Link from 'next/link';

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
  return (
    <>
    <Link href="/login">
      <button className="focus:outline-none bg-gradient-to-r from-blue-100 to-blue-400 justify-center items-center w-96 h-9 rounded-xl mx-auto text-gray-50">
        Log In</button>
    </Link>
    <Link href="/signup">
      <button className="focus:outline-none bg-gradient-to-r from-blue-400 to-blue-800 justify-center items-center w-96 h-9 rounded-xl mx-auto text-gray-50">
        Sign Up</button>
    </Link>
    </>
  )
}
