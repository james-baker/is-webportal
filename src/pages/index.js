import React from "react"
import Layout from "../components/layout"
import GlobalCSS from "../styles/global.module.css"

export default () => (
  <Layout>
    <div style={{ height: "33vh" }}></div>
    <div className={GlobalCSS.centerChildren}>
      <div>It starts with intention and awareness.</div>
      <div>Coming soon...</div>
    </div>
  </Layout>
)