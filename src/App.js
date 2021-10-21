
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Contex/AuthProvider';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Notfound from './pages/Notfound/Notfound';
import Header from './pages/Shered/Header/Header';




function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/booking/:serviceid">
         <Booking></Booking>
       </Route>
       
       <Route path="*">
         <Notfound></Notfound>
       </Route>
     </Switch>
     </BrowserRouter>
     </AuthProvider>
    
    </div>
  );
}

export default App;
