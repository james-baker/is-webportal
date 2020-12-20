import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import GlobalCSS from "../styles/global.module.css"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"

export default ({ data }) => (
  <Layout>
    <div style={{ height: "15vh" }}></div>
    <div className={GlobalCSS.centerMe}
      style={{ minWidth: "300px", maxWidth: "760px", padding: "20px" }}>
      <div dangerouslySetInnerHTML={{__html: data.pitch.childMarkdownRemark.html}}></div>
      <div className={GlobalCSS.centerMe} style={{ marginTop: "40px", marginBottom: "40px", minWidth: "300px", maxWidth: "500px"}}><ButtondownSignup/></div>
      <div><b>NEW</b> Info Session December 27th! <a href="https://us02web.zoom.us/meeting/register/tZAqcuiprzgoH9Gs5bbMETFkZkmVd_DzpEL3">RSVP Here.</a></div>
      <div style={{ marginTop: "100px"}}>Written by <Link to="https://www.bakejam.com">James</Link>, December 2020.</div>
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