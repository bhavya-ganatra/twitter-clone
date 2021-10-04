import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    // BEM convention - "app"
    <div className="app">
      
      {/* Side bar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
