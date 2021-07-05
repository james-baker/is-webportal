import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h5" className={classes.title}>
        Intentional Society
      </Typography>
      <IconButton aria-controls="top-nav-menu" aria-haspopup="true" aria-label="menu"
                  className={classes.menuButton} onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="top-nav-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
        <MenuItem component={Link} to="/who-we-are" onClick={handleClose}>Who We Are</MenuItem>
        <MenuItem component={Link} to="/what-we-do" onClick={handleClose}>What We Do</MenuItem>
        <MenuItem component={Link} to="/get-involved" onClick={handleClose}>Get Involved!</MenuItem>
        <MenuItem component={Link} to="/history" onClick={handleClose}>History</MenuItem>
        <MenuItem component={Link} to="/questions" onClick={handleClose}>Questions?</MenuItem>
        <MenuItem component={Link} to="/resources" onClick={handleClose}>Other Resources</MenuItem>
      </Menu>
    </Toolbar>
  </AppBar>
  );
};
export default NamedDefault;