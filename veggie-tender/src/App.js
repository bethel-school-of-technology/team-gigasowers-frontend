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
import veggieBackFade from './assets/images/veggieBackFade.png';
import EventReg from './pages/EventReg';
import FarmEvents from './pages/FarmEvents';
import ProductReg from './components/ProductInventory/ProductRegForm';
//import farmDetails from './';
import FarmDetail from '../src/components/Landing/FarmDetails';
import ProductUp from './pages/ProductUp';
import EventUp from './pages/EventUp';
import Mascot from './components/Navbar/Mascot';



export default function App() {
      return (
            <Router>
                  <div className="App" style={{ backgroundImage: `url(${veggieBackFade})` }}>

                        {/* <Mascot /> */}
                        <div className="pages">
                              <Switch>
                                    <Route path="/users/login">
                                          <Navbar />
                                          <LoginForm />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/register">
                                          <Navbar />
                                          <UserReg />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/farmRegister">
                                          <Navbar />
                                          <FarmerReg />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/profile">
                                          <Navbar />
                                          <UserProfile />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/farmProfile">
                                          <Navbar />
                                          <FarmProfile />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/update/farmProfile">
                                          <Navbar />
                                          <FarmProfileUp />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/farmDetailPage">
                                          <Navbar />
                                          <FarmDetail />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/events">
                                          <Navbar />
                                          <FarmEvents />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/update/profile">
                                          <Navbar />
                                          <UserProfileUp />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/eventRegister">
                                          <Navbar />
                                          <EventReg />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/eventUpdate">
                                          <Navbar />
                                          <EventUp />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/productRegister">
                                          <Navbar />
                                          <ProductReg />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route path="/users/productUpdate">
                                          <Navbar />
                                          <ProductUp />
                                    </Route>
                              </Switch>
                              <Switch>
                                    <Route exact path="/">
                                          <Navbar />
                                          <Mascot />
                                          <Landing />
                                    </Route>
                              </Switch>
                              
                        </div>
                  </div>
            </Router>
      );

}









