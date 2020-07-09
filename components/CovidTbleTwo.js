import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import { Fade, Loop } from 'react-animation-components'

import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {connect} from 'react-redux'
import {getCovidData, processData} from '../store/actions/index'

import ChartBar from '../components/chartOne/ChartBar'


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });



function Row(props) {
 

  const { row, processData, loading } = props;
  const [open, setOpen] = React.useState(false);
  
  const classes = useRowStyles();
  const classesPage = useStyles();
 
  const handleArrow = (data) =>{
   
    setOpen(!open)
    
    processData(data)
   
  } 
  
  const Gitchart = () => {
    return (
      <>
  <div style={{height: 200}}>
  <ChartBar  />
  </div>
      </>
    )
    }

  return (
    <React.Fragment>
       
      <TableRow className={classes.root}>
        <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => handleArrow(row.country)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                        {row.country}
                        </TableCell>
        
                      <TableCell align={'right'}>
                     <span className='flash' style={!row.cases.new ?  {color: 'black'} : {color: 'red'}}>
                          
                           
                            {!row.cases.new ? 'NP or 0'  : row.cases.new }
                         
                       </span> 
                      </TableCell>
                      <TableCell  align={'right'}>
                      {!row.cases.total ? 'NP or 0'  : row.cases.total }
                      </TableCell>
                      <TableCell align={'right'}>
                     <span className='flash' style={!row.cases.new ?  {color: 'black'} : {color: 'red'}}>{!row.deaths.new ? 'NP or 0'  : row.deaths.new }</span> 
                      </TableCell>
                      <TableCell  align={'right'}>
                      {!row.deaths.total ? 'NP or 0'  : row.deaths.total }
                      </TableCell>
        
      </TableRow>
  
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout={{appear:500, enter: 500, exit: 500}} unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Calander chart Total Death {row.country}
                
              </Typography>
   <Gitchart />
  
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> 
     
   
    </React.Fragment>
  );
}




const  CollapsibleTable = ({
  loading,
    covidData
    , getCovidData,
    processData,
   
}) => {
    useEffect(()=>{
        getCovidData()
    },[])
    
    
    const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};
    
  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Country</TableCell>
            <TableCell align="right">New Cases</TableCell>
            <TableCell align="right">Total Cases</TableCell>
            <TableCell align="right">New Deaths </TableCell>
            <TableCell align="right">Total Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {covidData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <Row key={uuidv4()} processData={processData} loading={loading} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <TablePagination
     rowsPerPageOptions={[10, 25, 100]}
     component="div"
     count={covidData.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onChangePage={handleChangePage}
     onChangeRowsPerPage={handleChangeRowsPerPage}
   />
 </>
  );
}
CollapsibleTable.propTypes = {
    getCovidData: PropTypes.func.isRequired,
    covidData: PropTypes.array,
    processData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,


}
const mapStateToProps = (state) =>({
    covidData : state.covid.data,
  
    loading : state.deathByDay.loading

 

})
export default connect(mapStateToProps, {getCovidData, processData}) (CollapsibleTable);