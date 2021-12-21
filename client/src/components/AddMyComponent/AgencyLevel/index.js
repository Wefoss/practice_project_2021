import React from "react";
import styles from "./AgencyLevel.module.scss";
import ListItem from "../ListItem";
import LayoutLightBg from "../LayoutLightBg";
import agency from "./agencyContent.json";

const AgencyLevel = () => {
  return (
    <LayoutLightBg>
      <section className={styles.agency}>
        <h1>Agency Level Experience</h1>
        <div className={styles.agency_container}>
          {agency.map((el) => {
            return <ListItem key={el.id} items={el} />;
          })}
        </div>
          <button className={styles.agency_btn}>Learn More About Agency Services</button>
      </section>
    </LayoutLightBg>
  );
};

export default AgencyLevel;
