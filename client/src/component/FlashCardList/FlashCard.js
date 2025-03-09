import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FlashCard.module.scss";

const cx = classNames.bind(styles);

const FlashCard = ({ word, meaning, pinyin }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={cx("card")} onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <div className={cx("back")}>
          <p>{meaning}</p>
          {pinyin && <p className={cx("pinyin")}>{pinyin}</p>}
        </div>
      ) : (
        <div className={cx("front")}>
          <h2>{word}</h2>
        </div>
      )}
    </div>
  );
};

export default FlashCard;
