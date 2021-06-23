import logo from './logo.svg';
import './App.css';
import SideBarLeft from './components/sideBarLeft';
import TopBar from './components/topbar';
import BottomBar from './components/bottombar';

function App() {
  return (
    <div className="grid-ctn">
      <SideBarLeft />
      <TopBar />
      <BottomBar />
    </div>
  );
}

export default App;
