import "./style.css"

import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Spacing, Toolbar, Typography } from '@material-ui/core'; //components u will import from material UI
import { Link, Route, BrowserRouter as Router, Switch } from "react-dom/client";
import React, { useEffect, useState } from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import useStyles, { darkTheme } from './styles';

import Chain from './threejsChain';
import CubeAnimation from './threejsCube.js';
import CubeAnimationNext from './threejsTextCube';
import { Paper } from '@mui/material';
import { Parallax } from 'react-parallax';
import RealCube from './realCube';
import ThreeScene from './threejschat';
import glow from "./glow.png"
import initThreeAnimation from './threejsnodes';

const { getLatestBlockInfo } = require('./cubeAPI.js');
const { getLatestBlockNumber } = require('./blockNumber.js'); 



const Home = () => {

  // const classes = useStyles();
  const [latestBlockNumber, setLatestBlockNumber] = useState(0);
  // const [blockInfo, setBlockInfo] = useState(null);

  // useEffect(() => {
  //   getLatestBlockInfo()
  //   .then((blockInfo) => {
  //     console.log('Latest Block Number home:', blockInfo.blockNumber);
  //     console.log('Latest Block Hash home:', blockInfo.blockHash);
  //     setBlockInfo(blockInfo);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // }, []);
  // const fetchLatestBlockNumber = async () => {
  //   try {
  //     const blockNumber = await getLatestBlockNumber();
  //     setLatestBlockNumber(blockNumber);
  //     console.log("The current block number is", latestBlockNumber);
  //   } catch (error) {
  //     console.error('Error fetching latest block number:', error);
  //   }
  // };
  useEffect(() => {
    const fetchLatestBlockNumber = async () => {
       try {
         const blockNumber = await getLatestBlockNumber();
         setLatestBlockNumber(blockNumber);
         console.log(latestBlockNumber)
       } catch (error) {
         console.error('Error fetching latest block number:', error);
       }
     };
     setInterval(async() => {
       await fetchLatestBlockNumber()
     }, 2*1000)
 })

    return (
     <>
        {/* <ThemeProvider theme={darkTheme}>  */}
        {/* <CssBaseline />  */}
        
        {/* <div className={classes.root1}>  */}
          {/* <div id="home-section">
    
          </div> */}
         
              
              {/* <div>Latest Block Number:{blockInfo.blockNumber}</div> */}
             
              {/* <p>Latest Block Hash: {blockInfo.blockHash}</p> */}
           
       
        {/* </div>  */}
        {/* <div>
            The current block number is {latestBlockNumber}
        </div> */}
        <div className="styles.main">
        The current block number is {latestBlockNumber}
       </div>
      {/* </ThemeProvider> */}
      </>
    )
};

export default Home;
