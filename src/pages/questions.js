import React from "react"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <h2>Questions</h2>
      <h4>Q: Does it cost anything?</h4>
      <p>A: No.</p>
      <h4>Q: Are you trying to save the world?</h4>

    </CenteredColumn>
  </Layout>
);
export default NamedDefault;