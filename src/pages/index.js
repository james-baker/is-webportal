import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <center>
        PREVIEW BRANCH REDESIGN-202107<br/>
        (Words over hero image:)<br/>
        becoming your biggest self<br/>
        growing with like-minded friends<br/>
        awareness of self and system<br/>
        integrating acceptance and intention<br/><br/><br/>
      </center>
      <h3>What is Intentional Society?</h3>

      <p>The short answer is,
      <blockquote>&#8220;a community for people who want to grow.&#8221;</blockquote></p>

      <p>That's it - just people, being and doing together.</p>
      <p>We are building it, 
        learn about <Link to="/who-we-are">who we are</Link>
        learn about <Link to="/what-we-do">what we do</Link>
      </p>
      <p>if and when your curiosity is piqued, the door is open for you to 
      <Link to="/get-involved">get involved</Link>.</p>
    
    </CenteredColumn>
  </Layout>
)
export default NamedDefault;