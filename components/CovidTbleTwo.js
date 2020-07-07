import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
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
import {getCovidData} from '../store/actions/index'
import Covid from '../pages/Covid';



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

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}


function Row(props) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const classesPage = useStyles();
  return (
    <React.Fragment>
       
      <TableRow className={classes.root}>
        <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => console.log(row.country)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                        {row.country}
                        </TableCell>
        
                      <TableCell align={'right'}>
                      {!row.cases.new ? 'NP or 0'  : row.cases.new }
                      </TableCell>
                      <TableCell  align={'right'}>
                      {!row.cases.total ? 'NP or 0'  : row.cases.total }
                      </TableCell>
                      <TableCell align={'right'}>
                      {!row.deaths.new ? 'NP or 0'  : row.deaths.new }
                      </TableCell>
                      <TableCell  align={'right'}>
                      {!row.deaths.total ? 'NP or 0'  : row.deaths.total }
                      </TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Data by Date/ one week data analyzed 
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Cases</TableCell>
                    <TableCell align="right">NewCases</TableCell>
                    <TableCell align="right">Tested</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
     
   
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 'Frozen yoghurt', 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

const  CollapsibleTable = ({
    covidData
    , getCovidData
}) => {
    useEffect(()=>{
        getCovidData()
    },[])
    console.log(covidData)
    
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
            <Row key={uuidv4()} row={row} />
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

}
const mapStateToProps = (state) =>({
    covidData : state.covid.data

})
export default connect(mapStateToProps, {getCovidData}) (CollapsibleTable);