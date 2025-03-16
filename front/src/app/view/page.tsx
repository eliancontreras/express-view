'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../redux/store';
import { fetchCoins } from '../redux/coinsSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  const coins = useSelector((state: RootState) => state.coins.coins);
  const loading = useSelector((state: RootState) => state.coins.loading);
  const error = useSelector((state: RootState) => state.coins.error);
  console.log(loading);

  return (
    <div>
      <h1>This is the view page</h1>
      {/* <ul> */}
      {loading === true && (<Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>)}
      {coins.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">No</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price&nbsp;(g)</TableCell>
                <TableCell align="right">Market Cap&nbsp;(g)</TableCell>
                <TableCell align="right">Total Volum&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(coins.map((coin, index) => (
                <TableRow key={index}>
                  <TableCell align="right">{index + 1}</TableCell>
                  <TableCell align="right">{coin.name}</TableCell>
                  <TableCell align="right">{coin.price}</TableCell>
                  <TableCell align="right">{coin.market_cap}</TableCell>
                  <TableCell align="right">{coin.total_volume}</TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {/* // </ul> */}
      <p>{error}</p>
    </div >
  )
}

export default Page;
