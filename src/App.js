import './App.css';
import GetMessages from './Firebase/GetMessages';
import MyLogin from './Firebase/MyLogin';
import MySignOut from './Firebase/mySignOut';
import SendMessages from './Firebase/SendMessages';

function App() {

  return (
    <div className="App">
      <h5>Learning Firestore</h5>
      <MyLogin/>
      <MySignOut/>
      <GetMessages/>
      <SendMessages/>
    </div>
  );
}

export default App;
