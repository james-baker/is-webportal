import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h3>Upcoming Events</h3>
    <ul>
      <li>TBD January 24th</li>
{/*       <li>January 17th, 1pm Pacific - Informational Session for newcomers</li>
        <ul>
          <li><a href="https://us02web.zoom.us/meeting/register/tZ0tc-mtpjotGNNrQEzK41XdHnIYCxd10GCI">Agenda and registration</a></li>
        </ul>
      <li>January 17th, 2pm Pacific - General Session for all involved participants</li>
      <ul>
        <li><a href="https://us02web.zoom.us/meeting/register/tZwkcuqqpjMsH9ZAsWQUBkqCbOQ-6mGbFC9q">Agenda and registration</a></li>
      </ul> */}
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