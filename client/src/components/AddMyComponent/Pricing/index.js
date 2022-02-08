import React from "react";
import styles from "./Pricing.module.scss";
import PricingListItems from "../PricingListItems";
import prisingContent from "./pricingContent.json";
import LayaoutLightBg from "../LayoutLightBg";

const Pricing = () => {
  return (
    <LayaoutLightBg>
      <section className={styles.pricing}>
        <div className={styles.pricing_container}>
          {prisingContent.map((el) => (
            <PricingListItems key={el.id} items={el} />
          ))}
        </div>
      </section>
    </LayaoutLightBg>
  );
};

export default Pricing;
