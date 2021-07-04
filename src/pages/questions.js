import React from "react"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      Questions
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;