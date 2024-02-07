import React from "react";
import style from "./HeadlineBottomCard.module.scss";

const HeadlineBottomCard = () => {
  return (
    <div>
      <section className={style.contentItem__content}>
        <a>
          <div className={style.contentItem__titleWrapper}>
            <h2 className={style.contentItem__title}>
              One trade that each NBA team could realistically do before the
              deadline
            </h2>
            <p className={style.contentItem__subhead}>
              Dame will play in front of the Portland crowd as a Buck for the
              first time.
            </p>
            <div className={style.contentItem__contentMeta}>
              <span>3h</span>
              <span className={style.contentMeta__author}>Kiley McDaniel</span>
            </div>
          </div>
          <img src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0109%2Fr1275197_1296x729_16%2D9.jpg&w=476&h=266&scale=crop&cquality=40&location=center"></img>
        </a>
      </section>
    </div>
  );
};

export default HeadlineBottomCard;
