// css style 
import './css/main.css';
import './css/utilities.css';
import './css/App.css'
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

//pages
import Login from './pages/Login';
import Membermngm from './pages/Membermngm';
import Statisticalas from './pages/Statisticalas';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Accountingmngm from './pages/Accountingmngm';
import Personnelmngm from './pages/Personnelmngm';
import Permissionsmngm from './pages/Permissionsmngm';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>} />
        </Routes>

        <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <Sidebar/>
          <div class="flex-lg-1 h-screen overflow-y-lg-auto">
            <Header/>
            <Routes>
              <Route path='/' element={<Membermngm/>} />
              <Route path='/accountingManagement' element={<Accountingmngm/>} />
              <Route path='/statisticalas' element={<Statisticalas/>} />
              <Route path='/personnelmngm' element={<Personnelmngm/>} />
              <Route path='/permissionsmngm' element={<Permissionsmngm/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
