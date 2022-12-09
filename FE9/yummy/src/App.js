import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Restaurant from './Pages/Restaurant/Restaurant'
import Checkout from './Pages/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' />
          <Route path = '/restaurant' element = {<Restaurant/>}/>
          <Route path = '/checkout' element = {<Checkout/>}/>
        </Routes>
      </Router>
      Hey There
    </div>
  );
}

export default App;


// routes
// 1. home page 
// 2. restaurant
// 3. cart 
// 4. 