import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/footer';
import SignUp from './components/signup';
import Login from './components/login';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import PrivateComponent from './components/Privatecomp';
import ProductList from './components/ProductList';
import Profile from './components/Profile';

function App(){
  return(
    <div className='App'>
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/logout" element={<h3>Logout</h3>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App;