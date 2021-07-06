import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import ButtondownSignup from "../components/buttondownsignup"
import IsHr from "../components/is-hr"

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
      <IsHr />
      <p>We meet together to become our best and biggest selves - to practice being 
        the people we want to be, in more contexts and with more ease and freedom. In  
        doing so, we also then increase our capacity to love and serve both ourselves and humanity.</p>

      <p>Intentional Society is simply people in process, being and doing together&#8230; 
         and there's also a lot more to the complete picture, which is still itself in the 
         process of being discovered. Read on to learn more about <Link to="/who-we-are">who we 
        are</Link> and <Link to="/what-we-do">what we do</Link>, and how 
        to <Link to="/get-involved">get involved</Link> if and when you feel so called.
      </p>
      <IsHr />
      <ButtondownSignup></ButtondownSignup>
    </CenteredColumn>
  </Layout>
</>
export default NamedDefault;