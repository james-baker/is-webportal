import React from "react"
import GlobalCSS from "../styles/global.module.css"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"

export default ({ data }) => (
  <Layout>
    <div style={{ height: "15vh" }}></div>
    <div className={GlobalCSS.centerMe}
      style={{ minWidth: "300px", maxWidth: "760px", padding: "20px" }}>
      <div dangerouslySetInnerHTML={{__html: data.pitch.childMarkdownRemark.html}}></div>
      <div className={GlobalCSS.centerMe} style={{ marginTop: "50px", marginBottom: "100px", minWidth: "300px", maxWidth: "500px"}}><ButtondownSignup/></div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    pitch: file(relativePath: { eq: "md/homepage-pitch.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`