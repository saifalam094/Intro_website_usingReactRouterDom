// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './components/content/Home.js'
import About from './components/content/About';
import Blog from './components/content/Blog.js';
import Contact from './components/content/Contact';
import Gallery  from './components/content/Gallery';
import Oldblog from './components/content/Oldblog'
import Newblog from './components/content/Newblog'
import Notfound from './components/content/Notfound'






function App() {
  return (
    <div >
    <Header/>
    <Navbar/>
     <Routes>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='blogs' element={<Blog/>}>
        <Route path='oldblog' element={<Oldblog/>}/>
        <Route path='newblog' element={<Newblog/>}/>
      </Route>
     
 
   
    <Route path='gallery' element={<Gallery/>}/>
    <Route path='*' element={<Notfound/>}/>

     </Routes>
    </div>
  );
}

export default App;
