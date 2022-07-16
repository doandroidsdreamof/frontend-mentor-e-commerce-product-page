import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider';
import  AddCart  from './components/AddCart';
import DarkModeCard from './components/DarkModeCard';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [show, setShow] = useState(false);
  const handleTheme = () => {
      setIsDarkMode(!isDarkMode) 
   
  }
 
  const showCart = () =>{
    setShow(!show);
  }



  return (
  <div className={isDarkMode ? 'bg-color-black min-h-screen     ' : ' bg-color-white min-h-screen  '}>
   <Header theme={isDarkMode} handleMode={handleTheme} click={show} handleClick={showCart} />
   <div className="grid grid-cols-1 lg:justify-center   lg:items-center   lg:grid-cols-2 ">
   <Slider  theme={isDarkMode} handleMode={handleTheme}  />
   <AddCart theme={isDarkMode} handleMode={handleTheme} click={show} handleClick={showCart}  />
 

   </div>

    </div>
  );
}

export default App;
