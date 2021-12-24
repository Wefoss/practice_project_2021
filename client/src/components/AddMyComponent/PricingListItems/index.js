import React from "react";
import cx from "classnames";
import styles from "./PricingListItems.module.scss";
import PricingListItem from "../PricingListItem";

const borderColor = {
  bronze: "#e0b48d",
  gold: "#e8b954",
  platinum: "#555",
  managed: "#28d2d0",
};

const PricingListItems = ({
  items: { id, pricing, title, price, save },
  items,
}) => {
  const { ...rest } = items["main section"];

  const renderResurses = (str) => {
    const resources = Object.keys(rest[str]);

    return (
      <div>
        {resources} <p>{rest[str][resources]}</p>
      </div>
    );
  };

  const renderPricingItems = (el, id) => {
    return (
      <PricingListItem
        key={id}
        pricing={rest}
        item={el === "resources" ? renderResurses(el) : el}
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
        <span>Save ${save}</span>
      </div>
      <p>{items.description1}</p>
      <p>{items.description2}</p>
      <ul>{Object.keys(rest).map(renderPricingItems)}</ul>
    </article>
  );
};

export default PricingListItems;
