import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='/product' element={<Product/>}/>
      <Route path='/productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>
   </Router>
  );
}

export default App;
