import React from "react"
import { graphql } from "gatsby"
import * as GlobalCSS from "../styles/global.module.css"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"
import EventsList from "../components/events-list"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "10vh" }}></div>
    <div className={GlobalCSS.centerMe} style={{ minWidth: "300px", maxWidth: "760px", padding: "20px" }}>
      <div dangerouslySetInnerHTML={{__html: data.pitch.childMarkdownRemark.html}}></div>
      <ButtondownSignup/>
      <EventsList/>
    </div>
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