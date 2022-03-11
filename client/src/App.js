import AllChat from './AllChat';
import './App.css';
import Options from './Options';
import MessagesSection from './MessagesSection';
import ChatInfo from './ChatInfo';

function App() {
  return (
    <div className="App">
      <Options/>
      <AllChat/>
      <MessagesSection/>
      <ChatInfo/>
    </div>
  );
}

export default App;
