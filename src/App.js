
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Navbarrr from './components/Navbarrr';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductDetail from "./pages/ProductDetail"
import Purchases from "./pages/Purchases"



function App() {

const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <Navbarrr/>
      <Container>
        
        {isLoading &&  <LoadingScreen/>}
       
      <Routes>
          <Route path='/'  element ={<Home/>}/>
          <Route path='/login'  element ={<Login/>}/>
          <Route path='/product/:id'  element ={<ProductDetail/>}/>
         
          <Route element={<ProtectedRoutes/>}>
             <Route path='/purchase'  element ={<Purchases/>}/>
          </Route>
      </Routes>
      </Container>
     
    </HashRouter>

    
  );
}

export default App;
