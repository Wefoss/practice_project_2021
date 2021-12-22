import React from "react";
import styles from "./StarContest.module.scss";

const StarContest = () => {
  return (
    <section className={styles.starContest}>
      <div className={styles.starContest_content}>
        <p>
          Ready to get started? Launch a contest and start receiving submissions
          instantly.
        </p>
        <a className={styles.starContest_link}>
          <i className="far fa-lightbulb"></i>
          <p>Start A Contest</p>
        </a>
      </div>
    </section>
  );
};

export default StarContest;
