import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import * as GlobalCSS from "../styles/global.module.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: theme.palette.secondary.main,
    /* backgroundColor: theme.palette.primary.main, */
/*     backgroundImage: "linear-gradient(to right bottom, #2b70c3, #007dc1, #0087b9, #0090ad, #2896a0, #4d9fa0, #69a8a2, #81b1a6, #9cc1b6, #b5d0c7, #cfe0d9, #e8f0ec)", */
    backgroundImage: "radial-gradient(circle, #2b70c3, #007dc1, #0087b9, #0090ad, #2896a0, #36999f, #429c9e, #4d9f9d, #40a0a5, #31a1af, #1fa2b8, #06a2c2)",
  },
   menuButton: {
    color: "inherit",
    [theme.breakpoints.up('lg')]: { display: 'none', },
  },
  title: {
    flexGrow: 1,
    color: "inherit",
  },
  navButtons3: {
    textTransform: "inherit",
    color: "inherit",
    [theme.breakpoints.down('xs')]: { display: 'none', },
  },
  navButtons6: {
    textTransform: "inherit",
    color: "inherit",
    [theme.breakpoints.down('md')]: { display: 'none', },
  },
  navMenu3: {
    [theme.breakpoints.up('sm')]: { display: 'none', },
  },
  navMenu6: {
    [theme.breakpoints.up('lg')]: { display: 'none', },
  },
}));

const NamedDefault = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <AppBar position="fixed" elevation={0} className={classes.appBar}>
    <Toolbar>
      <Typography variant="h5" className={classes.title}>
        <Link to="/" className={GlobalCSS.nostyleLink}>Intentional Society</Link>
      </Typography>
      <Button className={classes.navButtons3} component={Link} to="/who-we-are">Who We Are</Button>
      <Button className={classes.navButtons3} component={Link} to="/what-we-do">What We Do</Button>
      <Button className={classes.navButtons3} component={Link} to="/get-involved">Get Involved!</Button>
      <Button className={classes.navButtons6} component={Link} to="/history">History</Button>
      <Button className={classes.navButtons6} component={Link} to="/questions">Questions?</Button>
      <Button className={classes.navButtons6} component={Link} to="/resources">Resources</Button>
      <IconButton aria-controls="top-nav-menu" aria-haspopup="true" aria-label="menu"
                  className={classes.menuButton} onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="top-nav-menu"
        className={classes.navMenu6}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.navMenu3} component={Link} to="/who-we-are" onClick={handleClose}>Who We Are</MenuItem>
        <MenuItem className={classes.navMenu3} component={Link} to="/what-we-do" onClick={handleClose}>What We Do</MenuItem>
        <MenuItem className={classes.navMenu3} component={Link} to="/get-involved" onClick={handleClose}>Get Involved!</MenuItem>
        <MenuItem component={Link} to="/history" onClick={handleClose}>History</MenuItem>
        <MenuItem component={Link} to="/questions" onClick={handleClose}>Questions?</MenuItem>
        <MenuItem component={Link} to="/resources" onClick={handleClose}>Resources</MenuItem>
      </Menu>
    </Toolbar>
  </AppBar>
  );
};
export default NamedDefault;