import './App.css';
import FarmerReg from './pages/FarmerReg';
import LoginForm from './components/LoginForm';
import Navbar from "./components/Navbar";
import UserRegisterForm from './components/UserRegisterForm';
//import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
<div className="App">
  <Navbar />
  <FarmerReg />
  <LoginForm />
  <UserRegisterForm/> 


</div>


    
  );
}

export default App;








// {/* <Router>
//       <Navbar />
//       <Switch>
//         <Route path='/' exact />
//       </Switch>
//     </Router> */}