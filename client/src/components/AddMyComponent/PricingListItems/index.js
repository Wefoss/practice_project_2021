import React, { useState, useRef } from "react";
import cx from "classnames";
import styles from "./PricingListItems.module.scss";
import PricingListItemSection from "../PricingListItemSection";
import constants from "../../../constants";

const {BORDER_COLOR} = constants


const PricingListItems = ({
  items: { id, pricing, title, price, link },
  items,
}) => {
  const { ...rest } = items["main section"];
  const closeAdapthWindown = useRef();

  const [toggle, setToggleContent] = useState(false);
  const hideAndOpenMobailContent = cx({
    [styles.hide]: !toggle,
    [styles.open]: toggle,
  });

  const cardBorder = cx(styles.card, styles[pricing], hideAndOpenMobailContent);

  const togglePanel = (e) => {
    e.target.closest("ARTICLE").toggleAttribute("closedCurrent");
    if (e.target.closest("ARTICLE").hasAttribute("closedCurrent")) {
      setToggleContent(true);
    } else setToggleContent(false);

    e.target.closest("ARTICLE").parentNode.childNodes.forEach((el) => {
      if (+el.getAttribute("id", id) !== id) {
        el.removeAttribute("closedCurrent");
        el.classList.remove(styles.open);
        el.classList.add(styles.closed);
      } else {
        el.classList.remove(styles.closed);
        el.classList.add(styles.open);
      }
    });
  };

  return (
    <article ref={closeAdapthWindown} id={id} className={cardBorder}>
      <div
        style={{ border: `10px solid ${BORDER_COLOR[pricing]}` }}
        className={styles.card_header}
      >
        <h1 style={{ color: `${BORDER_COLOR[pricing]}` }}>{pricing}</h1>
        <h3>{title}</h3>
        <span>US${price}</span>
      </div>

      <div
        className={styles.adapth_btn}
        style={{ color: `${BORDER_COLOR[pricing]}` }}
      >
        <div>
          <span>{pricing}</span>
          <span>US${price}</span>
        </div>
         <span className={styles.icon_increment}><i onClick={togglePanel} className="fa fa-plus"></i></span>
         <span className={styles.icon_decrement}><i onClick={togglePanel} className="fa fa-minus"></i></span> 
      </div>

      <PricingListItemSection items={rest} link={link} pricing={pricing} />
    </article>
  );
};

export default PricingListItems;
