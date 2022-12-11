import './App.scss';
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <Link className='navbar__link' to='/' > Home </Link>
          <Link className='navbar__link' to='/main' > Main </Link>
        </nav>
      </header>
      <div className='router-container'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
