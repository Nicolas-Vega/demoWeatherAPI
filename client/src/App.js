import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Buttons from './components/Buttons'
import Location from './components/Location'
import Current from './components/Current'
import Forecast from './components/Forecast'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const renderContent = (selected) => {
  switch(selected) {
    case "Location":
      return(<Location />);
    case "Current":
      return(<Current />);
    case "Forecast":
      return(<Forecast />);
    default:
      return(<div>Ups!</div>);
  }
}

function App() {
  const [selected, setSelected] = useState("Location");
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Demo Weather by <b><i>Nicolas Vega</i></b>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
            <List>
              <Buttons setSelected={setSelected} />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
              {renderContent(selected)}
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
