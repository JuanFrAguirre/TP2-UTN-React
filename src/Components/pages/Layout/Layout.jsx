import React from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignIn from '../SingIn/SignIn'
import ProductDetails from '../ProductDetails/ProductDetails'
import { Route, BrowserRouter as Router, Switch, NavLink, Redirect } from 'react-router-dom'
import './Layout.scss'
import PageNotFound from '../PageNotFound/PageNotFound'


const Layout = () => {
  return (
    <Router>
      <div className="nav-bar-container">
        <div className="container nav-bar">
          <div className="logo">
            <h4>Productzilla</h4>
          </div>
          <nav className="nav-links">
            <NavLink to="/home" activeClassName="selected" className="btn btn-blue">
              Home
            </NavLink>
            <NavLink to="/signin" activeClassName="selected" className="btn btn-blue">
              Registro
            </NavLink>
            <NavLink to="/login" activeClassName="selected" className="btn btn-blue">
              Login
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="container content">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/details" component={ProductDetails}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/**" component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Layout
