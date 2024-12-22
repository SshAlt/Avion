import './App.css';
import './components/topNav/TopNav'
import TopNav from "./components/topNav/TopNav";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
    <TopNav/>
    <Main/>
    </div>
  );
}

export default App;
