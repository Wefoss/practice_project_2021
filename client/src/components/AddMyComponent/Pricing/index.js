import React from "react";
import styles from "./Pricing.module.scss";
import PricingListItems from "../PricingListItems";
import pirsingContent from "./pricingContent.json";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricing_container}>
        {pirsingContent.map((el) => (
          <PricingListItems key={el.id} items={el}/>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

