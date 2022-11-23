// css style 
import './css/main.css';
import './css/utilities.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RouteTest from './components/RouteTest';
import Login from './pages/Login';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
