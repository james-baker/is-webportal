import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "./layout.module.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ISAppBar from "./is-appbar";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

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
  `);
  const classes = useStyles();

  return <>
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description}/>
  </Helmet>
  <CssBaseline/>
  <ISAppBar/>
  <div className={classes.offset} /> {/* one AppBar's worth of space */}
  {children}
  </>
}
export default NamedDefault;