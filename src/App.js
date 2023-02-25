import Layout from './component/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Layout/Home';
import About from './component/Layout/About';
import Contact from './component/Layout/contact';

function App() {
  return (<>
  <Routes>
    <Route path='/' element ={<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path = '/about' index element = {<About/>}/>
      <Route path = '/contact' index element = {<Contact/>}/>
    </Route>
  </Routes>
  </>

   
  );
}

export default App;
