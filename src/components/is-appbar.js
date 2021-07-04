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
      <IconButton aria-controls="simple-menu" aria-haspopup="true" aria-label="menu"
                  className={classes.menuButton} onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/thecall" onClick={handleClose}>item 1</MenuItem>
        <MenuItem component={Link} to="/" onClick={handleClose}>item 2</MenuItem>
        <MenuItem component={Link} to="/" onClick={handleClose}>item 3</MenuItem>
      </Menu> 
    </Toolbar>
  </AppBar>
  );
};
export default NamedDefault;