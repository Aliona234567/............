import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/peges/store';
import Home from './Components/peges/Home';
import About from './Components/peges/About';
import Contact from './Components/peges/Contact';
import Login from './Components/peges/Login';
import Register from './Components/peges/Register';
import Profile from './Components/peges/Profile';
import Products from './Components/peges/Products';
import CartPopup from './Components/peges/CartPopup';

function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/opup' element={<CartPopup />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </Provider>
  );
}

export default App;