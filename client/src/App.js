import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import PrivateRoute from './routing/PrivateRoute';
import Contacts from './pages/Contacts';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path = "/" component={Home} />
          <PrivateRoute exact path = "/contacts" component={Contacts}/>
          <Route exact path = "/signup" component={SignIn}/>
          <Route exact path = "/login" component={LogIn}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
