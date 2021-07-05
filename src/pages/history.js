import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <h2>History</h2>
      <Link to="/thecall">The original manifesto</Link>

      <h2>Historical Timeline</h2>
      <ul>
        <li><div>2021-06-27 General Session 2.12 - T-Group</div></li>
        <li><div>2021-06-21 Meta Meeting #8</div></li>
        <li><div>2021-06-20 General Session 2.11 - T-Group</div></li>
        <li><div>2021-06-14 Meta Meeting #7</div></li>
        <li><div>2021-06-13 General Session 2.10 - Redesign + Planning + The Wave</div></li>
        <li><div>2021-06-12 Informational Session</div></li>
        <li><div>2021-06-07 Meta Meeting #6</div></li>
        <li><div>2021-06-06 General Session 2.9 - Voyage Retrospective</div></li>
        <li><div>2021-05-31 Meta Meeting #5</div></li>
        <li><div>2021-05-30 General Session 2.8 - Inquiry Spiraling</div></li>
        <li><div>2021-05-24 Meta Meeting #4</div></li>
        <li><div>2021-05-23 General Session 2.7 - One Word Turns + Voyaging 4/4</div></li>
        <li><div>2021-05-17 Meta Meeting #3</div></li>
        <li><div>2021-05-16 General Session 2.6 - Voyaging 3/4</div></li>
        <li><div>2021-05-15 Informational Session</div></li>
        <li><div>2021-05-10 Meta Meeting #2</div></li>
        <li><div>2021-05-09 General Session 2.5 - Voyaging 2/4 + Noticing Game</div></li>
        <li><div>2021-05-08 Informational Session</div></li>
        <li><div>2021-05-03 Meta Meeting #1</div></li>
        <li><div>2021-05-02 General Session 2.4 - Voyaging 1/4 + Empathy Circling</div></li>
        <li><div>2021-05-01 Informational Session</div></li>
        <li><div>2021-04-25 General Session 2.3 - Boat-building part 2</div></li>
        <li><div>2021-04-24 Informational Session</div></li>
        <li><div>2021-04-18 General Session 2.2 - Boat-building part 1</div></li>
        <li><div>2021-04-11 General Session 2.1 - Structural redesign</div></li>
        <li><div>2021-04-10 Informational Session</div></li>
        <li><div>2021-03-27 General Session 1.11 - Adult Development intro part 2</div></li>
        <li><div>2021-03-26 Informational Session</div></li>
        <li><div>2021-03-21 General Session 1.10 - Adult Development intro part 1</div></li>
        <li><div>2021-03-21 Informational Session</div></li>
        <li><div>2021-03-14 General Session 1.9 - Collective Presencing</div></li>
        <li><div>2021-03-07 General Session 1.8 - Authentic Relating, Hotseat</div></li>
        <li><div>2021-03-07 Informational Session</div></li>
        <li><div>2021-02-28 General Session 1.7 - Glass Bead Game</div></li>
        <li><div>2021-02-28 Informational Session</div></li>
        <li><div>2021-02-21 General Session 1.6 - Empathy Circling</div></li>
        <li><div>2021-02-21 Informational Session</div></li>
        <li><div>2021-02-14 General Session 1.5 - DEI</div></li>
        <li><div>2021-02-07 General Session 1.4 - examining avoidance</div></li>
        <li><div>2021-02-07 Informational Session</div></li>
        <li><div>2021-01-31 General Session 1.3 - I seem, we seem</div></li>
        <li><div>2021-01-31 Informational Session</div></li>
        <li><div>2021-01-24 General Session 1.2 - being with you, I notice</div></li>
        <li><div>2021-01-24 Informational Session</div></li>
        <li><div>2021-01-17 General Session 1.1 - sensing and seeking</div></li>
        <li><div>2021-01-17 Informational Session</div></li>
        <li><div>2021-01-10 Informational Session</div></li>
        <li><div>2020-12-27 Informational Session</div></li>
        <li><div>2020-12-19 <Link to="thecall/">Call</Link> text revised</div></li>
        <li><div>2020-12-05 Website deployed</div></li>
        <li><div>2020-11-10 Domain name registered</div></li>
      </ul>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;