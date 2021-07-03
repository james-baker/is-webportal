import React from "react"
import { graphql, Link } from "gatsby"
import * as GlobalCSS from "../styles/global.module.css"
import Layout from "../components/layout"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "10vh" }}></div>
    <div className={GlobalCSS.centerMe} style={{ minWidth: "300px", maxWidth: "760px", padding: "20px" }}>
      <div dangerouslySetInnerHTML={{__html: data.thecall.childMarkdownRemark.html}}></div>
      <Link to="/">Click here</Link> if you're interested in opportunities to get involved or hearing more.
      <div style={{ marginTop: "100px"}}>Written by <a href="https://www.bakejam.com">James</a>, December 2020.</div>
    </div>
  </Layout>
)
export default NamedDefault;

export const query = graphql`
  query {
    thecall: file(relativePath: { eq: "md/thecall.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`