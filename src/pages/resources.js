import React from "react"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <h2>Resources</h2>
      <h3>Relational Practices</h3>
      <h4>Authentic Relating</h4>
      <h4>Collective Presencing</h4>
      <h4>Empathy Circling</h4>
      <h4>Circling</h4>
      <h4>T-group</h4>
      <h4>Glass Bead Game</h4>
      <h4>Inquiry Spiraling</h4>
      <h4>Agile Retrospectives</h4>
      <h3>Friends of Intentional Society</h3>
      <h4>Starter Cultures</h4>
      <h4>Microsolidarity</h4>
      <h4>The Bridge Community</h4>
      <h4>Enspiral</h4>
      <h4>Sacred Ground</h4>
      <h4>Building Belonging</h4>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;