import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_main_wrapper"> 
      <Sidebar/>
      <main className="app_main_content">
          <h2>Content</h2>
      </main>
      </div>
    </div>
  );
}

export default App;
