import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Headers';
import Content from './components/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL+ '/assets/island3.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
