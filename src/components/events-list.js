import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h3>Upcoming Events</h3>
    <ul>
      <li>January 24th, 11:30am Pacific - Informational Session for newcomers</li>
      <ul>
        <li><a href="https://us02web.zoom.us/meeting/register/tZcufumqqDsoGNe4VXWGE2FMHa8QxcpHhR88">Agenda and open registration</a></li>
      </ul>
      <li>January 24th, 1pm Pacific - General Session for all involved participants</li>
      <ul>
        <li>Introductory session is prerequisite (same day is okay). Meeting detail distributed via newsletter.</li>
      </ul>
    </ul>
    <h3>Past Timeline</h3>
    <ul>
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