import logo from './logo.svg';
import './App.css';
import SignupCard from './pages/Register';
import AllRoutes from './Routes/AllRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/add"}>Add</Link>
      </nav>
    <AllRoutes/>
    </div>
  );
}

export default App;
