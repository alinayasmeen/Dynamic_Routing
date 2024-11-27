import React from 'react'
import styles from '../Page.module.css' // Assuming styles are defined in a CSS module

function Footer() {
  return (
    <div className={`${styles.background} ${styles.font}`}>
      <p>Copyright © 2020 My Website. All rights reserved.</p>
      <p>Powered by React</p>
      <p>Contact Us: <a href="mailto:info@example.com">info@example.com</a></p>
      <p>Terms of Service: <a href="/terms-of-service">Terms of Service</a></p>
      <p>Privacy Policy: <a href="/privacy-policy">Privacy Policy</a></p>
      <p>Cookie Settings: <a href="/cookie-settings">Cookie Settings</a></p>
      <p>Site Map: <a href="/site-map">Site Map</a></p>
      <p>Accessibility: <a href="/accessibility">Accessibility</a></p>
      <p>Sitemap Generator: <a href="/sitemap-generator">Sitemap Generator</a></p>
      <p>Secure Payment Gateway</p>
    </div>
  )
}

export default Footer

