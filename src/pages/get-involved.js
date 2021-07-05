import React from "react"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import ButtondownSignup from "../components/buttondownsignup"
import EventsList from "../components/events-list"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <ButtondownSignup/>
      <EventsList/>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;