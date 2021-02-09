import React from "react"
import styles from "./buttondownsignup.module.css"

export default () => (
  <div style={{minWidth: "300px", maxWidth: "500px", marginBlock: "1em"}}>
    <h3>Newsletter</h3>
    <p>Want to stay informed? Enter your email for weekly progress updates:</p>
    <div className={styles.popout}>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/intentionalsociety"
        method="post"
        target="popupwindow"
        onSubmit={() => (window.open('https://buttondown.email/intentionalsociety', 'popupwindow'))}
        className="embeddable-buttondown-form"
      >
        <input type="email" name="email" id="bd-email" className={styles.textarea} placeholder="<email address>"></input>
        <input type="hidden" value="1" name="embed"></input>
        <input type="submit" value="Subscribe" className={styles.button}></input>
        <div style={{textAlign: "right"}}>
          <a href="https://buttondown.email" target="_blank" rel="noreferrer" className={styles.referral}>Powered by Buttondown.</a>
        </div>
      </form>
    </div>
  </div>
)