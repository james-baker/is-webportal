import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import ButtondownSignup from "../components/buttondownsignup"

const NamedDefault = ({ data }) => <>
  <Layout>
    <div style={{ display: "grid" }}>
      <StaticImage src="../../static/images/bg/top53.jpg" layout="fullWidth" position="absolute" alt=""
                  style={{ gridArea: "1/1", height: "60vh"}}/>
      <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center", // This centers the other elements inside the hero component
            display: "grid",
          }}
        >
          <Typography variant="h5" style={{ color: "#FFFFFF"}}>
            <p style={{marginLeft:"-8vw"}}>becoming your biggest self</p>
            <p style={{marginLeft:"5vw"}}>growing with like-minded friends</p>
            <p style={{marginLeft:"-3vw"}}>awareness of self and system</p>
            <p style={{marginLeft:"8vw"}}>integrating acceptance and intention</p><br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;
          </Typography>
        </div>
    </div>
    <CenteredColumn>
      <p>Intentional Society is a community for people who want to grow.</p>

      <p>We meet together to become our best and biggest selves, and thus to grow our capacity 
        to love and serve both ourselves and humanity.</p>

      <p>That's it - Intentional Society is made of people, being and doing together. 
        ... and there's also a lot more to the story. Read on to learn more about <Link to="/who-we-are">who we 
        are</Link> and <Link to="/what-we-do">what we do</Link>, and how 
        to <Link to="/get-involved">get involved</Link> if and when you feel so called.
      </p>
      <ButtondownSignup></ButtondownSignup>
    </CenteredColumn>
  </Layout>
</>
export default NamedDefault;