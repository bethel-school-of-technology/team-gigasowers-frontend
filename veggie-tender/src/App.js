import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import UserReg from "./pages/UserReg";
import LoginForm from "./components/LoginForm";
import FarmerReg from "./pages/FarmerReg";
import UserProfile from "./pages/UserProfile";
import FarmProfile from "./pages/FarmProfile";
import FarmProfileUp from "./pages/FarmProfileUp";
import UserProfileUp from "./pages/UserProfileUp";
// import Mascot from "./components/Mascot";
import veggieBackFade from './assets/images/veggieBackFade.png';
import LoginToggle from './components/LoginToggle';



export default function App() {
      return (
            <Router>
                  <div className="App" style={{ backgroundImage: `url(${veggieBackFade})` }}>

                        {/* <Mascot /> */}
                        <div className="pages">
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
                              <Switch>
                                    <Route path="/users/update/farmProfile">
                                          <FarmProfileUp />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/update/profile">
                                          <UserProfileUp />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route exact path="/">
                                          <Navbar />
                                          <Landing />
                                    </Route>
                              </Switch>
                        </div>
                  </div>
            </Router>
      );

}










