import React from "react"
import { Link } from "gatsby"

const NamedDefault = () => (
  <div>
    <h2>Orientation Calls</h2>
    <p>These are introductory sessions for newcomers who are curious about Intentional Society. All 
      are welcome, and will hear a 20-minute tour of the design, structure, and culture of 
      the community. Interactive Q&amp;A follows. Using a video camera and microphone is encouraged.
    </p>
    <p>These currently happen on Saturdays.&nbsp;
      <a href="https://us02web.zoom.us/meeting/register/tZMtc-uuqTMuE90wzdx_2Qi_S_UV-qVSepCl">Click 
      here to register</a> for the next orientation on <b>Saturday July 10th, 1:00-1:55pm Pacific Daylight Time (4pm Eastern, 8pm UTC)</b>.
    </p>

    <h2>General Sessions</h2>
    <p>These meetings are the main heartbeat of Intentional Society. 
      Starting July 11th, our Q3 agenda includes community-level relating and learning practices and also
      self-organized exploratory voyages in small groups.
      General sessions currently happen on Sundays, 1:00-2:45pm Pacific Daylight Time (4pm Eastern, 8pm UTC).
      Meeting link provided after orientation.
    </p>

    <h2>Meta Meetings</h2>
    <p>This is a members-only volunteer working group providing steering, strategy, and governance support. 
      These currently happen on Mondays, 9am Pacific Daylight Time (Noon Eastern, 4pm UTC).
    </p>

    Our <Link to="/history">historical timeline</Link> contains a record of these activities.
  </div>
)
export default NamedDefault;