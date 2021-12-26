import React, { useRef } from "react";
import styles from './PricingListItem.module.scss'
import cx from 'classnames'


const PricingListItem = ({ item, pricing}) => {


  return (
    <li className={styles.chapter}>
      {(item === 'description1' || item === 'description2')  ? pricing[item] : item}
      <p className={styles.info} >{pricing[item]}</p>
      </li>
  );
};

export default PricingListItem;
