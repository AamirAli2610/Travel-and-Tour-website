
import './App.css';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import Discover from './Components/Discover/Discover';
import Footer from './Components/footer/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Places from './Components/places/Places';
import Home from './Components/Home/Home';
import Programs from './Components/programs/Programs';


function App() {
  return (
    <div >

      <BrowserRouter>
      <Nav />
      <Routes >
          <Route  path='/' element ={ <Home />}/>
        <Route path='/places' element ={<Places />} />
        <Route path='/destinations' element ={<Places />} />
        <Route path='/programs' element ={<Programs /> } />

      
      </Routes>


      <Footer />


     
   
      </BrowserRouter>







      
    </div>
  );
}

export default App;
