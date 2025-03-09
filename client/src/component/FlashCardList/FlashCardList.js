import React from "react";
import classNames from "classnames/bind";

import FlashCard from "./FlashCard";
import styles from "./FlashCard.module.scss";

const cx = classNames.bind(styles);


const FlashCardList = ({words}) => {
  return (
    <div className={cx("container")}>
      {words.map((item) => (
        <FlashCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FlashCardList;
