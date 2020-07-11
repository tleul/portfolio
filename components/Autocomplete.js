
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import data from '../public/countries'

const  Autocomp = () => {
  return (
    <>
    <div className='autocomplete-box'>
         <div style={{ width: 200, }}>
      <Autocomplete
     
        freeSolo
        options={data.map((item) => item)}
        renderInput={(params) => (
          <TextField {...params}  label="Look up Country" margin="normal" onChange={()=>console.log('hh')}variant="outlined" />
        )}
      />
    
    </div>
    <div className='autocomplete-search'>
    <button ><img src='./search.svg' /></button>
    </div>
    </div>
 
    </>
  );
}

export default Autocomp;
