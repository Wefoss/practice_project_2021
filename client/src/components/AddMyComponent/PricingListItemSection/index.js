import React from "react";
import styles from "./PricingListItemSection.module.scss";
import PricingListItem from "../PricingListItem";
import PricingResurses from "../PricingResurses";
import constants from "../../../constants";

const {BORDER_COLOR} = constants


const PricingListItemSection = ({items, link, pricing}) => {
   
  const renderPricingItems = (el, id) => {
    return (
      <PricingListItem
        key={id}
        pricing={items}
        item={
          el === "resources" ? <PricingResurses items={items} str={el} /> : el
        }
      />
    );
  };

  return (
    <>
      <ul className={styles.main_section}>
        {Object.keys(items).map(renderPricingItems)}
      </ul>

      {link && (
        <p className={styles.link_str}>
          Learn More about <a href={link}>Managed Contest Service</a>{" "}
        </p>
      )}
      <a
        style={{ backgroundColor: `${BORDER_COLOR[pricing]}` }}
        className={styles.btn}
        href="#"
      >
        <i className="fas fa-check"></i> Start
      </a>
    </>
  );
};

export default PricingListItemSection;
