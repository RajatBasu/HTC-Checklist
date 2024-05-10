import logo from './logo.svg';
import './App.css';

import {Typography, colors} from '@mui/material'

function App() {
  return (
    <div> MUI Tutorial
      <Typography variant='h1' sx={{color: 'red'}}>
        Testing Typopgraphy 
      </Typography>
      <h1>
        Dummy text
      </h1>
    </div>
  );
}

export default App;
