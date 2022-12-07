import './App.css';
import Wish from './Components/Wish/Wish';
import Header from '../src/Components/Header/Header'
import Welcome from './Components/Welcome/Welcome'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path = '/' element = {<Welcome/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/signup' element = {<Signup/>}/>
            <Route path = '/*' element = {<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
