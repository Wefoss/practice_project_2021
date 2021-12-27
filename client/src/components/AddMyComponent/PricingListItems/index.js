import React from "react";
import cx from "classnames";
import styles from "./PricingListItems.module.scss";
import PricingListItem from "../PricingListItem";
import PricingResurses from "../PricingResurses";

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

  // const renderResurses = (str) => {
  //   const resources = Object.keys(rest[str]);
           
  //   return (
  //     <ul className={styles.resources}>
  //       {resources.map((el, id) => (
  //         <li key={id}>
  //           <p>
  //             <i style={{ fontSize: "smaller" }} className="fas fa-check"></i>{" "}
  //             {el} {el === 'Audience Testing(Up to 6 Names)' && <a href="#">View Sample Report</a>}
  //           </p>
  //           <p id={id} className={styles.resources_info}>
  //             {rest[str][el]}
  //           </p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  const renderPricingItems = (el, id) => {
    return (
      <PricingListItem
        key={id}
        pricing={rest}
        item={el === "resources" ? <PricingResurses items={rest} str={el} /> : el}
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

      <ul className={styles.mainSection}>
        {Object.keys(rest).map(renderPricingItems)}
      </ul>

      {link && (
        <p className={styles.card_link}>
          Learn More about <a href={link}>Managed Contest Service</a>{" "}
        </p>
      )}
      <a
        style={{ backgroundColor: `${borderColor[pricing]}` }}
        className={styles.card_btn}
        href="#"
      >
        <i className="fas fa-check"></i> Start
      </a>
    </article>
  );
};

export default PricingListItems;
