import React, { useRef, useEffect, useState } from "react";
import styles from "./PricingListItem.module.scss";
import cx from "classnames";

const PricingListItem = ({ item, pricing }) => {
  const [isChildList, setIsChildList] = useState(true);
  const parentListItem = useRef();
  const LastSectionsvalueAdjustment =
    item === "description1" || item === "description2";

  const classNames = cx({
    [styles.chapter]: isChildList,
    [styles.non_padding]: !isChildList,
    [styles.managen] : LastSectionsvalueAdjustment
  });

  useEffect(() => {
    if (parentListItem.current.children.length > 1) {
      parentListItem.current.previousElementSibling.dataset.borderNon = 'border'
      setIsChildList(false);
    }
  }, []);

  return (
    <li ref={parentListItem} className={classNames}>
      {LastSectionsvalueAdjustment ? pricing[item] : item}
      <p className={styles.info}>{pricing[item]}</p>
    </li>
  );
};

export default PricingListItem;
