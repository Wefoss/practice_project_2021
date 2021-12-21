import React from 'react';
import styles from './LayoutLightBg.module.scss'

const LayoutLightBg = (props) => {
    return (
        <div className={styles.bg}>
            {props.children}
        </div>
    );
}

export default LayoutLightBg;
