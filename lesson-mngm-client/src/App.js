// css style 
import './css/main.css';
import './css/utilities.css';
import './css/App.css'
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios  from 'axios';
import { useEffect, useState } from 'react';

//pages
import Login from './pages/Login';
import Membermngm from './pages/Membermngm';
import Statisticalas from './pages/Statisticalas';
import Accountingmngm from './pages/Accountingmngm';
import Personnelmngm from './pages/Personnelmngm';
import Permissionsmngm from './pages/Permissionsmngm';
import Productmngm from './pages/Productmngm';
import Curriculummngm from './pages/Curriculummngm';
import LessonSignmngm from './pages/Lessonsignmngm';
import Notice from './pages/Notice';
import History from './pages/History';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          <Sidebar/>
          <div className="flex-lg-1 h-screen overflow-y-lg-auto">
            <Header/>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/membermngm' element={<Membermngm/>} />
              <Route path='/accountingmngm' element={<Accountingmngm/>} />
              <Route path='/statisticalas' element={<Statisticalas/>} />
              <Route path='/personnelmngm' element={<Personnelmngm/>} />
              <Route path='/permissionsmngm' element={<Permissionsmngm/>} />
              <Route path='/productmngm' element={<Productmngm/>} />
              <Route path='/curriculummngm' element={<Curriculummngm/>} />
              <Route path='/lessonSignmngm' element={<LessonSignmngm/>} />
              <Route path='/notice' element={<Notice/>} />
              <Route path='/history' element={<History/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
