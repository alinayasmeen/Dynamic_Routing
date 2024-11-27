import React from "react";
import styles from "../Page.module.css";
import Link from "next/link";

function Header() {
  return (
   
    <div className={`${styles.background} ${styles.font}`}><h1>Welcome to My Website!</h1>
      <div className="flex flex-col">
        <Link href="/about"> <h2> <strong>About</strong></h2></Link>
        <Link href="/contact"><h2><strong>Contact</strong></h2></Link>
        <Link href="/career"><h2><strong>Career</strong></h2></Link>
        <Link href="/services"><h2><strong>Services</strong></h2></Link>
      </div>
    </div>
  );
}

export default Header;

