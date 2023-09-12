import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import home from './components/home';
import contact from './components/contact'; 
import about from './components/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="main_menu">
          <NavLink to="/home">
            <div class="main_menu_link">Home</div>
          </NavLink>
          <NavLink to="/about">
            <div class="main_menu_link">About</div>
          </NavLink>
          <NavLink to="/contact">
            <div class="main_menu_link">Contact</div>
          </NavLink>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
