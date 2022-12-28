import './App.css';
// import Wish from './Components/Wish/Wish';
// import Header from '../src/Components/Header/Header'
// import Welcome from './Components/Welcome/Welcome'
// import Login from './Components/Login/Login'
// import Signup from './Components/Signup/Signup'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import PageNotFound from './Components/PageNotFound/PageNotFound';
import Counter from './Components/Counter/Counter';

function App() {

  return (
    <div className="App">
      <Counter/>
      {/* <BrowserRouter>
          <Header/>
          <Routes>
            <Route path = '/' element = {<Welcome/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/signup' element = {<Signup/>}/>
            <Route path = '/*' element = {<PageNotFound/>}/>
          </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
