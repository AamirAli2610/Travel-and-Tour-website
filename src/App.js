
import './App.css';




import {BrowserRouter, Routes, Route} from "react-router-dom"
import Places from './Components/places/Places';
import Home from './Components/Home/Home';
import Programs from './Components/programs/Programs';
import PageNotFound  from './Components/404';


function App() {
  return (
    <div >

      <BrowserRouter>

      <Routes >
          <Route  path='/' element ={ <Home />}/>
        <Route path='/places' element ={<Places />} />
        <Route path='/destinations' element ={<Places />} />
        <Route path='/programs' element ={<Programs /> } />




     {/* 404 Route */}
     <Route path='*' element ={ <PageNotFound  />} />
        
      
      </Routes>





     
   
      </BrowserRouter>







      
    </div>
  );
}

export default App;
