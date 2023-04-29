import Header from './components/header';
import './App.css';
import SideBar from './components/SideBar'
import { useState, useEffect } from 'react'; 
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MidSec from './components/MidSec';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  console.log(typeof(windowWidth));
  return (
    <div className="App">
      <Header/> 
       
      <Grid container spacing={2}>
        <Grid item xs={3} className='SideBarDiv'>
         <SideBar/>
        </Grid>
        <Grid item xs={windowWidth>1209?9:12} className='MainSectionDiv'>
           <MidSec/>
        </Grid>
      </Grid>
       
       
    </div>
  );
}

export default App;
