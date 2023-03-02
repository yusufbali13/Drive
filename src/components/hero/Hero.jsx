import React from "react";
import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input type="text" placeholder="Search Location" />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>{/* <button>Search</button> */}</div>
      </form>
    </div>
  );
};

export default Hero;
