import React, { useState } from "react";
import cx from "classnames";
import styles from "./PricingListItems.module.scss";
import PricingListItemSection from "../PricingListItemSection";

const borderColor = {
  bronze: "#e0b48d",
  gold: "#e8b954",
  platinum: "#555",
  managed: "#28d2d0",
};

const PricingListItems = ({
  items: { id, pricing, title, price, link },
  items,
}) => {
  const { ...rest } = items["main section"];

  const [toggle, setToggleContent] = useState(false);
  const hideAndOpenMobailContent = cx(styles.card_adapth, {
    [styles.hide]: !toggle,
    [styles.open]: toggle,
  });

  const cardBorder = cx(styles.card, styles[pricing], hideAndOpenMobailContent);

  const togglePanl = (e) => {
    setToggleContent(toggle === false ? true : false);
  };

  return (
    <article className={cardBorder}>
      <div
        style={{ border: `10px solid ${borderColor[pricing]}` }}
        className={styles.card_header}
      >
        <h1 style={{ color: `${borderColor[pricing]}` }}>{pricing}</h1>
        <h3>{title}</h3>
        <span>US${price}</span>
      </div>

      <div
        className={styles.adapthBtn}
        style={{ color: `${borderColor[pricing]}` }}
      >
        <div>
          <span>{pricing}</span>
          <span>US${price}</span>
        </div>
        {!toggle && <i onClick={togglePanl} className="fa fa-plus"></i>}
        {toggle && <i onClick={togglePanl} className="fa fa-minus"></i>}
      </div>

      <PricingListItemSection items={rest} link={link} pricing={pricing} />
    </article>
  );
};

export default PricingListItems;
