import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Autocomp from '../components/Autocomplete'
import { connect } from 'react-redux';
// import Autocomp from '../components/Autocomplete'

const MenuDisplay = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Filter
      </Button>
      <Autocomp/>
      
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        
        <MenuItem onClick={handleClose}>New Cases</MenuItem>
        <MenuItem onClick={handleClose}>Total Case</MenuItem>
        <MenuItem onClick={handleClose}>Total Deaths</MenuItem>
        <MenuItem onClick={handleClose}>New Deaths</MenuItem>
      </Menu>
 
    </div>
  );
}

export default  MenuDisplay;