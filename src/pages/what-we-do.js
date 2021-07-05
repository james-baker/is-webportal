import React from "react"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <h2>What we do</h2>

      <p>At the surface layer, right now we primarily talk with one another on video calls.
        Our general sessions are on Sundays, for 1 hour 45 minutes - about the length of 
        an average movie. We greet each other and check in, get set with the day's agenda, 
        spend about an hour on our main event, take some meta time with zoomed-out perspective,
        and check out with our takeaways.
      </p>

      <p>Socially, what we're doing together is authoring a developmental community of practice 
        with a culture of expanded awareness. </p>

      <p>And to go down to the essential model</p>Combining adult development and relational practices
Adult Development Theory
Relational Practices
Social/Actionable 2x2
FoW

    </CenteredColumn>
  </Layout>
);
export default NamedDefault;