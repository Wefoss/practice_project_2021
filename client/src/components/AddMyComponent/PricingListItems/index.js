import React from "react";
import cx from "classnames";
import styles from "./PricingListItems.module.scss";
import PricingListItem from "../PricingListItem";
import PricingResurses from "../PricingResurses";
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

  // const [toggle, setToggleContent] = useState(false);
  // const hideAndOpenMobailContent = cx(styles.card_adapth, {
  //   [styles.hide]: !toggle,
  //   [styles.open]: toggle,
  // });

  // const cardBorder = cx(styles.adapthSection, styles[pricing]);

  // const toggleContent = () => {
  //   setToggleContent(toggle === false ? true : false);
  // };

  const renderPricingItems = (el, id) => {
    return (
      <PricingListItem
        key={id}
        pricing={rest}
        item={
          el === "resources" ? <PricingResurses items={rest} str={el} /> : el
        }
      />
    );
  };

  return (
    <article className={styles.card}>
      <div
        style={{ border: `10px solid ${borderColor[pricing]}` }}
        className={styles.card_header}
      >
        <h1>{pricing}</h1>
        <h3>{title}</h3>
        <span>US${price}</span>
      </div>

      <PricingListItemSection items={rest} link={link} pricing={pricing} />
    </article>
  );
};

export default PricingListItems;
