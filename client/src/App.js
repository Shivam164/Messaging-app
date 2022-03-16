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

function App() {

  const {signedIn} = useContext(ProfileContext);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            {!signedIn && <SignIn/>}
            {signedIn && <Options/>}
            {signedIn && <AllChat/>}
            {signedIn &&<MessagesSection/>}
            {signedIn && <ChatInfo/>}
          </Route>
          <Route exact path = "/login">
            <LogIn/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
