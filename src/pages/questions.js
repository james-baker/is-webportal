import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => {
  const qas = [["Does this cost any money?",
               "No"],
              ["Are you trying to save the world?",
               "reducing harm etc"],
              ["question 3",
               "answer 3"]];
  return <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Common Questions</Typography>
      {qas.map((qa) => <>
        <h4>Q: {qa[0]}</h4>
        <p>A: {qa[1]}</p>
      </>)}

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/resources">Resources</Link>
      </div>
    </CenteredColumn>
  </Layout>
};
export default NamedDefault;