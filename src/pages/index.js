import React from "react"
import GlobalCSS from "../styles/global.module.css"
import Layout from "../components/layout"
import ButtondownSignup from "../components/buttondownsignup"

export default () => (
  <Layout>
    <div style={{ height: "33vh" }}></div>
    <div className={GlobalCSS.centerChildren}>
      <div>It starts with intention and awareness.</div>
      <div>Coming soon...</div>
      <div className={GlobalCSS.centerMe} style={{ marginTop: "100px", minWidth: "300px", maxWidth: "500px"}}><ButtondownSignup/></div>
    </div>
  </Layout>
)