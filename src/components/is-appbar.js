import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main
  },
   menuButton: {
    color: "inherit"
  },
  title: {
    flexGrow: 1,
    color: "inherit"
  },
  /* testButton: {
    color: "inherit"
  }, */
}));

const NamedDefault = () => {
  const classes = useStyles();

  return (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h5" className={classes.title}>
        Intentional Society
      </Typography>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      {/* <Button className={classes.testButton}>button</Button> */}
    </Toolbar>
  </AppBar>
  );
};
export default NamedDefault;