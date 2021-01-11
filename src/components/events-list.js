import React from "react"

export default () => (
  <div>
    <h3>Upcoming Events</h3>
    <ul>
      <li>January 17th, 1pm Pacific - Informational Session for newcomers</li>
        <ul>
          <li><a href="https://us02web.zoom.us/meeting/register/tZ0tc-mtpjotGNNrQEzK41XdHnIYCxd10GCI">Agenda and registration</a></li>
        </ul>
      <li>January 17th, 2pm Pacific - General Session for all involved participants</li>
      <ul>
        <li><a href="https://us02web.zoom.us/meeting/register/tZwkcuqqpjMsH9ZAsWQUBkqCbOQ-6mGbFC9q">Agenda and registration</a></li>
      </ul>
    </ul>
    <h3>Past Events</h3>
    <ul>
      <li><div style={{textDecoration: "line-through"}}>Informational Session January 10th</div></li>
      <li><div style={{textDecoration: "line-through"}}>Informational Session December 27th</div></li>
    </ul>
  </div>
)