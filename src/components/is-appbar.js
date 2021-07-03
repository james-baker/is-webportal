import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main
  },
   menuButton: {
    color: "inherit"
  },
  title: {
    color: "inherit"
  },
  testButton: {
    color: "inherit"
  },
}));

const NamedDefault = () => {
  const classes = useStyles();

  return (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Title text
      </Typography>
      <Button className={classes.testButton}>button</Button>
    </Toolbar>
  </AppBar>
  );
};
export default NamedDefault;