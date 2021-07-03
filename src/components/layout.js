import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "fontsource-open-sans"
import "./layout.module.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import ISAppBar from "./is-appbar";

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

  return <>
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description}/>
  </Helmet>
  <CssBaseline/>
  <ISAppBar/>
  {children}
  </>
}
export default NamedDefault;