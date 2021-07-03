import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "fontsource-open-sans"
import "./layout.module.css"
import CssBaseline from '@material-ui/core/CssBaseline';
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

const NamedDefault = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const classes = useStyles();

  return <>
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description}/>
  </Helmet>
  <CssBaseline />
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        News
      </Typography>
      <Button className={classes.testButton}>test</Button>
    </Toolbar>
  </AppBar>
  {children}
  </>
}
export default NamedDefault;