import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
    <p>We are a community of seekers and friends. We are a distributed community,
      connected by weekly videoconference and other electronic channels. Connecting
      and reflecting in relationship is our gateway to self-development and greater
      awareness. Some weeks, we learn and play collectively around the “campfire” to
      make sense of the world and our part in it. Other times, we set out in small
      group “boat” voyages to explore and expand our edges.
    </p>

    <p>There's a lot of theory behind <Link to="/what-we-do">what we do</Link>.
      But it’s also what we’ve known and done for millenia
      as humans, in villages, tribes, and crews of belonging and support. We thrive
      as social, relational beings, growing in small groups of high trust - even as
      we’re faced with global challenges that demand coordination across humanity to meet.
    </p>

    <p>Our values...</p>

    </CenteredColumn>
  </Layout>
);
export default NamedDefault;