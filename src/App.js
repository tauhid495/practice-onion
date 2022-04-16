
import './App.css';

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App text-body  font-body">
      <NavBar/>
      <Header/>
      <Routes>
        {/* <Route path='/navbar' element={<NavBar></NavBar>}></Route> */}
      </Routes>
     App page
    </div>
  );
}

export default App;
