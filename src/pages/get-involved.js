import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"
import ButtondownSignup from "../components/buttondownsignup"
import ZoomlinkOrientation from "../components/zoomlink-orientation"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Ways to get involved</Typography>
      <p> </p>
      <Typography variant="h4">Newsletter</Typography>
      <ButtondownSignup/>
      <Typography variant="h4">Orientation Calls</Typography>
      <p>These are introductory sessions for newcomers who are curious about Intentional Society. All 
        are welcome, and will hear a 20-minute tour of the design, structure, and culture of 
        the community. Interactive Q&amp;A follows. Using a video camera and microphone is encouraged.
      </p>
      <p>These currently happen on Saturdays. <ZoomlinkOrientation />
      </p>

      <Typography variant="h4">General Sessions</Typography>
      <p>These meetings are the main heartbeat of Intentional Society. 
        Starting July 11th, our Q3 agenda includes community-level relating and learning practices and also
        self-organized exploratory voyages in small groups.
        General sessions currently happen on Sundays, 1:00-2:45pm Pacific Daylight Time (4pm Eastern, 8pm UTC).
        Meeting link provided after orientation.
      </p>

      <Typography variant="h4">Meta Meetings</Typography>
      <p>This is a members-only volunteer working group providing steering, strategy, and governance support. 
        These currently happen on Mondays, 9am Pacific Daylight Time (Noon Eastern, 4pm UTC).
      </p>

      <p>Our <Link to="/history">historical timeline</Link> contains a record of these activities.</p>

      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/history">History</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;