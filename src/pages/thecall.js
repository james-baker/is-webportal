import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "10vh" }}></div>
    <CenteredColumn>
      <div dangerouslySetInnerHTML={{__html: data.thecall.childMarkdownRemark.html}}></div>
      <Link to="/">Click here</Link> if you're interested in opportunities to get involved or hearing more.
      <div style={{ marginTop: "100px"}}>Written by <a href="https://www.bakejam.com">James</a>, December 2020.</div>
    </CenteredColumn>
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