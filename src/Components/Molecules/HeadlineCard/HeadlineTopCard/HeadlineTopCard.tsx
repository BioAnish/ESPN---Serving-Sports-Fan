import React from "react";
import style from "./HeadlineTopCard.module.scss";

const HeadlineTopCard = () => {
  return (
    <div>
      <section className={style.headline__top__card}>
        <a>
          <div className={style.contentItem__contentWrapper}>
            <div className={style.contentItem__teamBorder}></div>
            <div className={style.contentItem__titleWrapper}>
              <h2 className={style.contentItem__title}>
                One trade that each NBA team could realistically do before the
                deadline
              </h2>
            </div>
            <div className={style.contentItem__contentMeta}>
              <span>3h</span>
              <span className={style.contentMeta__author}>Kiley McDaniel</span>
            </div>
          </div>
          <img src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0129%2Fnba_trade_30_1296x518.jpg&w=686&h=274&scale=crop&cquality=40&location=center&format=jpg"></img>
        </a>
      </section>
    </div>
  );
};

export default HeadlineTopCard;
