import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <div dangerouslySetInnerHTML={{__html: data.pitch.childMarkdownRemark.html}}></div>
    </CenteredColumn>
  </Layout>
)
export default NamedDefault;

export const query = graphql`
  query {
    pitch: file(relativePath: { eq: "md/homepage-pitch.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`