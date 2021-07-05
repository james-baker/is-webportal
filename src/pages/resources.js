import React from "react"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <h2>Resources</h2>
      <h3>Relational Practices</h3>
      <h3>Friends of Intentional Society</h3>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;