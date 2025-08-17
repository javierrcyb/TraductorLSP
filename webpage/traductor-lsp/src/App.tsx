import './App.css';
// import ChatsNavBar from './components/ChatsNavbar.jsx';
// import { useAuth } from './context/AuthContext.jsx';

import AppRoutes from './Router.jsx';
import MainNavBar from "./components/MainNavBar.jsx";
import MainFooter from "./components/MainFooter.jsx"

function App() {

  return (
    <div className='whole-page'>
      <div className='navbar'>
        <MainNavBar />
      </div>
      <div className='main-page'>
        <AppRoutes />
      </div>
      <div className='footer'>
        <MainFooter />
      </div>
    </div>
  )
}

export default App
