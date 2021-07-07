import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
    <Typography variant="h3">Who we are</Typography>

      <p>(TODO: Take a fun group photo and add here.)</p>

      <p>We are a community of seekers and friends. We are a geographically distributed
        community, connecting face-to-face via video calls. Connecting and 
        reflecting each other in relationship is our primary gateway to self-development 
        and greater awareness. Some of us have been active in Adult Development circles, 
        some of us have Authentic Relating &amp; Collective Presencing experience, and 
        others have been seeking with the "Sensemaking" scene.
      </p>

      <p>Our values orient around awareness and acceptance as the biggest themes. 
        Awareness means consciousness and attention, means taking the "balcony view" 
        perspective on ourselves and on the people and systems we're intereacting with. 
        Acceptance means facing reality - being able to be with what is, as it is, without 
        deceiving ourselves. From seeing and accepting flows more capacity for compassion, 
        empathy, and our ability to hold our intentions as objects of reflection.
      </p>

      <p>To "fit in" with Intentional Society's culture one needs first and foremost a 
        desire to grow. It also takes an attitude of openness, 
        humility, and of respect toward every human and the things that we can learn from 
        interacting with them. We don't teach each other as instructors or lecturers, but 
        rather reflect our experience of being with each other. When reflected in an 
        honest and compassionate way, we are able self-teachers with socially-expanded insight.
      </p>

      <p>Some of us have looked far and wide intellectually; there's a lot of theory 
        underneath <Link to="/what-we-do">what we do</Link> together.
        But it’s also what people everywhere have known and done for millenia, 
        in villages, tribes, and crews of belonging and support. There is wisdom in both 
        science and woo, in the latest discoveries and in ancient traditions. We thrive
        as social, relational beings, growing in small groups of high trust - and even as
        we’re faced with global challenges that demand coordination across humanity to meet,
        it doesn't look like there's any solution to global unity that doesn't grow fractally
        outward from interpersonal trust and cooperation at local scale.
      </p>

      <p>Many new members thus far have come in with a high degree of emotional self-awareness 
        and "cognitive de-fusion," having been on their own developmental journeys for some 
        time already. This seems helpful but not essential, and we haven't established a minimum 
        age or maturity for membership yet. Some level of self-authorship can emerge in a 17-year-old, 
        or at 30-and-beyond depending on one's stimuli and environment.
      </p>

      <p>Lastly, most of us have a fairly high degree of tolerance for nebulosity, uncertainty, 
        and abstraction. We're making this up as we go, creating just-in-time structure as we 
        need it. Sometimes we lean into the not-knowing - playing and sensing without pre-selecting 
        a norm, so that we can feel into the desires and intentions we bring to a domain rather 
        than relying on conventional or implicit norms and expectations.
      </p>
      <div style={{textAlign: "right", marginBottom: "-25px"}}>
        Next page: <Link to="/what-we-do">What We Do</Link>
      </div>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;