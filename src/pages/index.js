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
      TODO: initial orientation text

      <p>The short answer is,
      &#8220;a community for people who want to grow.&#8221;</p>

      <p>That's it - Intentional Society is made of people, being and doing together.</p>
      <p>We are building it, ...
        learn about <Link to="/who-we-are">who we are</Link>
        learn about <Link to="/what-we-do">what we do</Link>
      </p>
      <ButtondownSignup></ButtondownSignup>
      <p>if and when your curiosity is piqued, the door is open for you 
        to <Link to="/get-involved">get involved</Link>.</p>
    
    </CenteredColumn>
  </Layout>
</>
export default NamedDefault;