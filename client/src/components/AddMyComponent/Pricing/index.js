import React, { useState, useEffect } from "react";
import styles from "./Pricing.module.scss";
import PricingListItems from "../PricingListItems";
import pirsingContent from "./pricingContent.json";
import LayaoutLightBg from "../LayoutLightBg";

const Pricing = () => {
  return (
    <LayaoutLightBg>
      <section className={styles.pricing}>
        <div className={styles.pricing_container}>
          {pirsingContent.map((el) => (
            <PricingListItems key={el.id} items={el} />
          ))}
        </div>
      </section>
    </LayaoutLightBg>
  );
};

export default Pricing;
