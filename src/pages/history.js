import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      History
      <Link to="/thecall">The original manifesto</Link>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;