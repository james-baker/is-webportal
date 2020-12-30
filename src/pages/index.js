import React from "react"
import { graphql } from "gatsby"
import GlobalCSS from "../styles/global.module.css"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"
import EventsList from "../components/events-list"

export default ({ data }) => (
  <Layout>
    <div style={{ height: "15vh" }}></div>
    <div className={GlobalCSS.centerMe}
      style={{ minWidth: "300px", maxWidth: "760px", padding: "20px" }}>
      <div dangerouslySetInnerHTML={{__html: data.pitch.childMarkdownRemark.html}}></div>
      <div className={GlobalCSS.centerMe} style={{ marginTop: "40px", marginBottom: "40px", minWidth: "300px", maxWidth: "500px"}}><ButtondownSignup/></div>
      <EventsList/>
      <div style={{ marginTop: "100px"}}>Written by <a href="https://www.bakejam.com">James</a>, December 2020.</div>
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