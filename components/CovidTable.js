import React,{useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {getCovidData} from '../store/actions/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
const columns = [
  { id: 'country', label: 'Country', minWidth: 170 },
  { id: 'cases.new', label: 'New Cases', minWidth: 100 },
  {
    id: 'totalCases',
    label: 'Total Cases',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'newdeath',
    label: 'New Deaths',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'totalDeaths',
    label: 'Total Deaths',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];





const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const  StickyHeadTable = ({getCovidData, covidData})  => {
    useEffect(() => {
        
      getCovidData()
    }, [])
 
  const classes = useStyles();
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
      <button onClick={()=> getCovidData()}>Get Data</button>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                 
                        <TableCell
                        key={column.id}
                        align={column.id == 'country' ? 'left' : 'right'}
                        style={{ minWidth: 150}}
                      >
                       {column.label}
                      </TableCell>
                      )
                
              
                )}
            </TableRow>
          </TableHead>
          <TableBody>
            {covidData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dataCov) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                
                      <TableCell align={'left'}>
                      {dataCov.country}
                      </TableCell>
                      <TableCell align={'right'}>
                      {!dataCov.cases.new ? 'NP or 0'  : dataCov.cases.new }
                      </TableCell>
                      <TableCell  align={'right'}>
                      {!dataCov.cases.total ? 'NP or 0'  : dataCov.cases.total }
                      </TableCell>
                      <TableCell align={'right'}>
                      {!dataCov.deaths.new ? 'NP or 0'  : dataCov.deaths.new }
                      </TableCell>
                      <TableCell  align={'right'}>
                      {!dataCov.deaths.total ? 'NP or 0'  : dataCov.deaths.total }
                      </TableCell>
                     
                 
                 
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100], { value: -1, label: 'All' }}
        component="div"
        count={covidData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
StickyHeadTable.propTypes = {
    getCovidData: PropTypes.func.isRequired,
    covidData: PropTypes.array,

}
const mapStateToProps = (state) =>({
    covidData : state.covid.data

})
export default connect(mapStateToProps, {getCovidData}) (StickyHeadTable);