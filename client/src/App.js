import AllChat from './AllChat';
import './App.css';
import Options from './Options';
import MessagesSection from './MessagesSection';
import ChatInfo from './ChatInfo';
import SignIn from './SignIn';

function App() {

  var signedin = false;

  return (
    <div className="App">
      {!signedin && <SignIn/>}
      {signedin && <Options/>}
      {signedin && <AllChat/>}
      {signedin &&<MessagesSection/>}
      {signedin && <ChatInfo/>}
    </div>
  );
}

export default App;
