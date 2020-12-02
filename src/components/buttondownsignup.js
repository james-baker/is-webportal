import React from "react"
import styles from "./buttondownsignup.module.css"

export default () => (
  <div className={styles.popout}>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/intentionalsociety"
      method="post"
      target="popupwindow"
      onSubmit={() => (window.open('https://buttondown.email/intentionalsociety', 'popupwindow'))}
      className="embeddable-buttondown-form"
    >
      <label htmlFor="bd-email">Want to hear more? Enter your email:</label>
      <input type="email" name="email" id="bd-email" className={styles.textarea}></input>
      <input type="hidden" value="1" name="embed"></input>
      <input type="submit" value="Subscribe" className={styles.button}></input>
      <div>
        <a href="https://buttondown.email" target="_blank" rel="noreferrer" className={styles.referral}>Powered by Buttondown.</a>
      </div>
    </form>
  </div>
)