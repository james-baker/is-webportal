import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h3>Upcoming Events</h3>
    <ul>
      <li>January 31st, 11:00-11:55am Pacific (2pm Eastern) - Informational Session for newcomers</li>
      <ul>
        <li><a href="https://us02web.zoom.us/meeting/register/tZUvcO6prDsiHNLQomdPqodaNTSgou4kzYaW">Agenda and open registration</a></li>
      </ul>
      <li>January 31st, 1:00-2:30pm Pacific (4pm Eastern) - Relational Practices Session</li>
      <ul>
        <li>Introductory session is prerequisite (same day is okay). Meeting link distributed internally.</li>
      </ul>
    </ul>
    <h3>Past Timeline</h3>
    <ul>
      <li><div>2021-01-24 General Session</div></li>
      <li><div>2021-01-24 Informational Session</div></li>
      <li><div>2021-01-17 General Session</div></li>
      <li><div>2021-01-17 Informational Session</div></li>
      <li><div>2021-01-10 Informational Session</div></li>
      <li><div>2020-12-27 Informational Session</div></li>
      <li><div>2020-12-19 <Link to="thecall/">Call</Link> text revised</div></li>
      <li><div>2020-12-05 Website deployed</div></li>
      <li><div>2020-11-10 Domain name registered</div></li>
    </ul>
  </div>
)