import React from "react"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Common Questions</Typography>
      <h4>Q: Does this cost anything?</h4>
      <p>A: No.</p>
      <h4>Q: Are you trying to save the world?</h4>
      reducing harm
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;