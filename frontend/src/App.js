// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Story from './components/Story';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    {/* <Story/> */}
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
