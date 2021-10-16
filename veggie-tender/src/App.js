import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import UserReg from "./pages/UserReg";
import LoginForm from "./components/LoginForm";
import FarmerReg from "./pages/FarmerReg";
import UserProfile from "./pages/UserProfile";
import FarmProfile from "./pages/FarmProfile";
import Mascot from "./components/Mascot";
import veggieBackFade from './assets/images/veggieBackFade.png';


export default function App() {
      return (
            <Router>
                  <div className="App" style={{ backgroundImage: `url(${veggieBackFade})` }}>
                        <Navbar />
                        <Mascot />
                        <div className="pages">
                              <Switch>
                                    <Route path="/home">
                                          <Landing />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/login">
                                          <LoginForm />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/register">
                                          <UserReg />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/farmRegister">
                                          <FarmerReg />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/profile">
                                          <UserProfile />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/farmProfile">
                                          <FarmProfile />
                                    </Route>
                              </Switch>
                        </div>
                  </div>
            </Router>
      );
}










