import React from "react"
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import CenteredColumn from "../components/centered-column"

const NamedDefault = ({ data }) => (
  <Layout>
    <div style={{ height: "5vh" }}></div>
    <CenteredColumn>
      <Typography variant="h3">Resources</Typography>
      <p></p>
      <Typography variant="h4">Relational Practices</Typography>
      <p>We have tried and enjoyed the following practices:</p>
      <Typography variant="h5">Authentic Relating</Typography>
      <ul>
        <li>This is a large collection of "game" practices, best represented by the manual assembled 
          by Sara Ness. We've used the Noticing game, Hotseat, and others as building blocks 
          of culture and communication.</li>
        <li><a href="https://www.authrev.org/what-is-authentic-relating">Authentic Revolution's</a> <a 
          href="https://authrev.gumroad.com/l/AR-Games">Games Manual</a></li>
        <li><a href="https://authenticrelating.co/">ART International's</a> <a 
          href="https://authenticrelating.co/five-practices/">Five Practices of Authentic Relating</a></li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-i-notice-you-seem/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Collective Presencing</Typography>
      <ul>
        <li>A circle practice of group sense-making, developed by Ria Baeck</li>
        <li><a href="https://www.collectivepresencing.org/">www.collectivepresencing.org</a></li>
        <li><a href="https://buttondown.email/intentionalsociety/archive/intentional-society-unfolding-the-collective/">
          Our experience report</a></li>
      </ul>
      <Typography variant="h5">Inquiry Spiraling</Typography>
      <Typography variant="h5">Empathy Circling</Typography>
      <Typography variant="h5">Circling</Typography>
      <Typography variant="h5">T-group</Typography>
      <Typography variant="h5">Glass Bead Game</Typography>
      <Typography variant="h5">Agile Retrospectives</Typography>
      <Typography variant="h4">Friends of Intentional Society</Typography>
      <p>We consider these entities, organizations, or people to be allied, aligned, or inspiring to us:</p>
      <Typography variant="h5">Starter Cultures</Typography>
      <ul>
        <li><a href="https://www.startercultures.us/">Website</a></li>
        <li>We picked up T-group from 
          their <a href="https://www.startercultures.us/creative-offerings/communication-dojo">Communication Dojo</a></li>
      </ul>
      <Typography variant="h5">Microsolidarity</Typography>
      <ul>
        <li><a href="https://www.microsolidarity.cc/">Website</a> <a 
        href="https://www.thehum.org/microsolidarity">Training</a></li>
        <li>Rich Bartlett assembled this framework and vocabulary for decentralized organizing, 
          from which we reference the "fractal of belonging" and other labels like "crews" and "caller".</li>
      </ul>
      <Typography variant="h5">The Bridge Community</Typography>
      <ul>
        <li>Original Youtube <a href="https://www.youtube.com/watch?v=ss2_PIzl9ik">video</a></li>
        <li>This is a Discord community organized around Evan McMullen's Stoa talks by the same name.</li>
      </ul>
      <Typography variant="h5">Enspiral</Typography>
      <ul>
        <li><a href="https://www.enspiral.com/">Website</a></li>
        <li>Enspiral, originally a collective of New Zealand-based freelancers, has been hugely influential in 
          the domain of co-ops and self-managed organizations. We've taken wisdom 
          from their <a href="https://handbook.enspiral.com/">handbook</a>, practices, and various ventures 
          including Greaterthan, The Hum, and Loomio.
        </li>
      </ul>
      <Typography variant="h5">Sacred Ground</Typography>
      <ul>
        <li>Mighty Networks <a href="https://community.sacredground.us/landing">Website</a></li>
        <li>A "We-Space community on the evolving edge of Mutuality" organized by Stephen Marcus 
          that also serves as a base for the Collective Presencing community.</li>
      </ul>
      <Typography variant="h5">Building Belonging</Typography>
      <ul>
        <li><a href="https://www.buildingbelonging.us/">Website</a> <a 
          href="https://citizenstout.substack.com/">Newsletter</a></li>
        <li>A "home for people committed to building a world where everyone belongs" sourced by Brian Stout, 
          which has some community overlap with Starter Cultures and Microsolidarity fans.
        </li>
      </ul>
      <ul>

      </ul>
    </CenteredColumn>
  </Layout>
);
export default NamedDefault;