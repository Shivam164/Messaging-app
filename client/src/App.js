import AllChat from './AllChat';
import './App.css';
import Options from './Options';
import MessagesSection from './MessagesSection';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ChatInfo from './ChatInfo';
import SignIn from './SignIn';
import LogIn from './LogIn';
import { useContext } from 'react';
import { ProfileContext } from './Contexts/GlobalState';
import PrivateRoute from './routing/PrivateRoute';
import Contacts from './Contacts';
import Home from './Home';

function App() {

  const {signedIn} = useContext(ProfileContext);

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
